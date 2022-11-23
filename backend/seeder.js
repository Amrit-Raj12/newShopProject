import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import products from './data/products.js'
import User from './models/userModel.js'
import Order from './models/orderModel.js'
import Product from './models/productModel.js'
import Category from './models/categoryModel.js'
import connectDB from './config/db.js'
import categories from './data/categories.js'
//import subcategories from './data/subcategories'
//const Subcategory = require('./models/subcategoryModel')

dotenv.config()

connectDB()

const importData = async()=>{
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()
        await Category.deleteMany()

        const createdUsers =await User.insertMany(users)

        const adminUser = createdUsers[0]._id

        const sampleProducts= products.map(product=>{
            return { ...product, user:adminUser }
        })
        
        //const savedCategory = await Category.insertMany(categories)

        categories.forEach(async (element) => {
            let cat = new Category(element);
            await cat.save();
            
            //var cat_id = cat._id
            /* ----Commented to subcategory--
            if(cat.name == subcategories.Bedroom){
                const sampleSubcats = subcategories.Bedroom.map(subcat => {
                    return { ...subcat, category: 'Bedroom' }
                })
                await Subcategory.insertMany(sampleSubcats)
            } */

        });

        await Product.insertMany(sampleProducts)
        
        console.log('data imported'.green.inverse)

        process.exit()

    } catch (error) {
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }
}

const destroyData = async()=>{
    try {

        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()
        await Category.deleteMany()

        console.log('data destroyed!'.red.inverse)
        process.exit()

    } catch (error) {
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }
}

if(process.argv[2]==='-d'){
    destroyData()
}else{
    importData()
}