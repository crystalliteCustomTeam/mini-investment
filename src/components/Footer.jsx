"use client"
import { Axios } from "axios";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
const Footer = () => {
    const referenceID = useId(); // Unique ID for the component
    const [ip, setIP] = useState(""); // State to hold IP data

    // Function to fetch IP data
    const getIPData = async () => {
        const res = await Axios.get(
            "https://geolocation-db.com/json/f2e84010-e1e9-11ed-b2f8-6b70106be3c8"
        );
        setIP(res.data);
    };

    useEffect(() => {
        getIPData(); // Fetch IP data on component mount
    }, []);

    // For Page
    let page = usePathname(); // Get current page URL
    const [data, setData] = useState({
        email: "",
        botchecker: null,
        pageURL: page,
    });

    const handleDataChange = (e) => {
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const [formStatus, setFormStatus] = useState("Send");
    const [errors, setErrors] = useState({});
    const [isDisabled, setIsDisabled] = useState(false);

    const formValidateHandle = () => {
        let errors = {};
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!data.email.match(emailRegex)) {
            errors.email = "Valid email is required";
        }
        return errors;
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        setFormStatus("Processing...");
        setIsDisabled(true); // Disable the form during submission

        const errors = formValidateHandle(); // Validate form data
        setErrors(errors);

        if (Object.keys(errors).length === 0) {
            if (data.botchecker === null) {
                let headersList = {
                    Accept: "*/*",
                    "Content-Type": "application/json",
                };

                let bodyContent = JSON.stringify(data);
                let reqOptions = {
                    url: "/api/email/", // Your API endpoint
                    method: "POST",
                    headers: headersList,
                    data: bodyContent,
                };

                // Send first request to send email
                await Axios.request(reqOptions);

                // Prepare for the second request
                let newDate = new Date();
                let date = newDate.getDate();
                let month = newDate.getMonth() + 1;
                let year = newDate.getFullYear();
                // Get current time
                let time =
                    today.getHours() +
                    ":" +
                    today.getMinutes() +
                    ":" +
                    today.getSeconds();

                // Prepare headers and body for the second request
                headersList = {
                    Accept: "*/*",
                    Authorization: "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer", // Replace with your actual token
                    "Content-Type": "application/json",
                };

                bodyContent = JSON.stringify({
                    IP: `${ip.IPv4} - ${ip.country_name} - ${ip.city}`, // Include IP data
                    Brand: "Mini Investment",
                    Page: page, // Current page URL
                    Date: `${month < 10 ? `0${month}` : month}-${date < 10 ? `0${date}` : date}-${year}`, // Format date
                    Time: time, // Current time
                    JSON: data, // User data
                });

                // Send second request (the new API endpoint for logging)
                await Axios.request({
                    url: "/api/log/", // Update this URL to your actual API endpoint
                    method: "POST",
                    headers: headersList,
                    data: bodyContent,
                });

                setFormStatus("Sent successfully!");
            } else {
                setFormStatus("Failed: Bot detected.");
            }
        } else {
            setFormStatus("Validation failed. Please correct the errors.");
        }

        setIsDisabled(false); // Re-enable the form after submission
    };
    return (
        <footer>
            <div className="bg-[#231F20] md:py-[50px] py-[40px] text-white">
                <div className="container">
                    <div className="grid grid-cols-12 lg:gap-x-10 gap-5 border-y border-white pt-5 pb-[50px]">
                        <div className="xl:col-span-5 lg:col-span-4 sm:col-span-6 col-span-12">
                            <h4 className="text-[30px] leading-normal font-semibold mb-3">About Company</h4>
                            <p className="text-[#8F8F8F] text-sm">We can manage your infrastructure affordably and seamlessly by applying our award-winning IT solutions. So you will get Customized IT Solutions.</p>
                        </div>
                        <div className="xl:col-span-3 lg:col-span-4 sm:col-span-6 col-span-12">
                            <h4 className="text-[30px] leading-normal font-semibold mb-3">Office Timings</h4>
                            <ul className="text-[#8F8F8F] text-sm">
                                <li>Office Hours</li>
                                <li>Mon-Fri</li>
                                <li>8:00AM – 6:00PM</li>
                            </ul>
                        </div>
                        <div className="lg:col-span-4 sm:col-span-6 col-span-12">
                            <h4 className="text-[30px] leading-normal font-semibold mb-3">News Letter</h4>
                            <form
                                autoComplete="off"
                                spellCheck="false">
                                <div className="border border-[#484848] flex items-center">
                                    <div className="basis-[75%]">
                                        <input
                                            autoComplete="off"
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            id={referenceID}
                                            onChange={handleDataChange}
                                            className="bg-[#262626] py-3 px-4 block w-full text-white outline-none placeholder:text-[#8F8F8F] text-[15px] font-normal leading-tight focus-visible:outline-none transition-all duration-500 ease-in-out"
                                        />
                                        {errors.email && (
                                            <span className="text-[12px] block p-2 font-medium text-red-500">
                                                {errors.email}
                                            </span>
                                        )}
                                    </div>
                                    <button className="basis-[25%] __animatedPing bg-[#438EFF] block w-full text-white py-3 px-4 text-[15px] font-medium leading-tight" onClick={handleFormSubmit} disabled={isDisabled}>{formStatus}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="flex flex-wrap md:justify-between justify-center xl:gap-x-5 gap-5 items-center mt-10">
                        <div className="flex flex-wrap md:gap-x-5 gap-5 justify-center items-center">
                            <a href="tel:+12237587016" className="flex items-center gap-x-2 text-[13px] leading-tight font-light">
                                <span className="block">
                                    <svg fill="#438EFF" width={10} height={10} aria-hidden="true" className="e-font-icon-svg e-fas-phone-alt" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg>
                                </span>
                                <span className="block">+1 223-758-7016</span>
                            </a>
                            <a href="mailto:info@mini-investments.net" className="flex items-center gap-x-2 text-[13px] leading-tight font-light">
                                <span className="block">
                                    <svg fill="#438EFF" width={10} height={10} aria-hidden="true" className="e-font-icon-svg e-fas-location-arrow" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M444.52 3.52L28.74 195.42c-47.97 22.39-31.98 92.75 19.19 92.75h175.91v175.91c0 51.17 70.36 67.17 92.75 19.19l191.9-415.78c15.99-38.39-25.59-79.97-63.97-63.97z"></path></svg>
                                </span>
                                <span className="block">info@mini-investments.net</span>
                            </a>
                            <span className="flex items-center gap-x-2 text-[13px] leading-tight font-light">
                                <span className="block">
                                    <svg fill="#438EFF" width={10} height={10} aria-hidden="true" className="e-font-icon-svg e-fas-map-marker-alt" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
                                </span>
                                <span className="block">502 W 7th Street STE 100, Erie PA 16502</span>
                            </span>
                        </div>
                        <div>
                            <p className="text-[13px] leading-tight text-center font-light">Copyright © 2024 IT-Support | Powered by mini-investment.net</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;