import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarRepositoryInMemory";
import { RentalsRepositoryInMemory } from "@modules/rentals/repositories/in-memory/RentalsRepositoryInMemory";
import { DayjsDateProvider } from "@shared/container/providers/DateProvider/implementations/DayjsDateProvider";
import { AppError } from "@shared/errors/AppError";

import { CreateRentalUseCase } from "./CreateRentalUseCase";

let createRentalUseCase: CreateRentalUseCase;
let rentalsRepositoryInMemory: RentalsRepositoryInMemory;
let carsRepositoryInMemory: CarsRepositoryInMemory;
let dayjsDateProvider: DayjsDateProvider;
let dayAdd24Hours: Date;

describe("Create Rental", () => {
  beforeEach(() => {
    rentalsRepositoryInMemory = new RentalsRepositoryInMemory();
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    dayjsDateProvider = new DayjsDateProvider();
    createRentalUseCase = new CreateRentalUseCase(
      rentalsRepositoryInMemory,
      dayjsDateProvider,
      carsRepositoryInMemory
    );
    dayAdd24Hours = dayjsDateProvider.dayAdd24Hours();
  });

  it("should be able to create a new rental", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "car_test",
      description: "Car Test Description",
      daily_rate: 100,
      license_plate: "test",
      fine_amount: 40,
      category_id: "valid_category",
      brand: "brand",
    });

    const rental = await createRentalUseCase.execute({
      user_id: "valid_user_id",
      car_id: car.id,
      expected_return_date: dayAdd24Hours,
    });

    expect(rental).toHaveProperty("id");
    expect(rental).toHaveProperty("start_date");
  });

  it("should not be able to create a new rental if there is another open to the same user", async () => {
    await rentalsRepositoryInMemory.create({
      car_id: "car_id",
      user_id: "invalid_user_id",
      expected_return_date: dayAdd24Hours,
    });

    await expect(
      createRentalUseCase.execute({
        user_id: "invalid_user_id",
        car_id: "valid_one_car_id",
        expected_return_date: dayAdd24Hours,
      })
    ).rejects.toEqual(new AppError("There'is a rental in progress for user"));
  });

  it("should not be able to create a new rental if there is another open to the same car", async () => {
    await rentalsRepositoryInMemory.create({
      car_id: "invalid_car_id",
      user_id: "user_id",
      expected_return_date: dayAdd24Hours,
    });

    expect(
      createRentalUseCase.execute({
        user_id: "invalid_two_user_id",
        car_id: "valid_car_id",
        expected_return_date: dayAdd24Hours,
      })
    ).rejects.toEqual(new AppError("Car is unavailable", 400));
  });

  it("should not be able to create a new rental with invalid return time", async () => {
    expect(async () => {
      await createRentalUseCase.execute({
        user_id: "valid_one_user_id",
        car_id: "invalid_car_id",
        expected_return_date: dayjsDateProvider.dateNow(),
      });
    }).rejects.toThrowError(AppError);
  });
});
