import { Request, Response } from 'express';
import { LoansService } from '../services/loans.service';

export class LoansController {
  constructor() {}
  public static async create(req: Request, res: Response) {
    const { book, user, due } = req.body;
    const data = await LoansService.add({
      book,
      user,
      due,
    });
    res.send(data);
  }

  public static async getUserLoans(req: Request, res: Response) {
    const { id } = req.params;
    const data = await LoansService.getUserLoans(+id || 0);
    res.send(data);
  }
}
