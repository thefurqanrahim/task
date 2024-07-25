'use client';

import { useState } from 'react';
import Image from "next/image";
import { CiFilter } from "react-icons/ci";
import Img1 from "../assets/img1.png";
import Img2 from "../assets/img2.png";
import Img3 from "../assets/img3.png";
import Img4 from "../assets/img4.png";
import Img5 from "../assets/img5.png";
import Img6 from "../assets/img6.png";
import { IoIosLink } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import { CiFileOn } from "react-icons/ci";

export function TabsCustomAnimation(props: any) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('All Resources');

    const data = [
        {
            img: Img1,
            value: "Design file",
            desc: 'Case Study Template: FlipX, an Investment Attraction Startup',
            icon: <IoIosLink />,
            category: 'Design',
        },
        {
            img: Img2,
            value: "Github Resource",
            desc: 'Designing Impression: The Power of First Impressions',
            icon: <FaCode />,
            category: 'Development',
        },
        {
            img: Img3,
            value: "Design",
            value1: "UI UX",
            value2: "Branding",
            desc: 'Fluid Card Animation in After Effects',
            category: 'Design',
        },
        {
            img: Img4,
            value: "Design",
            value1: "UI UX",
            value2: "Branding",
            desc: 'Designing Impression: The Power of First Impressions',
            category: 'Design',
        },
        {
            img: Img5,
            value: "Design",
            desc: 'Designing Impression: The Power of First Impressions',
            category: 'Design',
        },
        {
            img: Img6,
            value: "Marketing PDF",
            desc: 'OpenCore Customer Acquisition Strategy',
            icon: <CiFileOn />,
            category: 'Marketing',
        },
    ];

    const filteredData = data.filter(item => {
        return (selectedOption === 'All Resources' || item.category === selectedOption) &&
            item.desc.toLowerCase().includes(props.searchQuery.toLowerCase());
    });

    return (
        <div className="p-4 md:p-6 lg:p-8">
            <div className="flex justify-between items-center mb-4">
                <div className="relative md:hidden">
                    <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className=" bg-dropDownColor font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 text-bannerHeadingColor flex items-center"
                    >
                        {selectedOption}
                        <svg
                            className={`w-4 h-4 ml-2 transform text-bannerHeadingColor transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    {isDropdownOpen && (
                        <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                            <button
                                onClick={() => { setSelectedOption('All Resources'); setIsDropdownOpen(false); }}
                                className="block px-4 py-2 text-bannerHeadingColor w-full text-left"
                            >
                                All Resources
                            </button>
                            <button
                                onClick={() => { setSelectedOption('Design'); setIsDropdownOpen(false); }}
                                className="block px-4 py-2 text-bannerHeadingColor w-full text-left"
                            >
                                Design
                            </button>
                            <button
                                onClick={() => { setSelectedOption('Development'); setIsDropdownOpen(false); }}
                                className="block px-4 py-2 text-bannerHeadingColor w-full text-left"
                            >
                                Development
                            </button>
                            <button
                                onClick={() => { setSelectedOption('Marketing'); setIsDropdownOpen(false); }}
                                className="block px-4 py-2 text-bannerHeadingColor w-full text-left"
                            >
                                Marketing
                            </button>
                            <button
                                onClick={() => { setSelectedOption('Branding'); setIsDropdownOpen(false); }}
                                className="block px-4 py-2 text-bannerHeadingColor w-full text-left"
                            >
                                Branding
                            </button>
                        </div>
                    )}
                </div>

                <div className="hidden md:flex space-x-2 mb-4">
                    <button
                        type="button"
                        className={`text-chipTxtColor border border-btnBorder focus:ring-grey font-medium rounded-lg text-sm px-5 py-2.5 text-center  ${selectedOption === 'All Resources' ? 'bg-dropDownColor text-bannerHeadingColor' : ''}`}
                        onClick={() => setSelectedOption('All Resources')}
                    >
                        All Resources
                    </button>
                    <button
                        type="button"
                        className={`text-chipTxtColor border border-btnBorder focus:ring-grey font-medium rounded-lg text-sm px-5 py-2.5 text-center ${selectedOption === 'Design' ? 'bg-dropDownColor text-bannerHeadingColor' : ''}`}
                        onClick={() => setSelectedOption('Design')}
                    >
                        Design
                    </button>
                    <button
                        type="button"
                        className={`text-chipTxtColor border border-btnBorder focus:ring-grey font-medium rounded-lg text-sm px-5 py-2.5 text-center ${selectedOption === 'Development' ? 'bg-dropDownColor text-bannerHeadingColor' : ''}`}
                        onClick={() => setSelectedOption('Development')}
                    >
                        Development
                    </button>
                    <button
                        type="button"
                        className={`text-chipTxtColor border border-btnBorder focus:ring-grey font-medium rounded-lg text-sm px-5 py-2.5 text-center ${selectedOption === 'Marketing' ? 'bg-dropDownColor text-bannerHeadingColor' : ''}`}
                        onClick={() => setSelectedOption('Marketing')}
                    >
                        Marketing
                    </button>
                    <button
                        type="button"
                        className={`text-chipTxtColor border border-btnBorder focus:ring-grey font-medium rounded-lg text-sm px-5 py-2.5 text-center ${selectedOption === 'Branding' ? 'bg-dropDownColor text-bannerHeadingColor' : ''}`}
                        onClick={() => setSelectedOption('Branding')}
                    >
                        Branding
                    </button>
                </div>
                <div className="text-blue-700 dark:text-blue-500 mb-4">
                    <button
                        type="button"
                        className="flex items-center text-bannerHeadingColor border border-btnBorder font-medium rounded-lg text-sm px-5 py-1.5 "
                    >
                        <CiFilter className="w-6 h-6 mr-2" />
                        <span>Filter</span>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {filteredData.map((item, ind) => (
                    <div key={ind} className="p-4 md:p-6">
                        <Image src={item.img} alt={item.value} className="rounded mb-3" />
                        <p className="text-lg font-medium text-gray-700">{item.desc}</p>
                        <div className="flex flex-wrap gap-2 mt-3">
                            <p className="bg-chipColor text-chipTxtColor text-sm font-medium p-2 rounded flex items-center space-x-2">
                                <span className="text-lg">{item.icon}</span>
                                <span>{item.value}</span>
                            </p>
                            {item.value1 && (
                                <p className="bg-chipColor text-chipTxtColor text-sm font-medium p-2 rounded">
                                    {item.value1}
                                </p>
                            )}
                            {item.value2 && (
                                <p className="bg-chipColor text-chipTxtColor text-sm font-medium p-2 rounded">
                                    {item.value2}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
