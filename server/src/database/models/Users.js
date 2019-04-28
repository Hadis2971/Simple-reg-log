import Sequelize from "sequelize";
import dbConnection from "../index";

const Users = dbConnection.define("users", {
    username: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }
}, 
{timestamps: false});

export default Users;