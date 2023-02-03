import React from "react";
import { ShopList } from "../data/ShopList";
import ShopItem from "../components/ShopItem";
import "../styles/Shop.css";
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

function Shop() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="shop" id={theme}>
        <div className="switch">
          <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
        <h1 className="shopTitle">Our Shop</h1>
        <div className="shopList">
          {ShopList.map((shopItem, key) => {
            return (
              <ShopItem
                key={key}
                image={shopItem.image}
                name={shopItem.name}
                price={shopItem.price}
              />
            );
          })}
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default Shop;
