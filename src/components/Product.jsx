import { cleanup } from "@testing-library/react";
import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import { addCart } from "../redux";
import { useParams } from "react-router";
import { Link } from "react-router.dom";
import Skeleton, {skeleton} from "react-loading-skeleton";


const Product =()=>{

const {id} = useParams();
const [product, setProduct] = useState([]);
const [loading, setLoading] = useState(false);

const Dispatch = useDispatch();
const addProduct = (product) =>{
    Dispatch(addCart(product));
}

useEffect(()=>{
    const getProduct = async () => {
    setLoading(true);
    const reponse = await fetch (`https://fakestoreapi.com/products/${id}`)
    setProduct(await reponse.json());
    setLoading(false);
}
getProduct();
},[]);

const Loading =()=>{
    return(
        <>
        <div className="col-md-6">
            <Skeleton height={400}/>
        </div>
        <div className="col-md-6">
            <Skeleton height={50} width={300} />
            <Skeleton height={75} />
            <Skeleton height={25} />
            <Skeleton height={50} width={150} />
            <Skeleton height={50} />
            <Skeleton height={150} />
            <Skeleton height={150} width={100}/>
        </div>
        </>
    )
}

const ShowProduct = () =>{
    return(
        <>
            <div className="col-md-6">
                <img src={product.image} alt={product.title} height="400px" width="400px"/>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">
                        {product.category}
                    </h4>
                    <h1 className="display-5">
                        {product.title}
                    </h1>
                    <p className="lead fw-bolder">
                        Rating: {product.rating && product.rating.rate}
                    </p>
                    <p className="lead">{product.description}</p>
                    <button className="btn btn-outline-dark px-4 py-2" onClick={()=>addProduct(product)}>Add to cart</button>
                    <Link to="/cart" className="btn btn-dark ms-2 px-3 py-2">Go to cart</Link>

                </div>
            </div>
        </>
    )
}
    return(
        <div>
            <div className="container py-5">
                <div className="row py-5">
                    {loading ? <Loading/> : <ShowProduct/>}
                </div>
            </div>
        </div>
    )
}
export default Product;