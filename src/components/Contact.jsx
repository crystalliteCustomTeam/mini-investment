"use client"
import { useEffect, useId, useState } from "react";
import { usePathname } from "next/navigation";
import Axios from "axios";
const Contact = () => {
    const referenceID = useId();
    const [ip, setIP] = useState("");
    const getIPData = async () => {
        const res = await Axios.get(
            "https://geolocation-db.com/json/f2e84010-e1e9-11ed-b2f8-6b70106be3c8"
        );
        setIP(res.data);
    };
    useEffect(() => {
        getIPData();
    }, []);
    // For Page
    let page = usePathname();
    const [data, setData] = useState({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
        botchecker: null,
        pageURL: page,
    });
    const handleDataChange = (e) => {
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const [formStatus, setFormStatus] = useState("Submit");
    const [errors, setErrors] = useState({});
    const [isDisabled, setIsDisabled] = useState(false);
    const formValidateHandle = () => {
        let errors = {};
        // Name validation
        if (!data.name.trim()) {
            errors.name = "Name is required";
        }
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!data.email.match(emailRegex)) {
            errors.email = "Valid email is required";
        }
        // Phone validation
        const phoneRegex = /[0-9]/i;
        if (!data.phone.match(phoneRegex)) {
            errors.phone = "Valid phone is required";
        }
        // Subject validation
        if (!data.subject.trim()) {
            errors.subject = "Subject is required";
        }
        return errors;
    };
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setFormStatus("Processing...");
        setIsDisabled(true);

        const errors = formValidateHandle();
        setErrors(errors);

        if (Object.keys(errors).length === 0) {
            if (data.botchecker === null) {
                let headersList = {
                    Accept: "*/*",
                    "Content-Type": "application/json",
                };

                let bodyContent = JSON.stringify(data);
                let reqOptions = {
                    url: "/api/email/",
                    method: "POST",
                    headers: headersList,
                    data: bodyContent,
                };
                await Axios.request(reqOptions);
            } else {
                setFormStatus("Failed...");
                setIsDisabled(false);
            }
        } else {
            setFormStatus("Failed...");
            setIsDisabled(false);
        }

        if (Object.keys(errors).length === 0) {
            if (data.botchecker === null) {
                // For Date
                let newDate = new Date();
                let date = newDate.getDate();
                let month = newDate.getMonth() + 1;
                let year = newDate.getFullYear();
                // For Time
                let today = new Date();
                let time =
                    today.getHours() +
                    ":" +
                    today.getMinutes() +
                    ":" +
                    today.getSeconds();

                let headersList = {
                    Accept: "*/*",
                    Authorization: "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
                    "Content-Type": "application/json",
                };

                let bodyContent = JSON.stringify({
                    IP: `${ip.IPv4} - ${ip.country_name} - ${ip.city}`,
                    Brand: "Mini Investment",
                    Page: `${page}`,
                    Date: `${month < 10 ? `0${month}` : `${month}`}-${date}-${year}`,
                    Time: time,
                    JSON: data,
                });
            }
        }
    };
    return (
        <form
            autoComplete="off"
            spellCheck="false"
            className="lg:w-[70%] md:w-[90%] w-full mx-auto"
        >
            <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-5 items-center">
                <div>
                    <input
                        autoComplete="off"
                        type="text"
                        name="name"
                        placeholder="Name"
                        id={referenceID}
                        onChange={handleDataChange}
                        className="bg-[#262626] rounded-xl py-4 px-4 block w-full mb-4 text-white outline-none placeholder:text-[#8F8F8F] text-[15px] font-normal leading-tight focus-visible:outline-none focus-visible:outline-[#438EFF] focus-visible:outline-1 border border-[#69727d] focus-visible:border-transparent transition-all duration-500 ease-in-out"
                    />
                    {errors.name && (
                        <span className="text-[12px] block p-2 font-medium text-red-500">
                            {errors.name}
                        </span>
                    )}
                </div>
                <div>
                    <input
                        autoComplete="off"
                        type="email"
                        name="email"
                        placeholder="Email"
                        id={referenceID}
                        onChange={handleDataChange}
                        className="bg-[#262626] rounded-xl py-4 px-4 block w-full mb-4 text-white outline-none placeholder:text-[#8F8F8F] text-[15px] font-normal leading-tight focus-visible:outline-none focus-visible:outline-[#438EFF] focus-visible:outline-1 border border-[#69727d] focus-visible:border-transparent transition-all duration-500 ease-in-out"
                    />
                    {errors.email && (
                        <span className="text-[12px] block p-2 font-medium text-red-500">
                            {errors.email}
                        </span>
                    )}
                </div>
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-5 items-center">
                <div>
                    <input
                        autoComplete="off"
                        type="tel"
                        name="phone"
                        placeholder="Telephone Number"
                        id={referenceID}
                        onChange={handleDataChange}
                        className="bg-[#262626] rounded-xl py-4 px-4 block w-full mb-4 text-white outline-none placeholder:text-[#8F8F8F] text-[15px] font-normal leading-tight focus-visible:outline-none focus-visible:outline-[#438EFF] focus-visible:outline-1 border border-[#69727d] focus-visible:border-transparent transition-all duration-500 ease-in-out"
                    />
                    {errors.phone && (
                        <span className="text-[12px] block p-2 font-medium text-red-500">
                            {errors.phone}
                        </span>
                    )}
                </div>
                <div>
                    <input
                        autoComplete="off"
                        type="tel"
                        name="subject"
                        placeholder="Subject"
                        id={referenceID}
                        onChange={handleDataChange}
                        className="bg-[#262626] rounded-xl py-4 px-4 block w-full mb-4 text-white outline-none placeholder:text-[#8F8F8F] text-[15px] font-normal leading-tight focus-visible:outline-none focus-visible:outline-[#438EFF] focus-visible:outline-1 border border-[#69727d] focus-visible:border-transparent transition-all duration-500 ease-in-out"
                    />
                    {errors.subject && (
                        <span className="text-[12px] block p-2 font-medium text-red-500">
                            {errors.subject}
                        </span>
                    )}
                </div>
            </div>
            <textarea
                name="message"
                id={referenceID}
                placeholder="Message"
                className="bg-[#262626] rounded-xl py-4 px-4 block w-full mb-4 text-white outline-none placeholder:text-[#8F8F8F] text-[15px] font-normal leading-tight focus-visible:outline-none focus-visible:outline-[#438EFF] focus-visible:outline-1 border border-[#69727d] focus-visible:border-transparent transition-all duration-500 ease-in-out resize-none h-36" />
            <button className="bg-[#438EFF] __animatedPing block w-full text-white rounded-xl py-4 px-4 text-[15px] font-medium leading-tight" onClick={handleFormSubmit} disabled={isDisabled}>{formStatus}</button>
        </form>
    )
}
export default Contact;