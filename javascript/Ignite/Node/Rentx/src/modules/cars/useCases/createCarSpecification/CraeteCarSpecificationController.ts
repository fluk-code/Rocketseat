import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase";

class CraeteCarSpecificationController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { specifications_id } = req.body;

    const craeteCarSpecificationUseCase = container.resolve(
      CreateCarSpecificationUseCase
    );

    const cars = await craeteCarSpecificationUseCase.execute({
      car_id: id,
      specifications_id,
    });

    return res.json(cars);
  }
}

export { CraeteCarSpecificationController };
