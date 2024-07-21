import dotenv from "dotenv";
import express from "express";
import CreateUser from "./core/user/usecases/CreateUser";
import CreateUserController from "./external/api/CreateUserController";
import BCryptPasswordCrypto from "./external/auth/BCryptPasswordCrypto";
import UserPostgresRepository from "./external/database/UserPostgresRepository";

dotenv.config();

const app = express();
const port = process.env.API_PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRepository = new UserPostgresRepository();
const cryptoProvider = new BCryptPasswordCrypto();
const createUser = new CreateUser(userRepository, cryptoProvider);

new CreateUserController(app, createUser);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
