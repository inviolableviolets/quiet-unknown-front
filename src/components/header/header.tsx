/* eslint-disable @typescript-eslint/no-unused-vars */
import headerStyle from "./header.module.scss";
import { useNavigate, Link } from "react-router-dom";
import { useUsers } from "../../hooks/use.users";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
import { MdLogout } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { handleLogoutUser } = useUsers();
  const navigate = useNavigate();

  const { token } = useSelector((state: RootState) => state.users);

  const runLogout = () => {
    handleLogoutUser();
  };

  const handleUser = async () => {
    if (token) {
      runLogout();
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <header className={headerStyle.header} id="header">
        <a href="#home-section" className={headerStyle.logo}>
          <div>
            QUIET <span className={headerStyle.logoSpan}> / / / / </span>
          </div>
          <div className={headerStyle.logoExpand}>UNKNOWN</div>
        </a>
        <section
          className={headerStyle.navbar}
          style={isMenuOpen ? { right: "0%" } : { right: "-100%" }}
        >
          <ul>
            <li>
              <a href="#about-section">ABOUT</a>
            </li>
            <li>
              <a href="#theories-section">THEORIES</a>
            </li>
            <li>
              <a href="#communications-section">COMMUNICATIONS</a>
            </li>
            <li>
              <a href="#resources-section">RESOURCES</a>
            </li>
          </ul>
        </section>
        <section
          className={headerStyle.login}
          style={isMenuOpen ? { right: "0%" } : { right: "-100%" }}
        >
          <ul>
            {token ? (
              <>
                <li>
                  <Link to={"/submissions"}>SUBMISSIONS</Link>
                </li>
              </>
            ) : (
              ""
            )}
            <li>
              {token ? (
                <>
                  <Link
                    to={"/"}
                    className={headerStyle.yellow}
                    onClick={handleUser}
                  >
                    LOGOUT
                  </Link>
                  <MdLogout className={headerStyle.logout} />
                </>
              ) : (
                <>
                  <Link
                    to={"/login"}
                    className={headerStyle.yellow}
                    onClick={handleUser}
                  >
                    LOGIN
                  </Link>
                  <FaUser className={headerStyle.user} />
                </>
              )}
            </li>
          </ul>
        </section>
        <div
          className={headerStyle.menu}
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
          role="button"
          aria-label="button"
        >
          {isMenuOpen ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
        </div>
      </header>
    </>
  );
}
