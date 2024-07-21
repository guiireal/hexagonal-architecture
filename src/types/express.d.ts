import User from "@/core/user/models/User";

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}

export {};
