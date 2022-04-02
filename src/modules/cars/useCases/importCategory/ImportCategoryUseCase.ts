import csvParce from "csv-parse";
import fs from "fs";
 
class ImportCategoryUseCase{
    execute(file: Express.Multer.File): void{
        const stream = fs.createReadStream(file.path);

        const parseFile = csvParce()

        stream.pipe(parseFile)

        parseFile.on("data", async (line) =>{
            
        });
    }
}

export { ImportCategoryUseCase }