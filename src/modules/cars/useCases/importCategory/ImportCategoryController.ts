import { Request, Response} from "express";

import { importCategoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController{
    constructor(private importCategoryUseCase: importCategoryUseCase) {}
    handle(request: Request, response: Response): Response{
        const { file } = request;
        
        this.importCategoryUseCase.execute(file);

        return response.send();
    }
}

export { ImportCategoryController};