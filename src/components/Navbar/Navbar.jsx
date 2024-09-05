import { useState, useEffect } from "react";
import "./Navbar.scss"

function Navbar(){
    const [open,setOpen] =useState(false)
    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth >= 876) { // Adjust 876px according to your breakpoint for md
            setOpen(false); // Close the menu when the window is resized to md or larger
          }
        };
        // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
    return(
        <nav>
            <div className="left">
                <a href="/" className="logo">
                    <img src="/logo.png" alt="" />
                    <span>Real Estate</span>
                </a>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contacts</a>
                <a href="/">Agents</a>
            </div>
            <div className="right">
                <a href="/">Sign In</a>
                <a href="/" className="register">Sign Up</a>
                <div className="menuIcon">
                    <img src="menu.png" alt="" onClick={() => setOpen((prev) => !prev)}/>
                </div>
                <div className={open ? "menu active" : "menu"}>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contacts</a>
                <a href="/">Agents</a>
                <a href="/">Sign In</a>
                <a href="/">Sign Up</a>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;