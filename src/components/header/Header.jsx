import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";
import { useLang } from "../../context/langcontext/LangContext";
import { useTranslation } from "react-i18next";
import Hamburger from "../hamburger/Hamburger";
import { useBasket } from "../../context/basketContext/BasketContext";
import Background from "../background/Background";

const Header = ({ open, setOpen }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { language, changeLanguage } = useLang();
  const searchRef = useRef(null);
  const [user, setUser] = useState(null);
  const { basketCount } = useBasket();
  const [show, setShow] = useState(false);

  const style = {
    position: "fixed",
    top: "7.8rem",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    opacity: "0.5",
    zIndex: "9",
  };

  const langs = [
    {
      title: "en",
    },
    {
      title: "az",
    },
    {
      title: "ru",
    },
  ];

const handleSearch = () => {
  if (searchRef.current) {
    let searchValue = searchRef.current.value;
    if (searchValue) {
      const searchparams = new URLSearchParams({ search: searchValue });
      navigate(`/searchresult?${searchparams.toString().toLowerCase()}`);
    }
    searchRef.current.value = "";
  }
};


  const handleClearSearch = () => {
    searchRef.current.value = "";
    setSearchOpen(false);
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  return (
    <>
      <div className="container">
        <div className="header">
          <div className="header__left">
            <div
              className={`header__left--lang ${open ? "responsive__lang" : ""}`}
            >
              <div className="select" onClick={() => setIsOpen(!isOpen)}>
                <div className="selected">{language}</div>
                <div
                  className="options"
                  style={{ display: isOpen ? "block" : "none" }}
                >
                  {langs.map((lang, index) => {
                    return (
                      <div
                        key={index}
                        className="option"
                        onClick={() => changeLanguage(lang.title)}
                      >
                        {lang.title}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div
              className={`header__left--search container ${
                searchOpen ? "fixed" : ""
              }`}
            >
              <div
                onClick={() => {
                  setSearchOpen(!searchOpen);
                  handleSearch();
                  setShow(!show);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.5417 2.52081C6.11192 2.52081 2.52087 6.11186 2.52087 10.5416C2.52087 14.9714 6.11192 18.5625 10.5417 18.5625C14.9715 18.5625 18.5625 14.9714 18.5625 10.5416C18.5625 6.11186 14.9715 2.52081 10.5417 2.52081ZM1.14587 10.5416C1.14587 5.35247 5.35253 1.14581 10.5417 1.14581C15.7309 1.14581 19.9375 5.35247 19.9375 10.5416C19.9375 15.7308 15.7309 19.9375 10.5417 19.9375C5.35253 19.9375 1.14587 15.7308 1.14587 10.5416ZM17.8472 17.8472C18.1157 17.5787 18.551 17.5787 18.8195 17.8472L20.6528 19.6805C20.9213 19.949 20.9213 20.3843 20.6528 20.6528C20.3844 20.9213 19.9491 20.9213 19.6806 20.6528L17.8472 18.8195C17.5788 18.551 17.5788 18.1157 17.8472 17.8472Z"
                    fill="#2D2D2B"
                  />
                </svg>
              </div>
              <div
                style={{ display: searchOpen ? "flex" : "none" }}
                className={`container searchInput`}
              >
                <input
                  type="search"
                  placeholder={t("searchinput.placeholder")}
                  ref={searchRef}
                />
                <div
                  onClick={() => {
                    handleClearSearch();
                    setShow(false);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M16.8873 15.7377C16.9628 15.8132 17.0227 15.9028 17.0635 16.0014C17.1044 16.1001 17.1254 16.2058 17.1254 16.3125C17.1254 16.4193 17.1044 16.525 17.0635 16.6236C17.0227 16.7223 16.9628 16.8119 16.8873 16.8874C16.8118 16.9629 16.7222 17.0227 16.6236 17.0636C16.5249 17.1045 16.4192 17.1255 16.3125 17.1255C16.2057 17.1255 16.1 17.1045 16.0014 17.0636C15.9027 17.0227 15.8131 16.9629 15.7376 16.8874L8.99996 10.1487L2.26231 16.8874C2.10985 17.0398 1.90307 17.1255 1.68746 17.1255C1.47186 17.1255 1.26508 17.0398 1.11262 16.8874C0.960162 16.7349 0.874512 16.5281 0.874512 16.3125C0.874512 16.0969 0.960162 15.8901 1.11262 15.7377L7.85129 9.00002L1.11262 2.26237C0.960162 2.10991 0.874512 1.90313 0.874512 1.68752C0.874512 1.47192 0.960162 1.26514 1.11262 1.11268C1.26508 0.960223 1.47186 0.874573 1.68746 0.874573C1.90307 0.874573 2.10985 0.960223 2.26231 1.11268L8.99996 7.85135L15.7376 1.11268C15.8901 0.960223 16.0969 0.874573 16.3125 0.874573C16.5281 0.874573 16.7349 0.960223 16.8873 1.11268C17.0398 1.26514 17.1254 1.47192 17.1254 1.68752C17.1254 1.90313 17.0398 2.10991 16.8873 2.26237L10.1486 9.00002L16.8873 15.7377Z"
                      fill="#2D2D2B"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <Link to="/">
            <div
              className="header__center"
              style={{ display: open ? "none" : "block" }}
            >
              HomeDecor
            </div>
          </Link>

          <div className={`header__right ${open ? "d-block" : ""}`}>
            <div className="header__right--basket">
              <Link to="/shoppingcart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z"
                    stroke="#2D2D2B"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z"
                    stroke="#2D2D2B"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M2.26121 3.09184L2.50997 2.38429H2.50997L2.26121 3.09184ZM2.24876 2.29246C1.85799 2.15507 1.42984 2.36048 1.29246 2.75124C1.15507 3.14201 1.36048 3.57016 1.75124 3.70754L2.24876 2.29246ZM4.58584 4.32298L5.20507 3.89983V3.89983L4.58584 4.32298ZM5.88772 14.5862L5.34345 15.1022H5.34345L5.88772 14.5862ZM20.6578 9.88275L21.3923 10.0342L21.3933 10.0296L20.6578 9.88275ZM20.158 12.3075L20.8926 12.4589L20.158 12.3075ZM20.7345 6.69708L20.1401 7.15439L20.7345 6.69708ZM19.1336 15.0504L18.6598 14.469L19.1336 15.0504ZM5.70808 9.76V7.03836H4.20808V9.76H5.70808ZM2.50997 2.38429L2.24876 2.29246L1.75124 3.70754L2.01245 3.79938L2.50997 2.38429ZM10.9375 16.25H16.2404V14.75H10.9375V16.25ZM5.70808 7.03836C5.70808 6.3312 5.7091 5.7411 5.65719 5.26157C5.60346 4.76519 5.48705 4.31247 5.20507 3.89983L3.96661 4.74613C4.05687 4.87822 4.12657 5.05964 4.1659 5.42299C4.20706 5.8032 4.20808 6.29841 4.20808 7.03836H5.70808ZM2.01245 3.79938C2.68006 4.0341 3.11881 4.18965 3.44166 4.34806C3.74488 4.49684 3.87855 4.61727 3.96661 4.74613L5.20507 3.89983C4.92089 3.48397 4.54304 3.21763 4.10241 3.00143C3.68139 2.79485 3.14395 2.60719 2.50997 2.38429L2.01245 3.79938ZM4.20808 9.76C4.20808 11.2125 4.22171 12.2599 4.35876 13.0601C4.50508 13.9144 4.79722 14.5261 5.34345 15.1022L6.43198 14.0702C6.11182 13.7325 5.93913 13.4018 5.83723 12.8069C5.72607 12.1578 5.70808 11.249 5.70808 9.76H4.20808ZM10.9375 14.75C9.52069 14.75 8.53763 14.7482 7.79696 14.6432C7.08215 14.5418 6.70452 14.3576 6.43198 14.0702L5.34345 15.1022C5.93731 15.7286 6.69012 16.0013 7.58636 16.1283C8.45674 16.2518 9.56535 16.25 10.9375 16.25V14.75ZM4.95808 6.87H17.0888V5.37H4.95808V6.87ZM19.9232 9.73135L19.4235 12.1561L20.8926 12.4589L21.3923 10.0342L19.9232 9.73135ZM17.0888 6.87C17.9452 6.87 18.6989 6.871 19.2937 6.93749C19.5893 6.97053 19.8105 7.01643 19.9659 7.07105C20.1273 7.12776 20.153 7.17127 20.1401 7.15439L21.329 6.23978C21.094 5.93436 20.7636 5.76145 20.4632 5.65587C20.1567 5.54818 19.8101 5.48587 19.4604 5.44678C18.7646 5.369 17.9174 5.37 17.0888 5.37V6.87ZM21.3933 10.0296C21.5625 9.18167 21.7062 8.47024 21.7414 7.90038C21.7775 7.31418 21.7108 6.73617 21.329 6.23978L20.1401 7.15439C20.2021 7.23508 20.2706 7.38037 20.2442 7.80797C20.2168 8.25191 20.1002 8.84478 19.9223 9.73595L21.3933 10.0296ZM16.2404 16.25C17.0021 16.25 17.6413 16.2513 18.1566 16.1882C18.6923 16.1227 19.1809 15.9794 19.6074 15.6318L18.6598 14.469C18.5346 14.571 18.3571 14.6525 17.9744 14.6994C17.5712 14.7487 17.0397 14.75 16.2404 14.75V16.25ZM19.4235 12.1561C19.2621 12.9389 19.1535 13.4593 19.0238 13.8442C18.9007 14.2095 18.785 14.367 18.6598 14.469L19.6074 15.6318C20.0339 15.2842 20.2729 14.8346 20.4453 14.3232C20.6111 13.8312 20.7388 13.2049 20.8926 12.4589L19.4235 12.1561Z"
                    fill="#2D2D2B"
                  />
                </svg>
              </Link>
              {basketCount > 0 ? <sup>{basketCount}</sup> : <sup></sup>}
            </div>
            <div className="header__right--profile">
              <Link to={user ? "/account/info" : "/auth/login"}>
                {user ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle cx="12" cy="6" r="4" fill="#2D2D2B" />
                    <ellipse cx="12" cy="17" rx="7" ry="4" fill="#2D2D2B" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 1.25C9.37665 1.25 7.25 3.37665 7.25 6C7.25 8.62335 9.37665 10.75 12 10.75C14.6234 10.75 16.75 8.62335 16.75 6C16.75 3.37665 14.6234 1.25 12 1.25ZM8.75 6C8.75 4.20507 10.2051 2.75 12 2.75C13.7949 2.75 15.25 4.20507 15.25 6C15.25 7.79493 13.7949 9.25 12 9.25C10.2051 9.25 8.75 7.79493 8.75 6Z"
                      fill="#2D2D2B"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 12.25C9.96067 12.25 8.07752 12.7208 6.67815 13.5204C5.3 14.3079 4.25 15.5101 4.25 17C4.25 18.4899 5.3 19.6921 6.67815 20.4796C8.07752 21.2792 9.96067 21.75 12 21.75C14.0393 21.75 15.9225 21.2792 17.3219 20.4796C18.7 19.6921 19.75 18.4899 19.75 17C19.75 15.5101 18.7 14.3079 17.3219 13.5204C15.9225 12.7208 14.0393 12.25 12 12.25ZM5.75 17C5.75 16.2807 6.26701 15.483 7.42236 14.8228C8.55649 14.1747 10.1733 13.75 12 13.75C13.8267 13.75 15.4435 14.1747 16.5776 14.8228C17.733 15.483 18.25 16.2807 18.25 17C18.25 17.7193 17.733 18.517 16.5776 19.1772C15.4435 19.8253 13.8267 20.25 12 20.25C10.1733 20.25 8.55649 19.8253 7.42236 19.1772C6.26701 18.517 5.75 17.7193 5.75 17Z"
                      fill="#2D2D2B"
                    />
                  </svg>
                )}
              </Link>
            </div>
          </div>
          <Hamburger open={open} setOpen={setOpen} />
        </div>
      </div>
      {show && <Background style={style} />}
    </>
  );
};

export default Header;
