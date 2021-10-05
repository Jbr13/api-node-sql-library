import { getConnection } from "typeorm";
import { injectable } from "tsyringe";
import Author from "../infra/typeorm/entities/Author";

@injectable()
export default class DeleteAuthorService {
  public async execute(id: number): Promise<any> {
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
      .query(`EXECUTE DELETE_AUTHOR @Id = '${id}'`);
  }
}
