import React from "react";
import visa from "../../assets/img/svg/visa.svg";
import americanExpress from "../../assets/img/svg/americanExpress.svg";
import master from "../../assets/img/svg/master.svg";
import paypal from "../../assets/img/svg/paypal.svg";
import dinerClub from "../../assets/img/svg/dinersClub.svg";
import discover from "../../assets/img/svg/discover.svg";

const Footer = () => {
  return (
    <>
      <div>
        <img src={visa} />
        <img src={americanExpress} />
        <img src={master} />
        <img src={paypal} />
        <img src={dinerClub} />
        <img src={discover} />
      </div>
      <div>SNS 로고</div>
      <div>Copyright ©</div>
    </>
  );
};

export default Footer;
