import cors from '@fastify/cors';
import { PrismaClient } from '@prisma/client';
import Fastify from 'fastify';

const app = Fastify();
const prisma = new PrismaClient();
app.register(cors);

app.get('/hello', async () => {
  const habits = await prisma.habit.findMany({});

  return habits;
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server is running');
  });
