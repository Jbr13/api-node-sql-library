import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export default class Author {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column({ name: "published_books_number" })
  publishedBooksNumber!: number;

  /*  @CreateDateColumn({
    name: "created_at",
  })
  createdAt!: Date;

  @UpdateDateColumn({
    name: "updated_at",
  })
  updatedAt!: Date;

  @DeleteDateColumn({
    name: "deleted_at",
  })
  deletedAt?: Date;*/
}
