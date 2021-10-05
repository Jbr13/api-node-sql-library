import { getConnection } from "typeorm";
import { injectable } from "tsyringe";

@injectable()
export default class InsertAuthorService {
  public async execute(
    name: string,
    email: string,
    publishedBookNumbers: number
  ): Promise<any> {
    try {
      const result = await getConnection()
        .createEntityManager()
        .query(
          `EXECUTE INSERT_AUTHOR @Nome = '${name}', @Email = '${email}', @PublishedBookNumbers = '${publishedBookNumbers}'`
        );

      return `Author ${name}, with email ${email}, published book number ${publishedBookNumbers} created with success`;
    } catch (e: any) {
      if (publishedBookNumbers < 3) {
        e.message =
          `Author named ${name} must have the number of published books must be greater than 3`.toUpperCase();
        return e.message;
      }

      return e.message.toUpperCase();
    }
  }
}
