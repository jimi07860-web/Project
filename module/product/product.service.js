import {readFile} from "fs/promises"
import path from "path"
import {productFind, productBulkInsert} from "./productRepository.js"
import { fileURLToPath } from "url";
//
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//

const getData= async () => 
    {
    try
    {
    const filepath= path.join(__dirname, "../../product.json")
    console.log("path is", filepath)
    const data= await readFile(filepath, "utf-8")
    return JSON.parse(data)
    }
    catch(e)
    {
        throw new Error(`file reading error: ${e}`)
    }
}

export const inserProductService= async() => {

const response= await getData();
const products= response.products
// method 1 check records in db 
const records= products.map((product) => { return {
    updateOne:
        {
        filter:{
               product_id : product.id,
               name : product.name,
               slug : product.slug,
               category : product.category
               },
        update:
              {
               $set: product
              },
        upsert:true
        }
    }   
})
//const cond= {$or: records}
const productList= await productBulkInsert(records);

console.log("productlist", productList);
}
