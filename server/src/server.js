import experss from "express";

import { port } from "./config";

const app = experss();

app.listen(port, console.log(`Server Started On Port ${port}`));