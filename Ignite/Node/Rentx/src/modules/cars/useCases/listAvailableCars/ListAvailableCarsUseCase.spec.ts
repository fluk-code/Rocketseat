import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarRepositoryInMemory";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let carsRepositoryInMemory: CarsRepositoryInMemory;
let listAvailableCars: ListAvailableCarsUseCase;

describe("List Cars ", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCars = new ListAvailableCarsUseCase(carsRepositoryInMemory);
  });

  it("should be able to list all availble cars", async () => {
    await carsRepositoryInMemory.create({
      name: "Car One",
      description: "description",
      daily_rate: 110.0,
      license_plate: "ABC-1000",
      fine_amount: 40,
      brand: "Car Brand",
      category_id: "8d4715f2-acfe-44f6-bee2-1a6ac2312eb6",
    });
    const cars = await listAvailableCars.execute({});

    expect(cars.length).toBeTruthy();
  });

  it("should be able to list all availble cars by brand", async () => {
    await carsRepositoryInMemory.create({
      name: "Car One",
      description: "description",
      daily_rate: 110.0,
      license_plate: "ABC-1000",
      fine_amount: 40,
      brand: "Car_brand_test",
      category_id: "8d4715f2-acfe-44f6-bee2-1a6ac2312eb6",
    });
    const cars = await listAvailableCars.execute({
      brand: "Car_brand_test",
    });

    expect(cars.length).toBeTruthy();
  });

  it("should be able to list all availble cars by name", async () => {
    await carsRepositoryInMemory.create({
      name: "Car_name_test",
      description: "description",
      daily_rate: 110.0,
      license_plate: "ABC-1000",
      fine_amount: 40,
      brand: "Car Brand",
      category_id: "8d4715f2-acfe-44f6-bee2-1a6ac2312eb6",
    });
    const cars = await listAvailableCars.execute({
      name: "Car_name_test",
    });

    expect(cars.length).toBeTruthy();
  });

  it("should be able to list all availble cars by id category", async () => {
    await carsRepositoryInMemory.create({
      name: "Car_name_test",
      description: "description",
      daily_rate: 110.0,
      license_plate: "ABC-1000",
      fine_amount: 40,
      brand: "Car Brand",
      category_id: "8d4715f2-acfe-44f6-bee2-1a6ac2312eb6",
    });
    const cars = await listAvailableCars.execute({
      category_id: "8d4715f2-acfe-44f6-bee2-1a6ac2312eb6",
    });

    expect(cars.length).toBeTruthy();
  });
});
