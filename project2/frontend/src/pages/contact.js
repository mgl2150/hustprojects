import React from 'react';
import Footer from '../components/Footer/footer';
import Header from '../components/Header/header';

const Contact = () => {
    return (
        <>
            <Header/>
            <div className="flex flex-col gap-y-12 justify-center pt-48 items-center p-4">
                <p className="text-5xl font-extrabold">Liên hệ</p>
                <p className="text-center text-xl md:lg">Thật tuyệt vời khi chúng tôi nhận được những lời nhắn từ bạn <br/> hãy liên hệ ngay với chúng tôi để được trải nghiệm dịch vụ tốt nhất</p>
                <div className="flex flex-row flex-wrap divide-x-2 gap-x-8 text-lg md:text-normal">
                    <div className="flex flex-col pl-4 mx-auto">
                        <p>PetMama, 2000-20xx</p>
                        <p>Thanh Xuân, Hà Nội</p>
                    </div>
                    <div className="flex flex-col pl-6 mx-auto">
                        <p><b>Số điện thoại:</b> 0968312xxx</p>
                        <p><b>Email:</b> long@notional.ventures.com</p>
                    </div>

                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Contact;
