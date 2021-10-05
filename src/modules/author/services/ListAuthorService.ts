import { getConnection } from "typeorm";
import { injectable } from "tsyringe";

@injectable()
export default class ListAuthorService {
  public async execute(): Promise<any> {
    return getConnection()
      .createEntityManager()
      .query(`EXECUTE LIST_AUTHOR`);
  }
}
