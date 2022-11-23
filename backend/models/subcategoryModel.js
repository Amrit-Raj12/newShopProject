import mongoose from 'mongoose'

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

const subcategorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: categorySchema
})

const Subcategory = mongoose.model('Subcategory', subcategorySchema)

export default Subcategory