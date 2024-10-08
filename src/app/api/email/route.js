import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
    try {
        const { name, email, phone, subject, message } = await request.json();
        const transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: 'contact@bhaooinc.com',
                pass: "10@Kskwoks"
            }
        });
        const mailOptions = {
            from: 'contact@bhaooinc.com',
            to: 'contact@bhaooinc.com',
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
            </div>`
        };
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ "mesaage": "Email sent successfully", "status": 200 });
    } catch (error) {
        return NextResponse.json({ "mesaage": "Failed to sent Email", "status": 500 });
    }
}