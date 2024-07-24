"use client"
import { useState } from "react";
const Contact = () => {
    const [data, setData] = useState({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
        botchecker: null
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
                    method: "POST",
                    headers: headersList,
                    body: bodyContent,
                };
                try {
                    const response = await fetch("/api/email/", reqOptions);
                    if (response.ok) {
                        window.location.href = "/thank-you";
                    } else {
                        setFormStatus("Failed...");
                        setIsDisabled(false);
                    }
                } catch (error) {
                    setFormStatus("Failed...");
                    setIsDisabled(false);
                }
            } else {
                setFormStatus("Failed...");
                setIsDisabled(false);
            }
        } else {
            setFormStatus("Failed...");
            setIsDisabled(false);
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
                        id="name"
                        value={data.name}
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
                        id="email"
                        value={data.email}
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
                        id="phone"
                        value={data.phone}
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
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        id="subject"
                        value={data.subject}
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
                autoComplete="off"
                name="message"
                id="message"
                placeholder="Message"
                value={data.message}
                onChange={handleDataChange}
                className="bg-[#262626] rounded-xl py-4 px-4 block w-full mb-4 text-white outline-none placeholder:text-[#8F8F8F] text-[15px] font-normal leading-tight focus-visible:outline-none focus-visible:outline-[#438EFF] focus-visible:outline-1 border border-[#69727d] focus-visible:border-transparent transition-all duration-500 ease-in-out resize-none h-36"></textarea>
            <button className="bg-[#438EFF] __animatedPing block w-full text-white rounded-xl py-4 px-4 text-[15px] font-medium leading-tight" onClick={handleFormSubmit} disabled={isDisabled}>{formStatus}</button>
        </form>
    )
}
export default Contact;