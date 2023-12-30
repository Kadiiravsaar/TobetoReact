import React, { useEffect } from 'react'
import { Link } from "react-router-dom";



export default function Homepage() {

    const myAsynFunction = () => {
        return new Promise((resolve, reject) => {

            setTimeout(() => {
                resolve("veri örneği") // resolve başarılı 
                // reject("")  // reject başarısız
            }, 3000)
        });
    }


    useEffect(() => {
        myAsynFunction()
            .then(response => {
                console.log("bir cevap geldi", response);
            })
            .catch(err => {
                console.log("bir hata geldi", err);
            })
            .finally(() => {
                console.log("Async işlem sonlandı");
            });

        console.log("Merhaba");
    }, []);



    return (
        <div>
            Homepage
            <br />
            {/* SPA'larda href attribute'ı kullanımı yanlıştır. */}
            <a href="/products">Ürünler Sayfası</a>
            <br />
            <Link to={"/products"}>Ürünler Sayfası</Link>
        </div>
    );
}
