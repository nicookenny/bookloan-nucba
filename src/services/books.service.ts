import { PrismaClient } from '@prisma/client';
import { prisma } from '..';
import { ERROR_CODES } from '../constants/error';
import { createBookDto } from '../dto/createBook.dto';

export class BookService {
  constructor() {}

  public static async create(book: createBookDto) {
    const { title, author } = book;

    try {
      const data = await prisma.book.create({
        data: {
          title,
          author,
        },
      });

      return data;
    } catch (error: any) {
      return { error: ERROR_CODES[error.code], fields: error.meta?.target };
    }
  }
}
