import experss from "express";
import dbConnection from "./database";
import { port } from "./config";

const app = experss();

// Connect to database
dbConnection.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))

app.listen(port, console.log(`Server Started On Port ${port}`));