import fastifyCors from "@fastify/cors";
import { fastify } from "fastify";

const app = fastify();

app.register(fastifyCors);

app.get('/health', () => {
  return 'OK'
});

app.listen({ port: 3000 }, () => {
  console.log('Servidor rodando na porta 3000');
})
