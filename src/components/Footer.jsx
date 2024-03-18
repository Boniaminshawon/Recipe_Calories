
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className=" text-center  lg:p-[90px] py-[50px] bg-[#13131808 bg-[#12132D0D]  space-y-6">
            <h1 className=" lg:text-[40px] text-2xl  font-bold text-[#150B2B]">Recipe Calories</h1>

            <p className="font-secondary lg:text-lg lg:mx-8 mx-4 text-[#878787]  pb-4 lg:pb-7">Learn and Master the basic to advance cooking. You will master a wide range of cuisines, cooking methods, kitchen tips, catering, and gain confidence  to individuals of all skill levels.We teaches many types of delicious and juicy food. You can learn and make spicy and desert both types of item by doing our course . To achieve mastering of cooking you can explore us.</p>
            <div className="flex justify-center lg:text-[40px] text-[32px] space-x-6 lg:space-x-10 border-y-2 border-dashed py-10 border-[#878787]">
                <a href="" className="text-[blue]"><FaFacebook></FaFacebook></a>
                <a href="" className="text-purple-800"><IoLogoInstagram></IoLogoInstagram></a>
                <a href="" className="text-[red]"><FaYoutube></FaYoutube></a>
                <a href="" className="text-sky-400"><FaTelegram></FaTelegram></a>
            </div>
      <div className="flex pt-5 gap-1 justify-center text-[#878787] lg:text-lg font-secondary items-center">  <span><FaRegCopyright></FaRegCopyright></span><i>2024, All Rights Reserved</i></div>
        </div>
    );
};

export default Footer;