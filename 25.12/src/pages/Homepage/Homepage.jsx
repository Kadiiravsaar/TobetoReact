import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';
import { Link } from "react-router-dom";



export default function Homepage() {
    // const myAsynFunction = () => {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve("veri örneği") // resolve başarılı 
    //             // reject("")  // reject başarısız
    //         }, 3000)
    //     });
    // }

    const [products, setProducts] = useState([])

    useEffect(() => {

        // fetch("https://dummyjson.com/products")

        //     .then(response => response.json())
        //     .then(json => console.log(json))
        //     .catch(err => console.log(err));



        //awaitFetch();
        axiosGet();
    }, [])

    const awaitFetch = async () => {
        let response = await fetch("https://dummyjson.com/products");
        let json = await response.json();
        console.log(json);
    }

    const axiosGet = async () => {
        let response = await axios.get("https://dummyjson.com/products");
        console.log(response.data);
    }


    // const thenCatchFinnaly = () => {
    //     console.log("Response Öncesi");

    //     myAsynFunction()
    //         .then(response => {
    //             console.log("bir cevap geldi", response);
    //         })
    //         .catch(err => {
    //             console.log("bir hata geldi", err);
    //         })
    //         .finally(() => {
    //             console.log("Async işlem sonlandı");
    //         });
    //     console.log("Response sonrası");

    // }
    // const asyncAwait = async () => {
    //     console.log("Response Öncesi");
    //     try {
    //         let response = await myAsynFunction();
    //         console.log(response);
    //         // eğer await kullanıyorsak ve reject olursa manuel try catch yazmak gerekir
    //     } catch (error) {
    //         console.log(error);
    //     }
    //     console.log("Response sonrası");
    // }

    // useEffect(() => {

    //     //thenCatchFinnaly();
    //     asyncAwait();
    // }, [])


    return (
        <div>
            Homepage
            <br />
            {/* SPA'larda href attribute'ı kullanımı yanlıştır. */}

            <Link to={"/products"}>Ürünler Sayfası</Link>
        </div>
    );
}
