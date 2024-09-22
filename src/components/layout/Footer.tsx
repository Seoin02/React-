import visa from "@/assets/img/svg/visa.svg";
import americanExpress from "@/assets/img/svg/americanExpress.svg";
import master from "@/assets/img/svg/master.svg";
import paypal from "@/assets/img/svg/paypal.svg";
import dinerClub from "@/assets/img/svg/dinersClub.svg";
import discover from "@/assets/img/svg/discover.svg";
import facebook from "@/assets/img/svg/facebook.svg";
import instagram from "@/assets/img/svg/instagram.svg";
import github from "@/assets/img/svg/github.svg";

const Footer = () => {
  return (
    <footer className="p-10 footer bg-base-200 text-base-content footer-center">
      <div className="flex gap-2">
        <img src={visa} />
        <img src={americanExpress} />
        <img src={master} />
        <img src={paypal} />
        <img src={dinerClub} />
        <img src={discover} />
      </div>
      <div className="grid grid-flow-col gap-4">
        <img src={facebook} className="w-4" />
        <img src={instagram} className="w-6" />
        <img src={github} className="w-6" />
      </div>
      <div>Copyright © Seoin02</div>
    </footer>
  );
};

export default Footer;
