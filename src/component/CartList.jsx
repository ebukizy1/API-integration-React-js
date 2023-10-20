import axios from 'axios';
import React, { useCallback, useMemo, useState } from 'react'

export const CartList = () => {
    const [product, setProduct] = useState();


    const fetchProduct= useCallback(async()=>{
        try{
            const productResponse = await axios.get("https://dummyjson.com/carts");
                if(productResponse.status === 200){
                    setProduct(productResponse.data)
            };
        }
        catch(error){
            console.log(error);
        };
    }, [])

    const useMemos = useMemo(()=>{
            if(product.length > 0){
                product.map((productValue, index)=>(
                <div>


                    
                </div>
                ))
            }
    })


  return (
    <div>
        <button onClick={fetchProduct}> click me</button>
    </div>
  )
}
