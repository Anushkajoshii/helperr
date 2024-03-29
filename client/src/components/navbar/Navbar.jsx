import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest"
import "./Navbar.scss";

function Navbar() {  
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"))

  const navigate= useNavigate();

  const handleLogout= async()=>{
    try{
      await newRequest.post("/auth/logout")
      localStorage.setItem("currentUser", null);
      navigate("/");
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <span className="text">helperr</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Helperr Business</span>
          <span>Explore</span>
          <span>English</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {currentUser ? (
            <div className="user" onClick={()=>setOpen(!open)}>
              <img
                src={currentUser.img || "https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"}
                alt=""
              />
              <span>{currentUser?.username}</span>
              {open && <div className="options">
                {currentUser.isSeller && (
                  <>
                    <Link className="link" to="/mygigs">
                      Gigs
                    </Link>
                    <Link className="link" to="/add">
                      Add New Gig
                    </Link>
                  </>
                )}
                <Link className="link" to="/orders">
                  Orders
                </Link>
                <Link className="link" to="/messages">
                  Messages
                </Link>
                <Link className="link" onClick={handleLogout}>
                  Logout
                </Link>
              </div>}
            </div>
          ) : (
            <>
              <Link to= "/Login" className="link">Sign in</Link>
              <Link className="link" to="/register">
                <button>Join</button>
              </Link>
            </>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="link menuLink" to="/">
              House Help
            </Link>
            <Link className="link menuLink" to="/">
              Business Help
            </Link>
            <Link className="link menuLink" to="/">
              Daily wage Labour
            </Link>
            <Link className="link menuLink" to="/">
              Domestic Help
            </Link>
            <Link className="link menuLink" to="/">
              Drivers
            </Link>
            <Link className="link menuLink" to="/">
              Home Tutors
            </Link>
            <Link className="link menuLink" to="/">
              Gardner
            </Link>
            <Link className="link menuLink" to="/">
              Beauty & Grooming 
            </Link>
            <Link className="link menuLink" to="/">
              Medical servant
            </Link>
          </div>
          <hr />
        </>
      )}
    </div>
  );
}

export default Navbar;