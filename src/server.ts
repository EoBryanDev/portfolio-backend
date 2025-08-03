import fastifyCors from "@fastify/cors";
import { fastify } from "fastify";
import { env } from "../env";

const app = fastify();

app.register(fastifyCors);

app.get('/health', () => {
  return 'OK'
});

app.listen({ port: env.DEV_PORT }, () => {
  console.log('Servidor rodando na porta 3000');
})
