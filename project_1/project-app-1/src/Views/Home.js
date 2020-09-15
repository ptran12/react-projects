import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Loader from '../Components/Loader'
import ProductCard from '../Components/ProductCard'


function Home(){

    const url = `https://5f5fc91990cf8d001655726e.mockapi.io/Products?page=1&limit=10`
    const [products, setProducts] = useState({
        loading: false,
        data: null
    })

    useEffect(() => {
        setProducts({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url)
            .then(response =>{
                setProducts({
                    loading: false,
                    data: response.data,
                    error: false
                })
            })
            .catch(error => {
                setProducts({
                    loading: false,
                    data: null,
                    error: true
                })
            })
    }, [url])

    let content = null

    if(products.error){
        content = <p>
            There was an error please refresh or try again later.
        </p>
    }

    if(products.loading){
        content = <Loader></Loader>
    }

    if(products.data){
        content = 
        products.data.map((product) =>
            <div key={product.id}>
                <ProductCard
                    product={product}
                />
            </div>
        )
    }


    return (
        <div>
            <h1 className="font-bold text-2xl">
                Best Sellers
            </h1>
            {content}
        </div>
    )
}

export default Home