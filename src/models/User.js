import { DataTypes as dt} from "sequelize";

const UserModel = (sequelize) => {
  const User = sequelize.define("user", {
    username: {
      type: dt.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: dt.STRING,
      allowNull: false
    }
  },
  {
    timestamps: false
  });
  return User;
}

export default UserModel;