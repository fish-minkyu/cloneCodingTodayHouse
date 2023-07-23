const { Users } = require('../models');
const { Op } = require('sequelize');

class SignupRepositroy {
  signup = async (email, nickname, hashedPassword) => {
    const user = await Users.create({
      email,
      nickname,
      password: hashedPassword,
    });

    return user;
  };

  findUser = async (email, nickname) => {
    const user = await Users.findOne({
      where: {
        [Op.or]: [{ email }, { nickname }],
      },
    });
    return user;
  };
}

module.exports = SignupRepositroy;
