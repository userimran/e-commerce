import mongoose  from "mongoose";

const productSchema = mongoose.Schema({
    id: String,
    url: String,
    detailsUrl: String,
    title: Object,
    price: Object,
    discription: String,
    discount: String,
    tagline: String
});

export default mongoose.model('products', productSchema);
