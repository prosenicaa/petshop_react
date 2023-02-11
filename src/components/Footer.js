import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";
import IPAdresa from "../components/IPAdresa";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <IPAdresa /> <InstagramIcon /> <TwitterIcon /> <FacebookIcon />{" "}
        <LinkedInIcon />
      </div>
      <p> &copy; 2023 petshop.com</p>
    </div>
  );
}

export default Footer;
