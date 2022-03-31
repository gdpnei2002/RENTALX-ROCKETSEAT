import { Router} from "express"
import { request } from "express";
import  {specificationRepository} from ""
import { CreateSpecificationService } from "modules/cars/services/CreateSpecificationService";

const specificationsRoutes = Router();

const specificationRepository = new specificationRepository();

specificationsRoutes.post("/". (request, response) =>{
  const { name, description } = request.body;
  const CreateSpecificationService = new CreateSpecificationService(specificationRepository);
                                  
  createSpecificationRepository.execute({ nam, description });
  return response.status(201). send();
  });

export { specificationsRoutes };