import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

const getProducts = asyncHandler(async (req, res)=>{
    const products= await Product.find({})

    res.json(products)
})

const getProductsById = asyncHandler(async (req, res)=>{
    const product= await Product.findById(req.params.id)
    if(product){
      res.json(product)
    }else{
        res.status(404)
        throw new Error('Product not found')
    } 
})

const addProduct = asyncHandler(async (req, res)=>{
    try{
        const product = new Product(req.body);
        await product.save();
        res.status(201).send(product);
    }catch(e){
        res.status(400).send(e.message);
    }
})

const searchProduct = asyncHandler(async (req, res) => {
    try{
        //console.log(Number(req.params.price));
        const price = Number(req.params.price)

        function getPrice(price){
            if(price != 0 ){ 
                return price
            }else{ 
                return Number.MAX_VALUE
            }
        }
        
        function getTitle(title){
            if(title == ' '){
                return {}
            }else{
                return {$text : { $search : title, $language: 'en'}}
            }
        }
        
        const ifTitle = getTitle(req.params.title)
        const final = getPrice(price)
        console.log(ifTitle)
        
        const products = await Product.find({
            $and: [
                ifTitle,
                {
                    category: ((req.params.category==' ')?'Living':req.params.category),
                    size: ((req.params.size==' ')?'Regular':req.params.size)
                },
                {
                    price: { $lte: final }
                }
            ]
        });
        res.status(201).send(products)

    }catch(e){
        res.status(400).send(e.message);
    }
})

export { getProducts, getProductsById, addProduct, searchProduct}