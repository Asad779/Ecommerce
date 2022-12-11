import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

const Products = () => {

    const [data, setdata] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;
    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const reponse = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setdata(await reponse.clone().json());
                setFilter(await reponse.json());
                setLoading(false);
                console.log(filter);
            }
            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, []);

    const Loading = () => {
        return (
        <>
        <div className="col-md-3">
            <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
            <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
            <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
            <Skeleton height={350}/>
        </div> 
        </>
        );
    };

    const filterProduct = (cat) =>{
        const updatedList = data.filter((x)=>x.category === cat);
        setFilter(updatedList);
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="button d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>All</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("men clothing")}>MENS Cloths</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("Women clothing")}>WOMEN Cloths</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("Jewelary")}>JEWELARY Cloths</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("Electronics")}>Electronic</button>
                </div>
                {filter.map((Products) => {
                    return (
                        <>
                            <div className="col-md-3 mb-4">
                                <div class="card h-100 text-center p-4" key={Products.id}>
                                    <img src={Products.image} class="card-img-top" alt={Products.title} height="250px"/>
                                        <div class="card-body">
                                            <h5 class="card-title mb-0">{Products.title.substring(0,12)}</h5>
                                            <p class="card-text lead fw-bold">${Products.price}</p>
                                            <a to={`/products/${Products.id}`} class="btn btn-outline-dark">Buy Now</a>
                                        </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        );
    };
    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    )
}
export default Products;