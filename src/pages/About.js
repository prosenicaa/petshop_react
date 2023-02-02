import React from "react";
import Cover from "../img/cover2.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Cover})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          We LOVE pets, and we BELIEVE pets make us better people. Petshop.com
          operates both as a physical and online pet shop store offering quality
          products at an affordable price. Founded on the idea that every pet
          are loving and caring without ever asking for anything in return.
          Thus, we wanted to provide a way to give back to the loyal, adorable
          and stress-relieving companions the best way we could think of; by
          providing the utmost quality of products for their everyday needs.
          Ranging from a wide variety of pet foods and treats all the way to pet
          accessories and pet grooming. From our physical store to our online
          e-store (petshop.com), we take pride in the exclusive collections that
          top-tier pet products bring to the market and the incomparable
          customer service we provide to our clients every day. Shopping for all
          your pet care needs made easy with just a few clicks!
        </p>
      </div>
    </div>
  );
}

export default About;
