const UserService = require("../service/user-service");

const maxAgeRefreshToken = 30 * 24 * 60 * 60 * 1000; // 30 days
const maxAgeAccessToken = 30 * 60 * 1000; // 30 min

class UserController {
  async registration(req, res, next) {
    try {
      const { login, password } = req.body;

      const userData = await UserService.registration(login, password);

      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: maxAgeRefreshToken,
        httpOnly: true,
      });

      res.cookie("accessToken", userData.accessToken, {
        maxAge: maxAgeAccessToken,
      });

      return res.json(userData);
    } catch (error) {
      next(error);
    }
  }

  async login(req, res, next) {
    try {
      const { login, password } = req.body;

      const userData = await UserService.login(login, password);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: maxAgeRefreshToken,
        httpOnly: true,
      });

      res.cookie("accessToken", userData.accessToken, {
        maxAge: maxAgeAccessToken,
      });

      return res.json(userData);
    } catch (error) {
      next(error);
    }
  }

  async logout(req, res, next) {
    try {
      const { refreshToken } = req.cookies;

      const token = await UserService.logout(refreshToken);
      res.clearCookie("refreshToken");
      res.clearCookie("accessToken");

      return res.json(token);
    } catch (error) {
      next(error);
    }
  }

  async refresh(req, res, next) {
    try {
      const { refreshToken } = req.cookies;

      const userData = await UserService.refresh(refreshToken);

      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: maxAgeRefreshToken,
        httpOnly: true,
      });

      res.cookie("accessToken", userData.accessToken, {
        maxAge: maxAgeAccessToken,
      });

      return res.json(userData);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UserController();
