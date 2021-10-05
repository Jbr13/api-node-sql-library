import { inject } from "tsyringe";
import { EntityRepository, getConnection, getRepository, Repository } from "typeorm";
import Author from "../entities/Author";
import InsertAuthorService from "../../../services/InsertAuthorService";

@EntityRepository()
export default class AuthorRepository extends Repository<Author> {
    constructor(
      @inject(InsertAuthorService)
      private InsertAuthorService: InsertAuthorService
    ) {
      super();
    }
}
