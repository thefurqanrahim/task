'use client';

import { useState } from 'react';
import Image from "next/image";
import NavbarImg from "../../public/assets/navbar.png";
import { Bars4Icon } from "@heroicons/react/24/outline";
import { TabsCustomAnimation } from "../components/Tabs";

export default function SecondSection() {
    const [searchQuery, setSearchQuery] = useState('');
    return (
        <div className="p-4 md:p-6 lg:p-8">
            <div className="relative mt-8 mb-6">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M14.293 13.293a6 6 0 1 0-1.414 1.414l4.5 4.5a1 1 0 0 0 1.414-1.414l-4.5-4.5zM6 10a4 4 0 1 1 8 0 4 4 0 0 1-8 0z" />
                    </svg>
                </div>
                <input
                    type="text"
                    id="input-group-1"
                    className="border rounded-lg w-full pl-10 py-2.5 text-gray-500 text-sm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for resources and tutorials"
                />
            </div>
            <TabsCustomAnimation searchQuery={searchQuery} />
        </div>
    );
}
