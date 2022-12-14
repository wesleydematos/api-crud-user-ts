import "reflect-metadata";
import express from "express";
import { sessionRouter } from "./routers/session";
import { userRouters } from "./routers/users";

const app = express();

app.use(express.json());
app.use("/users", userRouters);
app.use("/login", sessionRouter);

export default app;
