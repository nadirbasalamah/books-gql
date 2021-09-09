const User = require("../model/user");

class AuthRepository {
  static async signup(data) {
    try {
      const insertedUser = await User.create({
        id: data.id,
        email: data.email,
        password: data.password,
      });

      return insertedUser;
    } catch (error) {
      console.log(error);
    }
  }

  static async login(data) {
    try {
      const user = await User.findOne({
        where: {
          email: data.email,
        },
      });

      return user;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = AuthRepository;
