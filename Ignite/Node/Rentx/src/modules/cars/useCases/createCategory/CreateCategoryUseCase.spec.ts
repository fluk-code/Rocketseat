import { CategoriesRepositoryInMemory } from "@modules/cars/repositories/in-memory/CategoriesRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

let createCategoryUseCase: CreateCategoryUseCase;
let categoryRepositoryInMemory: CategoriesRepositoryInMemory;

describe("Create Category", () => {
  beforeEach(() => {
    categoryRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(
      categoryRepositoryInMemory
    );
  });

  it("Should be able to create a new category", async () => {
    const categoryTest = {
      name: "Category Test",
      description: "Category Description Test",
    };
    await createCategoryUseCase.execute(categoryTest);

    const categoryCreated = await categoryRepositoryInMemory.findByName(
      categoryTest.name
    );

    expect(categoryCreated).toHaveProperty("id");
  });

  it("Should not be able to create a new category with name exists", async () => {
    const categoryTest = {
      name: "Category Test",
      description: "Category Description Test",
    };
    await createCategoryUseCase.execute(categoryTest);

    await expect(createCategoryUseCase.execute(categoryTest)).rejects.toEqual(
      new AppError("Category already exists !")
    );
  });
});
