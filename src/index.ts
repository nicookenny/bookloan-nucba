import { PrismaClient } from '@prisma/client';
import express from 'express';
import { serverConfig } from './config';

import usersRoutes from './routes/users.routes';
import booksRoutes from './routes/books.routes';
import loansRoutes from './routes/loans.routes';

const server = express();
export const prisma = new PrismaClient();

server.use(express.json());

server.use('/users', usersRoutes);
server.use('/books', booksRoutes);
server.use('/loans', loansRoutes);

server.listen(serverConfig.PORT, () => {
  console.log(`Server is running on port ${serverConfig.PORT}`);
});
