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
        const products = await Product.find({
            $text : {
                $search : 'Green', $language: 'en'
            }
        });
        res.status(201).send(products)
    }catch(e){
        res.status(400).send(e.message);
    }
})

export { getProducts, getProductsById, addProduct , searchProduct}