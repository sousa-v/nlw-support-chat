import { Request, Response } from "express";
import { UserService } from "../services/UsersService";


class UsersController {
  async handle(request: Request, response: Response):Promise<Response> {
    const { email } = request.body

    const usersService = new UserService()

    const user = await usersService.create(email)

    return response.status(200).json(user)
  }
}

export { UsersController }