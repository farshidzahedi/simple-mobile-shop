import React from 'react'
import {Link} from 'react-router-dom'
function Footer() {
  return (
    <>
    <div className='w-full' 
    style={{  
        backgroundImage: "url(" + "./image/footer-top.png" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'auto',
        backgroundRepeat: 'no-repeat'
    }}
    >
    <p className='flex justify-center rounded-xl shadow bg-white w-fit p-5 my-10 mx-auto text-red-500'>
        این وب سایت کاملا آزمایشی  و برای آموزش و تمرین طراحی شده است</p>  
    </div>

    <div className='bg-white mt-10'>
        <div>
                <h1>راهنمای خرید</h1>
                <ul>
                <li><Link to="/" className="py-7 px-3 inline-block">ثبت سفارش</Link></li>
                <li><Link to="/" className="py-7 px-3 inline-block">رویه ارسال سفارشات</Link></li>
                <li><Link to="/" className="py-7 px-3 inline-block">پیگیری سفارش</Link></li>
                <li><Link to="/" className="py-7 px-3 inline-block">راهنمای پرداخت</Link></li>
                </ul>
        </div>
    </div>
    </>
  )
}

export default Footer