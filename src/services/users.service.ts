import { User } from '@prisma/client';
import { prisma } from '..';
import { ERROR_CODES } from '../constants/error';
import { createUserDto } from '../dto/createUser.dto';
import { formatDate } from '../utils/formatDate';

export class UsersService {
  constructor() {}

  public static async create(user: createUserDto) {
    const { email, dni, age, firstname, lastname } = user;

    try {
      const data = await prisma.user.create({
        data: {
          email,
          dni,
          age,
          firstname,
          lastname,
        },
      });

      return data;
    } catch (error: any) {
      return { error: ERROR_CODES[error.code], fields: error.meta?.target };
    }
  }

  public static async findAll() {
    try {
      const data = await prisma.user.findMany();
      return data;
    } catch (error) {
      console.log({ error });
    }
  }

  public static async findOne(ID: number) {
    try {
      const data = await prisma.user.findUnique({
        where: {
          ID,
        },
        include: {
          loans: {
            include: {
              Book: true,
            },
          },
        },
      });

      if (!data) return { user: null };

      const formattedData = {
        user: {
          ID: data.ID,
          firstname: data.firstname,
          lastname: data.lastname,
          email: data.email,
        },
        loans: data.loans.map((loan) => ({
          ID: loan.ID,
          due: formatDate(loan.due),
          book: {
            ID: loan.Book.ID,
            title: loan.Book.title,
            author: loan.Book.author,
          },
        })),
      };

      return formattedData;
    } catch (error) {
      console.log({ error });
    }
  }
}
