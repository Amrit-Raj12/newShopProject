import  mongoose  from 'mongoose'

const reviewSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    rating:{
        type:Number,
        required:true,
    },
    comment:{
        type:String,
        required:true,
    },
},{
    timeStamps:true
})

const productSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    name:{
        type: String,
        required: true,
        index: true
    },
    image:{
        type: String,
        required: true,
    },
    brand:{
        type: String,
        required: true
    },
    category:{
        type: String,
        enum: ['Bedroom', 'Kitchen', 'Dining', 'Office', 'Living'],
        required: true
    },
    description:{
        type: String,
        required: true,
    },
    reviews:[reviewSchema],
    rating:{
        type: Number,
        required: true,
        default:0,
    },
    numReviews:{
        type: Number,
        required: true,
        default:0,
    },
    price:{
        type: Number,
        required: true,
        default:0,
    },
    size:{
        type: String,
        enum: ['Small', 'Regular', 'Large', 'Grande'],
        required: true,
        default: 'Regular',
    },
    countInStock:{
        type: Number,
        required: true,
        default:0,
    },
}, {
    timeStamps:true
})

productSchema.index({name: 'text', category: 'text', size:'text', price:1})

const Product = mongoose.model('Product', productSchema)

export default Product