import { Specification } from "../infra/typeorm/entities/Specification";
import { ICreateCategoryDTO } from "./ICategoriesRepository";

interface ICreateSpecificationsDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ description, name }: ICreateCategoryDTO): Promise<Specification>;

  findByName(name: string): Promise<Specification>;
  findByIds(ids: Array<string>): Promise<Array<Specification>>;
}

export { ISpecificationsRepository, ICreateSpecificationsDTO };
