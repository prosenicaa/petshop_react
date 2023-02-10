import React from "react";
import Cover from "../img/cover2.jpg";
import "../styles/About.css";
import facts from "../data/facts";
import FunFact from "../components/Fact";

function About() {
  return (
    <div className="about">
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
          accessories and pet grooming.
        </p>
        <div className="container">
          <section className="info">
            {facts.map((fact) => {
              return <FunFact key={fact.id} {...fact} />;
            })}
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;
