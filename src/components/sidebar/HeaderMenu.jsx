import React from "react";
import { BiCheckCircle, BiHomeHeart } from "react-icons/bi";
import { IoHomeOutline } from "react-icons/io5";

const HeaderMenu = () => {
  return (
    <section className="headerMenu">
      <article>
        <div className="userContent">
          <img
            src="https://c.housingcdn.com/demand/s/common/assets/tenant-avatar.81d688a4.png"
            alt="avatar"
          />
          <div className="userInfo">
            <h6>hello 👋</h6>
            <p>
              <span>
                <BiCheckCircle />
              </span>
              <span>Easy contact with sellers</span>
            </p>
            <p>
              <span>
                <BiCheckCircle />
              </span>
              <span>Personalized experience</span>
            </p>
          </div>
          <button>login</button>
        </div>
      </article>
      <article>
        <div className="myActivity">
          <h3>my activity</h3>
          <div className="activityContainer">
            <div>
              <IoHomeOutline />
              <span>contacted properties</span>
            </div>
            <div>
              <IoHomeOutline />
              <span>seen properties</span>
            </div>
            <div>
              <BiHomeHeart />
              <span>saved properties</span>
            </div>
            <div>
              <IoHomeOutline />
              <span>recent searches</span>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default HeaderMenu;
