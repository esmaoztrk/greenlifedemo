import React, { useState,useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaShoppingCart,
  FaUser,
  FaSearch,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const menuItems = [
    { title: "Anasayfa", href: "/" },
    { title: "Zadelife Blog", href: "/blog" },
    { title: "Zadelife Ürünleri", href: "/zadelife" },
    { title: "Sipariş Sorgulama", href: "#" },
    { title: "Sertifikalarımız", href: "#" },
    { title: "İletişim", href: "#Contact" },
  ];
  useEffect(() => {
    const handleScroll = () => setIsFixed(window.scrollY > 45);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className={`header2 ${isFixed ? 'fixed' : ''} ${isFixed ? 'rotate' : ''}` }>
      <div className="user-actions">
        <div className="menu-icon" onClick={toggleMenu}>
          <FaBars />
        </div>
        <div
          className={`menu-overlay ${menuOpen ? "show" : ""}`}
          onClick={toggleMenu}
        >
          <div className={`menu ${menuOpen ? "show" : ""}`}>
            <div className="baslik">
              <FaTimes />
              <a href="#">Giriş Yap</a>
              <a href="#">|</a>
              <a href="#">Kayıt Ol</a>
              <FaShoppingCart />
            </div>
            <hr />
            {menuItems.map((item, index) => (
              <a key={index} href={item.href}>
                {item.title}
              </a>
            ))}
          </div>
        </div>
        <div className="logo">
          <img src="./images/logo.jpg" alt="" />
        </div>
      </div>
      <div className="user-text">
        <div className="menu-text">
          {/* Burada yazılar menü açıldığında da görünecek */}
          {menuItems.map((item, index) => (
              <a key={index} href={item.href}>
                {item.title}
              </a>
            ))}
        </div>
      </div>
      <div className="user-icons">
        <div className="icons">
          <FaSearch style={{ fontSize: "23px" }} />
          <FaUser style={{ fontSize: "23px" }} />
          <FaShoppingCart style={{ fontSize: "23px" }} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
