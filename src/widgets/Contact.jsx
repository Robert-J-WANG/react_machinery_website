import React from 'react'

function Contact() {
    return (
        <div className="bg-black md:w-4/5 mx-auto relative overflow-hidden rounded-3xl">
            <div className="w-full py-16 px-12">
                <h2 className="text-3xl text-white font-bold">Feel free to us!</h2>
                <p className="text-lg text-white mt-2 mb-6">
                    Your Gateway to Unparalleled Farming Machinery Expertise and Support
                </p>
                <div className="flex flex-col md:flex-row items-start gap-4">
                    <input
                        type="text"
                        name=""
                        id=""
                        className="bg-zinc-800 py-3 px-4 border border-zinc-700"
                        placeholder="your email"
                    />
                    <button className="py-3 px-8 bg-blue-500 text-white text-base font-medium md:ml-2">
                        Send now
                    </button>
                </div>
                <p className="text-xl text-red-600 mt-3">20% discount off for the new registers !!!</p>
            </div>
            {/* svg decoration */}
            <div className="absolute -right-10 bottom-0">
                <svg
                    width="428"
                    height="328"
                    viewBox="0 0 428 328"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="translate-x-60"
                >
                    <ellipse
                        cx="185"
                        cy="15.5758"
                        rx="16"
                        ry="15.5758"
                        fill="white"
                        fillOpacity="0.04"
                    />
                    <ellipse
                        cx="100"
                        cy="68.4015"
                        rx="24"
                        ry="23.3636"
                        fill="white"
                        fillOpacity="0.24"
                    />
                    <ellipse
                        cx="29"
                        cy="251.231"
                        rx="29"
                        ry="28.2311"
                        fill="white"
                        fillOpacity="0.12"
                    />
                    <ellipse
                        cx="29"
                        cy="251.231"
                        rx="8"
                        ry="7.78788"
                        fill="white"
                        fillOpacity="0.64"
                    />
                    <ellipse
                        cx="342"
                        cy="31.303"
                        rx="8"
                        ry="7.78788"
                        fill="white"
                        fillOpacity="0.12"
                    />
                    <ellipse
                        cx="62"
                        cy="126.81"
                        rx="2"
                        ry="1.94697"
                        fill="white"
                        fillOpacity="0.48"
                    />
                    <ellipse
                        cx="78"
                        cy="7.07197"
                        rx="2"
                        ry="1.94697"
                        fill="white"
                        fillOpacity="0.12"
                    />
                    <ellipse
                        cx="185"
                        cy="15.5758"
                        rx="6"
                        ry="5.84091"
                        fill="white"
                        fillOpacity="0.64"
                    />
                    <circle cx="276" cy="237" r="200" fill="url(#paint0_radial_0_360)" />
                    <defs>
                        <radialGradient
                            id="paint0_radial_0_360"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(218.168 175.211) rotate(39.505) scale(384.125)"
                        >
                            <stop stopColor="#DFDFDF" />
                            <stop offset="0.443175" stopColor="#4C4C4C" />
                            <stop offset="1" stopColor="#333333" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
        </div>
    )
}

export default Contact