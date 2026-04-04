import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { getProductById } from "../Data/products";

export default function ProductDetails(){

    const {id} = useParams();

    const [products , setProducts] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {

        const foundProduct = getProductById(id);

        if(!foundProduct){
            navigate('/')
            return;
        }

        setProducts(foundProduct)

    },[id])

    if(!products)
    {
        return <h1>Loading...</h1>
    }
    return <div className="page">
        <div className="container">
            <div className="product-detail">
                <div className="product-detail-image">
                    <img src={products.image} alt={products.name} />
                </div>
                <div className="product-detail-content">
                    <h1 className="product-detail-name">{products.name}</h1>
                    <p className="product-detail-price">${products.price}</p>
                    <p className="product-detail-description">{products.description}</p>
                    <button className="btn btn-primary">Add to cart</button>
                </div>
            </div>
        </div>
    </div>;
}