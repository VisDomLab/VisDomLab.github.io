import React, { useEffect, useState }  from "react";
import { Link, useLocation } from "react-router-dom";
import './NavBar.css';

//react icons
import { FaBarsStaggered, FaBook, FaXmark } from "react-icons/fa6";
// import { useLocation } from "react-router-dom";
// import visdomLogoNav from '../../assets/logo_2.png';

import visdomLogo from '../../assets/visdom_nav_trans.png';
import iiserbLogo from '../../assets/iiserb_nav.png';

const Navbar = () =>{
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    
    

    //toggle menu 
    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () =>{
            setIsSticky(window.scrollY > 100);
            if(window.scrollY > 100){
                setIsSticky(true);
            }else{
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        
        return () => {
            window.addEventListener("scroll", handleScroll);
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    const location = useLocation();
    const [currentPath, setCurrentPath] = useState();
    useEffect(() => {
        setCurrentPath(location.pathname);
        // console.log(location.pathname);
    }, [location]);
    
    //Nav items
    const navItems = [
        {link: "Home", path: "/"},
        {link: "Members", path: "/group-members"},
        // {link: "Projects", path: "/projects"},
        {link: "Publications", path: "/publications"},
        {link: "Resources", path: "/resources"},
    ]
 
    return (
        // 
        
        <header className="custom-navbar-gradient w-full z-50 bg-transparent ease-in-out relative top-0 left-0 right-0  transition-all  duration-700 font-bold">
            {/* <nav className={` py-7 border-b-2 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0" : ""}`}>
             */}
             <nav className={` custom-navbar-gradient py-7 border-b-2 lg:px-24 px-4 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] transform
            ${isSticky ? " custom-navbar-gradient fixed top-0 left-0 right-0 shadow-md " : " custom-navbar-gradient "}
            `}>

                <div className="flex items-center text-base gap-8">
                    {/* logo */}
              
                    <Link to = "https://www.iiserb.ac.in/" className="text-2sxl font-bold flex items-baseline self-start  whitespace-nowrap	" sx={{marginRight:'0px'}}><img src={iiserbLogo} alt="Logo" sx={{marginLeft:'0px'}}/></Link>
                    <Link to = "/" className="text-2sxl font-bold flex items-baseline self-start grow whitespace-nowrap	"><img src={visdomLogo} alt="Logo" /></Link>
                    
                    

                    {/* nav items for large devices */}
                    <ul className="md:flex space-x-12 hidden text-bold">
                        {
                            navItems.map(({link, path}) => <Link key={path} to={path} className={"block text-xl text-black uppercase cursor-pointer hover:text-blue-800" + (currentPath === path ? " text-blue-700" : "")}>{link}</Link>)
                        }
                    </ul>
                
                    {/* menu-button for mobile devices */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-black focus:outline-none">
                            {
                                isMenuOpen ? <FaXmark className="h-5 w-5 text:black"/> : <FaBarsStaggered />
                            }
                        </button>
                    </div>

                    {/* nav-items for small devices */}
                    <div className={`space-y-4 px-4 mt-20 py-7 bg-blue-500 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                        {
                            navItems.map(({link, path}) => <Link key={path} to={path} className="block text-base text-white
                            uppercase cursor-pointer hover:text-blue-700">{link}</Link>)
                        }
                    </div>

                </div>
            </nav>
        </header>
    )
}

export default Navbar;