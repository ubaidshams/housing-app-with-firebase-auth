import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPhone } from "react-icons/bs";
import { RiHeart2Line } from "react-icons/ri";
import { HiOutlineMenu } from "react-icons/hi";
import { GlobalContext } from "../../apis/GlobalContext";

const Navbar = () => {
  let { setSidebar } = useContext(GlobalContext);
  return (
    <section className="navbarBlock">
      <article>
        <div className="logoBlock">
          <Link to="/">
            <img
              src="https://c.housingcdn.com/demand/s/common/assets/housing.df1a39a7.png"
              alt="housing.com"
            />
          </Link>
        </div>
        <div className="menuBlock">
          <Link to="">
            <span>
              <BsPhone />
            </span>
            <span>download app</span>
          </Link>
          <Link to="" className="bgWhite">
            <span>list property</span>
            <span>free</span>
          </Link>
          <Link to="">
            <span>
              <RiHeart2Line />
            </span>
            <span>saved</span>
          </Link>
          <Link to="">news</Link>
          <button
            onClick={() => {
              setSidebar(true);
            }}
          >
            <HiOutlineMenu />
            <img
              src="https://c.housingcdn.com/demand/s/common/assets/tenant-avatar.81d688a4.png"
              alt="avatar"
            />
          </button>
        </div>
      </article>
    </section>
  );
};

export default Navbar;
