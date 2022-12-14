declare global {
  namespace Express {
    interface Request {
      requesterId: number;
      foundUser: object;
    }
  }
}

export {};
