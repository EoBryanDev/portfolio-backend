import { env } from "../env";
import { Application } from "./infrastructure/http/Application";

const app = new Application('fastify');
app.start(env.DEV_PORT);
