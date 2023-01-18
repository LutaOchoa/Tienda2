import { useEffect,useState } from "react";
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";

const ItemDetailContainer=()=>{
    const[singleproduct, setSingleProduct]=useState({});
    const idProduct='1';
    const params=useParams();

    
    const getProduct=fetch('https://fakestoreapi.com/products/${idProduct}',{
        method:'GET',
    });

    useEffect(() =>{
        getProduct
            .then((resp)=>{
                return resp.json();
            })
            .then((data)=>{
                setSingleProduct(data);
            })
            .catch((error)=>{
                console.log(error);
            })
    })
    return <div>IteDetailContainer</div>
};

export default ItemDetailContainer;