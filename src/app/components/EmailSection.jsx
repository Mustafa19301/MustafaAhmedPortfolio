import React from "react";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
    return (
        <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
            <div className="z-10">
                <h5 className="text-xl font bold text-white my-2">Let&apos;s connect</h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    {" "}
                    I am an aspriring professional looking for new learning opportunities. 
                    Kindly contact me at mustafaahmed3848@gmail.com
                </p>
                <div className="socials flex flex-row gap-2">
                    <Link href="https://github.com/Mustafa19301">
                        <Image src="/images/GITHUB2.png" width={50} height={50} alt="githubimageicon" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/mustafa-a-252700297/">
                        <Image src="/images/LINKEDIN.png" width={50} height={50} alt="linkedinimageicon" />
                    </Link>
                </div>
            </div>
            <div className="flex flex-col">
                <form action="https://formsubmit.co/440e75d78c0f0b0678559fb8c28a36a1" method="POST">
                    <div className="mb-6">
                        <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
                            Your email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"  // Make sure to add the name attribute
                            required
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="example@gmail.com"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"  // Make sure to add the name attribute
                            required
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Just saying hi"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="message"
                            className="text-white block text-sm mb-2 font-medium"
                        >
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Let's talk about..."
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default EmailSection;
