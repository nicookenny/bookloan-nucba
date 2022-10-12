import { Request, Response } from 'express';
import { UsersService } from '../services';

export class UsersController {
  constructor() {}

  public static async create(req: Request, res: Response) {
    const { email, dni, age, firstname, lastname } = req.body;
    const data = await UsersService.create({
      email,
      dni,
      age,
      firstname,
      lastname,
    });
    res.send(data);
  }

  public static async findAll(_req: Request, res: Response) {
    const data = await UsersService.findAll();
    res.send(data);
  }

  public static async findOne(req: Request, res: Response) {
    const { id } = req.params;
    const data = await UsersService.findOne(+id || 0);
    res.send(data);
  }
}
