import { FaSquareFacebook, FaYoutube, FaAddressCard } from "react-icons/fa6";
import { FaInstagramSquare, FaLinkedin, FaMobileAlt, FaRegEnvelope } from "react-icons/fa";


const Footer = () => {
    return (
        <>
            <div className="text-white grid grid-cols-3 bg-gradient-to-bl from-blue-950 to-blue-800 py-20 px-32">
                <div>
                    <h1 className="text-white font-roboto text-xl pb-4">For Our Students</h1>
                    <p>Cleaning</p>
                    <p>Attendance</p>
                    <p>Job Priority</p>
                    <p>Project Wise Job</p>
                </div>
                <div>
                    <h1 className="text-white font-roboto text-xl pb-4">Social Links</h1>
                    <div className="flex flex-row space-x-2 ">
                        <span className="text-lg"><FaSquareFacebook /></span>
                        <p>Facebook</p>
                    </div>
                    <div className="flex flex-row space-x-2 ">
                        <span className="text-lg"><FaInstagramSquare /></span>
                        <p>Instagram</p>
                    </div>
                    <div className="flex flex-row space-x-2 ">
                        <span className="text-lg"><FaLinkedin /></span>
                        <p>Linkedin</p>
                    </div>
                    <div className="flex flex-row space-x-2 ">
                        <span className="text-lg"><FaYoutube /></span>
                        <p>Youtube</p>
                    </div>
                </div>
                <div>
                    <h1 className="text-white font-roboto text-xl pb-4">Our Head Office</h1>
                    <div className="flex flex-row space-x-2">
                        <span><FaAddressCard /></span>
                        <p>Hoque shopping Mall lift-7 Floor Bank Road Chowmuhani, Noakhali</p>
                    </div>
                    <div className="flex flex-row space-x-2">
                        <span><FaMobileAlt /></span>
                        <p>+880 1820 808003</p>
                    </div>
                    <div className="flex flex-row space-x-2">
                        <span><FaRegEnvelope /></span>
                        <p>noakhaliti@gmail.com</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;