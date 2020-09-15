import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import { faLaptopHouse } from '@fortawesome/free-solid-svg-icons'
import Loader from '../Components/Loader'


function Product(){
    const { id } = useParams()
    const url = `https://5f5fc91990cf8d001655726e.mockapi.io/Products/${id}`
    const [product, setProduct] = useState({
        loading: false,
        data: null
    })

    let content = null

    useEffect(() => {
        setProduct({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url)
            .then(response =>{
                setProduct({
                    loading: false,
                    data: response.data,
                    error: false
                })
            })
            .catch(error => {
                setProduct({
                    loading: false,
                    data: null,
                    error: true
                })
            })
    }, [url])

    if(product.error){
        content = <p>
            There was an error please refresh or try again later.
        </p>
    }

    if(product.loading){
        content = <Loader></Loader>
    }

    if(product.data){
        return (
            content = 
            <div>
                <h1 className="text-2xl font-bold mb-3">
                    {product.data.name}
                </h1>
                <div>
                    <img
                        src={product.data.images}
                        alt={product.data.name}
                    />
                </div>
                <div className="font-bold text-xl mb-3">
                    $ {product.price}
                </div>
                <div>
                    {product.description}
                </div>
            </div>
        )
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default Product