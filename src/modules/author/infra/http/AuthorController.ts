import { container } from "tsyringe";
import { NextFunction, Request, Response } from "express";
import InsertAuthorService from "../../services/InsertAuthorService";
import ListAuthorService from "../../services/ListAuthorService";
import FindAuthorService from "../../services/FindAuthorService";
import UpdateAuthorService from "../../services/UpdateAuthorService";
import DeleteAuthorService from "../../services/DeleteAuthorService";

export default class AuthorController {
  async insertAuthor(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const insertAuthorService = container.resolve(InsertAuthorService);
      const { name, email, publishedBookNumbers } = request.body;

      response.json(
        await insertAuthorService?.execute(
          String(name),
          String(email),
          Number(publishedBookNumbers)
        )
      );
    } catch (err) {
      next(err);
    }
  }

  async listAuthor(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const listAuthorService = container.resolve(ListAuthorService);

      response.json(await listAuthorService?.execute());
    } catch (err) {
      next(err);
    }
  }

  async findAuthor(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const findAuthorService = container.resolve(FindAuthorService);
      const { id } = request.params;

      response.json(await findAuthorService?.execute(Number(id)));
    } catch (err) {
      next(err);
    }
  }

  async updateAuthor(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const updateAuthorService = container.resolve(UpdateAuthorService);

      const { name, email, publishedBookNumbers } = request.body;
      const { id } = request.params;

      response.json(
        await updateAuthorService?.execute(
          name,
          email,
          publishedBookNumbers,
          Number(id)
        )
      );
    } catch (err) {
      next(err);
    }
  }

  async deleteAuthor(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const deleteAuthorService = container.resolve(DeleteAuthorService);

      const { id } = request.params;

      response.json(await deleteAuthorService?.execute(Number(id)));
    } catch (err) {
      next(err);
    }
  }
}
