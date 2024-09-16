import React from "react";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
    return (
        <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
            <div className="z-10">
                <h5 className="text-xl font bold text-white my-2">Let's connect</h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    {" "}
                    I'm currently looking for new opportunities, my inbox is open so feel free to connect.
                    I'll do my best to get back to you as soon as possible! Contact email: mustafaahmed3848@gmail.com
                </p>
                <div className="socials flex flex-row gap-2">
                    <Link href="https://github.com/Mustafa19301">
                        <Image src="/images/GITHUB2.png" width={50} height={50} alt="githubimageicon"/>
                    </Link>
                    <Link href="https://www.linkedin.com/in/mustafa-a-252700297/">
                        <Image src="/images/LINKEDIN.png" width={50} height={50} alt="linkedinimageicon"/>
                    </Link>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <Image src="/images/Program2.png" width={700} height={700} alt="programpicture"/>
                </div>
        </section>
    );
};

export default EmailSection;
