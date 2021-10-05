import { getConnection } from "typeorm";
import { injectable } from "tsyringe";

@injectable()
export default class FindAuthorService {
  public async execute(id: number): Promise<any> {
    return getConnection()
      .createEntityManager()
      .query(`EXECUTE FIND_AUTHOR @Id = '${id}'`);
  }
}
