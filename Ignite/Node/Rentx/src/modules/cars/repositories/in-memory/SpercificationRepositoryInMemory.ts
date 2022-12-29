import { Specification } from "@modules/cars/infra/typeorm/entities/Specification";

import { ICreateCategoryDTO } from "../ICategoriesRepository";
import { ISpecificationsRepository } from "../ISpecificationsRepository";

class SpercificationRepositoryInMemory implements ISpecificationsRepository {
  speficications: Array<Specification> = [];

  async create({
    description,
    name,
  }: ICreateCategoryDTO): Promise<Specification> {
    const specification = new Specification();
    Object.assign(specification, {
      description,
      name,
    });

    this.speficications.push(specification);
    return specification;
  }
  async findByName(name: string): Promise<Specification> {
    return this.speficications.find(
      (speficication) => speficication.name === name
    );
  }
  async findByIds(ids: Array<string>): Promise<Specification[]> {
    const allSpecifications = this.speficications.filter((specification) =>
      ids.includes(specification.id)
    );

    return allSpecifications;
  }
}

export { SpercificationRepositoryInMemory };
