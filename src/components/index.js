import dynamic from "next/dynamic"
const Header = dynamic(() => import("./Header"));
const Video = dynamic(() => import("./Video"));
const CounterAnimation = dynamic(() => import("./CounterAnimation"));
const Contact = dynamic(() => import("./Contact"));
const Card = dynamic(() => import("./Card"));
const Footer = dynamic(() => import("./Footer"));
export {
    Header,
    Video,
    CounterAnimation,
    Contact,
    Card,
    Footer
}