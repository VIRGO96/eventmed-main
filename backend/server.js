const express = require("express");
const Sequelize = require("sequelize");

let app = express();

const sequelize = new Sequelize({
  dialect: "mysql",
  database: "medicalevents",
  username: "root",
  host: "localhost",
  port: "3306",
  password: "Predator123",
  validateBulkLoadParameters: true,
  connectionLimit: 10,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

sequelize
  .query("SELECT * FROM organizers", { type: sequelize.QueryTypes.SELECT })
  .then((organizers) => {
    console.log(organizers);
  });

sequelize.query(
  "INSERT INTO organizers (OrgID, OrgName, OrgAge, OrgYearsOfExperience) VALUES (6, 'Oty', 21, 1)",
  { type: sequelize.QueryTypes.INSERT }
);

let port = process.env.PORT || 8000;
app.listen(port);
console.log(`API is running at ${port}`);
