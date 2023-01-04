import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { sessionRouter } from "./routers/session";
import { userRouters } from "./routers/users";
import handleError from "./errors/handleError";

const app = express();

app.use(express.json());
app.use("/users", userRouters);
app.use("/login", sessionRouter);

app.use(handleError);

export default app;
