import dotenv from "dotenv";
import express from "express";
import CreateUser from "./core/user/usecases/CreateUser";
import LoginUser from "./core/user/usecases/LoginUser";
import CreateUserController from "./external/api/CreateUserController";
import LoginUserController from "./external/api/LoginUserController";
import BCryptCryptoProvider from "./external/auth/BCryptCryptoProvider";
import JWTTokenProvider from "./external/auth/JWTTokenProvider";
import UserPostgresRepository from "./external/database/UserPostgresRepository";

dotenv.config();

const app = express();
const port = process.env.API_PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRepository = new UserPostgresRepository();
const cryptoProvider = new BCryptCryptoProvider();
const createUser = new CreateUser(userRepository, cryptoProvider);
const loginUser = new LoginUser(userRepository, cryptoProvider);
const tokenProvider = new JWTTokenProvider(process.env.JWT_SECRET!);

new CreateUserController(app, createUser);
new LoginUserController(app, loginUser, tokenProvider);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
