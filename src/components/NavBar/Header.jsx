import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"

import React , {useState, useEffect} from 'react'

export default function Header() {
    const [nav , setNav] = useState(false)
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState( 'white')

    const handleNav = () => {
        setNav(!nav);
      };
    
      useEffect(() => {
        const changeColor = () => {
          if (window.scrollY >= 90) {
            setColor('#ffffff');
            setTextColor('#000000');
          } else {
            setColor('transparent');
            setTextColor('#ffffff');
          }
        };
        window.addEventListener('scroll', changeColor);
      }, []);




    return (
        <div className="fixed  left-0 top-0 z-10 w-full ease-in duration-300 bg-neutral-800">
            <div className="max-w-[1240px]   mx-auto     flex justify-between items-center p-5  text-cyan-700  ">
                <Link href="/">
               <h1  style={{color: `${textColor}`}} className="text-4xl font-bold text-black  ">Logo </h1>    
                </Link>

                <ul className='hidden sm:flex  w-1/10  '>
                    <li className="p-5  text-4xl  ">
                        <Link href="/" > Home </Link>
                    </li>
                 <li className="p-5 text-4xl">
                     <Link href="/SobreMim " > Sobre </Link>
                    </li>
                    <li className="p-5 text-4xl" >
                        <Link href="/Contato" > Contatos </Link>
                    </li>
                </ul>

                {/* Mobile button*/}
                <div onClick={handleNav} className="block sm:hidden z-10">
                    { nav ? (
                        <AiOutlineClose size={20}  style={{color: `${textColor}`}}   /> 
                        
                        ) : (
                            <AiOutlineMenu size={20}  style={{color: `${textColor}`}}  />
                            )

                    }
                </div>
                {/* Mobile menu */}
                <div className=   {
                    nav
                     ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-neutral-800  text-center ease-in duration-300'
                     : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-neutral-800  text-center ease-in duration-300'
                
                }
                >
                    <ul>
       
                        <li  onClick={handleNav} className="p-4 text-4xl  "> 
                            <Link href="/" > Home </Link>
                        </li>
                        <li onClick={handleNav} className="p-4 text-4xl  ">
                            <Link href="/sobre" > Sobre </Link>
                        </li>
                        <li onClick={handleNav} className="p-4 text-4xl  ">
                            <Link href="/contatos" > Contatos </Link>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    )
}
