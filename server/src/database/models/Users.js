import Sequelize from "sequelize";
import dbConnection from "../index";

const Users = dbConnection.define({
    username: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }
});

export default Users;