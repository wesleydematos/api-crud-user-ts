// import * as express from "express";

declare global {
  namespace Express {
    interface Request {
      foundUser: object;
    }
  }
}

export {};
