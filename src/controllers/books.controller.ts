import { Request, Response } from 'express';
import { BookService } from '../services/books.service';

export class BooksController {
  constructor() {}

  public static async create(req: Request, res: Response) {
    const { title, author } = req.body;
    const data = await BookService.create({
      title,
      author,
    });
    res.send(data);
  }
}
