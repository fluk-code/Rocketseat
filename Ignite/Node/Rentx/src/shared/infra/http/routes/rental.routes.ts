import { Router } from "express";

import { CreateRentalController } from "@modules/rentals/useCase/createRental/CreateRentalController";
import { DevolutionRentalController } from "@modules/rentals/useCase/devolutionRental/DevolutionRentalController";
import { ListRentalsByUserController } from "@modules/rentals/useCase/listRentalsByUser/ListRentalsByUserController";

import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";

const rentalRoutes = Router();
const createRentalController = new CreateRentalController();
const devolutionRentalController = new DevolutionRentalController();
const listRentalsByUserController = new ListRentalsByUserController();

rentalRoutes.post("/", ensureAuthenticate, createRentalController.handle);
rentalRoutes.post(
  "/devolution/:id",
  ensureAuthenticate,
  devolutionRentalController.handle
);
rentalRoutes.get(
  "/user",
  ensureAuthenticate,
  listRentalsByUserController.handle
);

export { rentalRoutes };
