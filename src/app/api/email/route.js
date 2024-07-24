import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
    try {
        const { name, email, phone, subject, message, pageURL } = await request.json();
        const transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: 'dev.ar@productions-dev.com',
                pass: "Qwer@123!@#"
            }
        });
        const mailOptions = {
            from: 'dev.ar@productions-dev.com',
            to: 'dev.ar@productions-dev.com',
            subject: `New Lead Generated By Mini Investment`,
            html: `<div style="width:100%;height:100%;padding:1rem;background-color: #efefef;">
                <div style="display:flex; align-items: center;">
                    <h4>Name : ${name}</h4>
                </div>
                <div style="display:flex; align-items: center;">
                    <h4>Email : ${email}</h4>
                </div>
                <div style="display:flex; align-items: center;">
                    <h4>Phone : ${phone}</h4>
                </div>
                <div style="display:flex; align-items: center;">
                    <h4>Subject : ${subject}</h4>
                </div>
                <div style="display:flex; align-items: center;">
                    <h4>Message : ${message}</h4>
                </div>
                <div style="display:flex; align-items: center;">
                    <h4>From : ${pageURL}</h4>
                </div>
            </div>`
        };
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ "mesaage": "Email sent successfully", "status": 200 });
    } catch (error) {
        return NextResponse.json({ "mesaage": "Failed to sent Email", "status": 500 });
    }
}