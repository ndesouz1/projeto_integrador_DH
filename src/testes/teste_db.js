const Sequelize = require("sequelize");
const dbConfig = require("../config/database");
const dbConn = new Sequelize(dbConfig);

dbConn.query("select * from users", Sequelize.QueryTypes.SELECT)
.then(
    data => {
        console.log(data);
        dbConn.close();
    }
);