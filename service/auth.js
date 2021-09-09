const AuthRepository = require("../repository/auth");

class AuthService {
  static async signup(data) {
    return await AuthRepository.signup(data);
  }

  static async login(data) {
    return await AuthRepository.login(data);
  }
}

module.exports = AuthService;
