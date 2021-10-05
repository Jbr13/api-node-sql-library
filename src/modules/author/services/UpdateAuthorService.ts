import { getConnection } from "typeorm";
import { injectable } from "tsyringe";
import Author from "../infra/typeorm/entities/Author";

@injectable()
export default class InsertAuthorService {
  public async execute(
    name: string,
    email: string,
    publishedBookNumbers: number,
    id: number
  ): Promise<any> {
    try {
      const author = await getConnection()
        .createQueryBuilder()
        .select("*")
        .from(Author, "author")
        .where("author.id = :id", { id });

      if (!author) {
        return `Author with id ${id} not found`;
      }

      return await getConnection()
        .createEntityManager()
        .query(
          `EXECUTE UPDATE_AUTHOR @Nome = '${name}', @Email = '${email}', @PublishedBookNumbers = '${publishedBookNumbers}', @Id = '${id}'`
        );
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
