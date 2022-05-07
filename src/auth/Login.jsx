import React from "react";
import { FaChevronUp } from "react-icons/fa";
import AuthModal from "../helper/AuthModal";

const Login = () => {
  return (
    <AuthModal>
      <section id="authBlock">
        <article>
          <header>
            <span>
              <FaChevronUp />
            </span>
            <span>your trusted real estate partner</span>
          </header>
          <main>
            <h2>login</h2>
          </main>
          <footer>
            <form>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="abc@example.com" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="form-group">
                <button>login</button>
              </div>
            </form>
          </footer>
        </article>
      </section>
    </AuthModal>
  );
};

export default Login;
