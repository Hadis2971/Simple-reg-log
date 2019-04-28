import experss from "express";
import dbConnection from "./database";
import { port } from "./config";

const app = experss();

import authRouter from "./components/auth/routes";
import clientErrorHandler from "./components/error_handling/clientError";
import genericErrorHandler from "./components/error_handling/serverError";

app.use(experss.urlencoded({extended: true}));
app.use(experss.json());

// Connect to database
dbConnection.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))

app.use("/auth", authRouter);
app.use(clientErrorHandler);
app.use(genericErrorHandler);

app.listen(port, console.log(`Server Started On Port ${port}`));