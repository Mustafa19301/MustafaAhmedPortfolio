"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import Link from "next/link";

const HeroSection = () => {
    return (
        <section className="lg:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-600">
                            Hello, I&apos;m {" "}
                        </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                'Mustafa Ahmed',
                                1000,
                                'Software Developer',
                                1000,
                                'Web Developer',
                                1000,
                                'CompSci Student',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                        An aspiring software developer willing to learn new experience.
                    </p>
                    <div>
                        <Link 
                        href="https://www.linkedin.com/in/mustafa-a-252700297/"
                        className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-green-500 to-teal-500 hover:bg-slate-200 text-white">
                            Hire Me
                        </Link>
                        <Link
                        href="https://mustafa19301.github.io/"
                        className="px-1 inline-block py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-green-500 to-teal-500 hover:bg-slate-800 text-white border mt-3">
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Other Website</span>
                        </Link>
                    </div>
                </div>
                <div className="col-span-4 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] relative">
                        <Image
                            src="/images/RobotCartoon.png"
                            alt="Robot Image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={250}
                            height={250}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
