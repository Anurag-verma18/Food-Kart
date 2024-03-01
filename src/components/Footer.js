import { LOGO_URL } from "../utils/constants";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { LuCopyright } from "react-icons/lu";

const Footer = () => {
  return (
    <div className="w-full px-10 flex justify-center bg-black text-white text-6xl ">
      <div className="pt-16 pb-8">
        <div className="mb-8">
          <img className="h-6" src={LOGO_URL} alt="Foodkart logo" />
        </div>
        <div className="w-full flex justify-between">
          <div name="About Us" className="w-auto pr-24">
            <h6 className="text-lg tracking-widest uppercase font-normal mb-4">
              About Us
            </h6>
            <nav>
              <p className="mb-2 text-sm hover:text-slate-400 text-slate-300 cursor-pointer">
                Who We Are
              </p>
              <p className="mb-2 text-sm hover:text-slate-400 text-slate-300 cursor-pointer">
                Blog
              </p>
              <p className="mb-2 text-sm hover:text-slate-400 text-slate-300 cursor-pointer">
                Work With Us
              </p>
              <p className="mb-2 text-sm hover:text-slate-400 text-slate-300 cursor-pointer">
                Contact Us
              </p>
              <p className="mb-2 text-sm hover:text-slate-400 text-slate-300 cursor-pointer">
                Investor Relations
              </p>
              <p className="mb-2 text-sm hover:text-slate-400 text-slate-300 cursor-pointer">
                Careers
              </p>
            </nav>
          </div>
          <div name="Resources" className="w-auto pr-24">
            <h6 className="text-lg tracking-widest uppercase font-normal mb-4">
              Resources
            </h6>
            <nav>
              <p className="mb-2 text-sm hover:text-slate-400 text-slate-300 cursor-pointer">
                Get Help
              </p>
              <p className="mb-2 text-sm hover:text-slate-400 text-slate-300 cursor-pointer">
                Buy Gift Cards
              </p>
              <p className="mb-2 text-sm hover:text-slate-400 text-slate-300 cursor-pointer">
                Create A Business Account
              </p>
              <p className="mb-2 text-sm hover:text-slate-400 text-slate-300 cursor-pointer">
                Save On Your First Order
              </p>
              <p className="mb-2 text-sm hover:text-slate-400 text-slate-300 cursor-pointer">
                Get FoodKart Pro
              </p>
              <p className="mb-2 text-sm hover:text-slate-400 text-slate-300 cursor-pointer">
                Promotions
              </p>
            </nav>
          </div>
          <div name="Join Us" className="w-auto pr-24">
            <h6 className="text-lg tracking-widest uppercase font-normal mb-4">
              Join Us
            </h6>
            <nav>
              <p className="mb-2 text-sm hover:text-slate-400 text-slate-300 cursor-pointer">
                Partner With Us
              </p>
              <p className="mb-2 text-sm hover:text-slate-400 text-slate-300 cursor-pointer">
                Add Your Restaurant
              </p>
              <p className="mb-2 text-sm hover:text-slate-400 text-slate-300 cursor-pointer">
                Sign Up To Deliver
              </p>
              <p className="mb-2 text-sm hover:text-slate-400 text-slate-300 cursor-pointer">
                For Corporate Accounts
              </p>
              <p className="mb-2 text-sm hover:text-slate-400 text-slate-300 cursor-pointer">
                Become An Affiliate
              </p>
              <p className="mb-2 text-sm hover:text-slate-400 text-slate-300 cursor-pointer">
                For Campuses & Hotels
              </p>
            </nav>
          </div>
          <div name="Social Links" className="w-auto pr-24">
            <h6 className="text-lg tracking-widest uppercase font-normal mb-4">
              Social Links
            </h6>
            <div className="flex justify-between">
              <span className="mr-2 text-white text-lg">
                <FaLinkedin className="rounded-sm" />
              </span>
              <span className="mr-2 text-white text-lg">
                <RiInstagramFill className="rounded-sm" />
              </span>
              <span className="mr-2 text-white text-lg">
                <FaSquareXTwitter className="rounded-sm" />
              </span>
              <span className="mr-2 text-white text-lg">
                <IoLogoYoutube className="rounded-sm" />
              </span>
              <span className="mr-2 text-white text-lg">
                <FaFacebook className="rounded-sm" />
              </span>
            </div>
          </div>
        </div>
        <hr className="mt-8 border-t-[1px] border-t-white mb-6"></hr>
        <div className="">
          <div className="flex items-start mb-4 text-slate-300 text-sm">
            <span className="pr-10">Privacy Policy</span>
            <span className="pr-10">Terms</span>
            <span>Pricing</span>
          </div>
        </div>
        <div className="text-slate-300 text-sm tracking-wider">
          <span>
            <LuCopyright className="inline-block text-base"/>
          </span>
          <span> 2024 FoodKart. All Rights Reserved.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
