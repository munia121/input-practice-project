/* eslint-disable react/jsx-key */

import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Line } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";



const NavBar = () => {
    const [open, setOpen] = useState(false)



    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/products", name: "Products" },
        { id: 5, path: "/contact", name: "Contact" }
    ];

    return (
        <div className="">
            <div className="md:hidden" onClick={() => setOpen(!open)}>
                {
                    open ?
                        <MdOutlineClose className="text-3xl"></MdOutlineClose>
                        :
                        <RiMenu2Line className="text-3xl"></RiMenu2Line>
                }
            </div>

            <div className="bg-purple-400 flex items-center md:justify-around">
                <h2 className="text-3xl font-extrabold ">Signup website</h2>
                <ul className={`md:flex  px-10 font-bold gap-10 md:static duration-1000 absolute bg-purple-400  p-5 ${open ? 'top-8' : '-top-60'}`}>
                    {
                        routes.map(route => <Link route={route}></Link>)

                    }
                </ul>
            </div>
        </div>
    );
};

export default NavBar;