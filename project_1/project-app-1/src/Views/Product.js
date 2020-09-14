import React, {useState, useEffect} from 'react'
import axios from 'axios'


function Product(){
    const url = 'https://5f5fc91990cf8d001655726e.mockapi.io/Products/4'
    const [product, setProduct] = useState(null)

    useEffect(() => {
        axios.get(url)
            .then(response =>{
                setProduct(response.data)
        })
    }, [url])

    if(product){
        return (
            <div>
                <h1>{product.name}</h1>
            </div>
        )
    }

    return (
        <div>
            
        </div>
    )
}

export default Product