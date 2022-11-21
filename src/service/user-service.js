const UserModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const tokenService = require("../service/token-service");
const UserDto = require("../dtos/user-dto");
const ApiError = require("../exceptions/api-error");

class UserService {
  async registration(login, password) {
    const candidate = await UserModel.findOne({ login });

    if (candidate) {
      throw ApiError.BadRequest(`Пользователь ${login} уже существует`);
    }

    const hashPassword = await bcrypt.hash(password, 3);

    const user = await UserModel.create({ login, password: hashPassword });

    const userDto = new UserDto(user);

    const tokens = tokenService.generateTokens({ ...userDto });

    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }

  async login(login, password) {
    const user = await UserModel.findOne({ login });

    if (!user) {
      throw ApiError.BadRequest(`Пользователь ${login} не найден`);
    }

    const check = await bcrypt.compare(password, user.password);

    if (!check) {
      throw ApiError.BadRequest("Неверный пароль");
    }

    const userDto = new UserDto(user);

    const tokens = tokenService.generateTokens({ ...userDto });

    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }

  async logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken);

    return token;
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw ApiError.UnauthorizedError();
    }
    const userData = tokenService.validateRefreshToken(refreshToken);

    const tokenFromDataBase = await tokenService.findToken(refreshToken);

    if (!userData || !tokenFromDataBase) {
      throw ApiError.UnauthorizedError();
    }

    const user = await UserModel.findById(userData.id);

    const userDto = new UserDto(user);

    const tokens = tokenService.generateTokens({ ...userDto });

    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }
}

module.exports = new UserService();
