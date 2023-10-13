//load dependencies
import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import path from "path";
import { _404errorHandler, _appErrorHandler } from "./controllers/errorHandler.js";
dotenv.config();
//load environment variables
const PORT = process.env.PORT || 6060;

//initialize express app
const app = express();
//use express support middleware
app.use(express.static(path.resolve("public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//<!-- ==========  Start From Here ========== -->//
//<!-- ==========  End From Here ========== -->//

//use error handler
app.use(_404errorHandler);
app.use(_appErrorHandler);

//server listen on port
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`.bgGreen.blue);
});
