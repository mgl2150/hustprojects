import React from 'react';
import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

import Category from '../components/Category/category';
import Footer from '../components/Footer/footer';
import Header from '../components/Header/header';
import Product from '../components/Product/product';
import Slider from '../components/Slider/slider';

import petCate from '../img/petCate.png';
import petFood from '../img/petFood.png';
import petShampoo from '../img/petShampoo.png';
import petCollar from '../img/petCollar.png';
import NewsLetter from '../components/News Letter/newsLetter';
// import {pets} from '../data/data.js'

// const categories=[
//     {
//         title:'Thú cưng',
//         color:'green',
//         image:petCate,
//     },
//     {
//         title:'Thức ăn',
//         color:'yellow',
//         image:petFood,
//     },
//     {
//         title:'Phụ kiện',
//         color:'indigo',
//         image:petCollar,
//     },
//     {
//         title:'Dịch vụ',
//         color:'rose',
//         image:petShampoo,
//     }
// ]





const Home = ({data}) => {
    const navigate = useNavigate();

  
    return (
        <>
            <Header/>
            <Slider/>
            {/*hot category */}
            <div className="flex flex-col items-center text-center justify-center py-4 gap-2 px-4 ">
                <p className="font-extrabold text-4xl">Dịch vụ</p>
                <p className="text-xl md:text-lg">Cung cấp đầy đủ các dịch vụ cho thú cưng của bạn</p>
                <div className="flex flex-row flex-wrap gap-x-20 gap-y-8 py-4 justify-center">
                    <div onClick={()=>{navigate('/petProduct')}} className="flex flex-col items-center gap-y-4">
                        <img className="rounded-[120px] max-w-[350px] hover:scale-105 ease-in duration-300" src="https://petmania.vamtam.com/wp-content/uploads/2022/07/iStock-1271793136.jpg" alt="img"/>
                        <p className="text-3xl font-extrabold">Phụ kiện</p>
                    </div>
                    <div onClick={()=>{navigate('/petService')}} className="flex flex-col items-center gap-y-4">
                        <img className="rounded-[120px] max-w-[350px] hover:scale-105 ease-in duration-300" src="https://petmania.vamtam.com/wp-content/uploads/2022/07/iStock-1398781665.jpg" alt="img"/>
                        <p className="text-3xl font-extrabold">Dịch vụ</p>
                    </div>
                    <div onClick={()=>{navigate('/petFood')}} className="flex flex-col items-center gap-y-4">
                        <img className="rounded-[120px] max-w-[350px] hover:scale-105 ease-in duration-300" src="https://petmania.vamtam.com/wp-content/uploads/2022/07/iStock-1140125261.jpg" alt="img"/>
                        <p className="text-3xl font-extrabold">Thức ăn</p>
                    </div>
                </div>
            </div>

            <p className="text-center text-5xl py-8">Bán chạy</p>
            
            {/* product */}
            <div className="flex flex-row flex-wrap gap-8 items-center justify-center">
                {
                    data.map((pet)=>(
                        <Product key={pet.id} pet={pet}/>
                    ))
                }
            </div>

            {/* advertise */}
            <div className="flex flex-row flex-wrap justify-center gap-x-32 text-center px-4 pt-16">
                    <img className="rounded-xl md:max-w-md maw-w-[80px] object-cover rounded-xl" src="https://petmania.vamtam.com/wp-content/uploads/2022/07/iStock-513048080.png" alt="img"/>

                    <div className="flex flex-col my-auto gap-y-4">
                        <p className="font-extrabold text-4xl max-w-[450px] text-center">Cửa hàng đồ dùng và thức ăn cho thú cưng của bạn</p>
                        <p className="max-w-[450px] text-lg md:text-normal">My back up plan in case crypto goes to 0</p>
                    </div>
            </div>  
                    
            <NewsLetter/>

            <Footer/>
            
            
        </>
    );
}

export default Home;
