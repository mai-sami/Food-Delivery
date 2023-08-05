import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import Logo from "../../../assets/img/logo.png";
import { motion } from "framer-motion";
import Avatar from "../../../assets/img/avatar.png";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../../firebase.config";
import { useStateValue } from "../../../context/StateProvider";
import { actionType } from "../../../context/reducer";

function Header() {
  const [{ user, cartShow, cartItems }, dispatch] = useStateValue();
  const [isMenu, setIsMenu] = useState(false);
   const Login = async () => {
    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };
  const userData = JSON.parse(localStorage.getItem("user"));
  console.log(userData);
  const logout = () => {
    setIsMenu(false);
    localStorage.clear();

    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };
  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  return (
    <header>
      <div>
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="w-8 object-cover" alt="logo" />
          <p className="text-headingColor text-xl font-bold"> City</p>
        </Link>
      </div>
      <div className="flex items-center gap-8">
        <motion.ul
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          className="flex items-center gap-10 "
        >
          <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            Home
          </li>
          <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            Menu
          </li>
          <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            About Us
          </li>
          <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            Service
          </li>
          <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
          City
          </li>
        </motion.ul>
       
        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={userData ? userData?.photoURL : Avatar}
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
            alt="userprofile"
            onClick={Login}
          />
          <p className="user_email">
            {" "}
            {userData ? userData?.displayName : null}
          </p>
        </div>

        {/* <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
              >
                   <Link to={"/createItem"}>
                    <p
                      className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                     >
                      New Item <MdAdd />
                    </p>
                  </Link>
                               <p
                  className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                 >
                  Logout <MdLogout />
                </p>
              </motion.div> */}
      </div>
    </header>
  );
}

export default Header;
