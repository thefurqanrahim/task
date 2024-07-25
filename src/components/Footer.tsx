import Image from "next/image";
import footerImg from "../assets/Group.png";
import { IoLogoInstagram } from "react-icons/io";
import { AiOutlineFacebook } from "react-icons/ai";
import { SlSocialTwitter } from "react-icons/sl";
import { PiLinkedinLogoLight } from "react-icons/pi";
import Link from 'next/link';

export default function Footer() {
    return (
        <div className="mt-24 bg-footerBgColor">
            <div className="mx-auto p-4 sm:p-6 md:p-8 lg:p-16 lg:ml-5 lg:mr-5">
                <div className="bg-white rounded-3xl p-4 sm:p-6 md:p-8 lg:p-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="flex flex-col p-4">
                            <h6 className="text-footerHeading text-lg sm:text-xl font-bold">Say Hello!</h6>
                            <p className="text-lg sm:text-xl font-normal text-mailHeadingColor">opencoregroup@gmail.com</p>
                            <div className="flex flex-wrap gap-4 mt-4 ">
                                <Link href="https://instagram.com" className="bg-iconBg rounded p-3 text-2xl sm:text-3xl text-footerBgColor transition-colors hover:text-pink-500">
                                    <IoLogoInstagram />
                                </Link>
                                <Link href="https://facebook.com" className="bg-iconBg rounded p-3 text-2xl sm:text-3xl text-footerBgColor transition-colors hover:text-blue-600">
                                    <AiOutlineFacebook />
                                </Link>
                                <Link href="https://twitter.com" className="bg-iconBg rounded p-3 text-2xl sm:text-3xl text-footerBgColor transition-colors hover:text-blue-400">
                                    <SlSocialTwitter />
                                </Link>
                                <Link href="https://linkedin.com" className="bg-iconBg rounded p-3 text-2xl sm:text-3xl text-footerBgColor transition-colors hover:text-blue-700">
                                    <PiLinkedinLogoLight />
                                </Link>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 grid-cols-2 gap-6 directionChange">
                            <div className="flex flex-col">
                                <Link href="" className="text-lg sm:text-xl text-footerBgColor transition-colors hover:text-blue-400 mb-2">Home</Link>
                                <Link href="" className="text-lg sm:text-xl text-footerBgColor transition-colors hover:text-blue-400 mb-2">About Us</Link>
                                <Link href="" className="text-lg sm:text-xl text-footerBgColor transition-colors hover:text-blue-400">Work</Link>
                            </div>
                            <div className="flex flex-col">
                                <Link href="" className="text-lg sm:text-xl text-footerBgColor transition-colors hover:text-blue-400 mb-2">Services</Link>
                                <Link href="" className="text-lg sm:text-xl text-footerBgColor transition-colors hover:text-blue-400">Contact Us</Link>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
                        <div className="flex justify-center lg:justify-start">
                            <p className="text-center lg:text-left text-sm sm:text-base">Toronto, ON Canada</p>
                        </div>
                        <div className="flex justify-center lg:justify-end">
                            <p className="text-center lg:text-right text-sm sm:text-base">OpenCore. All Rights Reserved</p>
                        </div>
                    </div>

                    <div className="flex justify-center mt-24">
                        <Image src={footerImg} alt="" layout="intrinsic" />
                    </div>

                </div>
            </div>
        </div>
    );
}
