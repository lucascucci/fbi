import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
const [data, setData] = useState([])
const API ='https://api.fbi.gov/wanted/v1/list'

useEffect(()=>{
    fetch (API)
    .then ((res)=> (res.json()) )
    .then ((res)=> setData(res.items))
},[])
    console.log(data);
    return (
        <>
        <ItemList data={data}/>
        </>
    )
}

export default ItemListContainer;
