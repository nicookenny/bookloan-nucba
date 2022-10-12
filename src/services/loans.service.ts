import { PrismaClient } from '@prisma/client';
import { prisma } from '..';
import { addLoanDto } from '../dto/addLoan.dto';
export class LoansService {
  constructor() {}

  public static async add(loan: addLoanDto) {
    try {
      const data = await prisma.bookLoan.create({
        data: {
          bookID: loan.book,
          userID: loan.user,
          due: new Date(`${loan.due}T18:00:00`),
          date: new Date(),
        },
      });
      return data;
    } catch (error) {
      console.log({ error });
    }
  }

  public static async getUserLoans(id: number) {
    try {
      const data = await prisma.bookLoan.findMany({
        where: {
          userID: id,
        },
        include: {
          Book: true,
        },
      });
      return data;
    } catch (error) {
      console.log({ error });
    }
  }
}
