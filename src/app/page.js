import { Video, CounterAnimation, Contact, Card } from "../components/index";
import Image from "next/image";
import Icon1 from "media/serviceIcon/1.png"
import Icon2 from "media/serviceIcon/1.png"
import Icon3 from "media/serviceIcon/2.png"
import Icon4 from "media/serviceIcon/3.png"
import Icon5 from "media/serviceIcon/4.png"
import Icon6 from "media/serviceIcon/5.png"
import Icon7 from "media/serviceIcon/6.png"
import Icon8 from "media/serviceIcon/7.png"
import Ellipse from "media/ellipse.png"
import Ellipse2 from "media/ellipse2.png"
import Logo1 from "media/jp1.png"
import Logo2 from "media/bsp.png"
import Logo3 from "media/cmm.png"
import Logo4 from "media/bwe.png"
import Banner from "media/bannerBg.png"
const Home = () => {
  return (
    <>
      <section>
        <div className="relative">
          <Video />
        </div>
      </section>
      <section id="services">
        <div className="relative xl:py-[100px] lg:py-[80px] md:py-[60px] py-[40px] bg-[#131313]">
          <div className="container">
            <div className="sm:text-center text-justify text-white xl:w-[80%] mx-auto">
              <h1 className="lg:text-[42px] md:text-[32px] text-[25px] leading-tight font-bold mb-3"><span className="text-[#438eff]">Complete IT Support</span> For Small And Medium Businesses Across The United States</h1>
              <p className="text-sm leading-normal font-normal">At Mini-Investments, we’re pioneers in democratizing access to technological advancement. Our mission? To ignite the digital age for businesses, offering innovative solutions and services that spark growth and prosperity. With a laser focus on customer empowerment and strategic alliances, we’re not just redefining investment; we’re revolutionizing it. Our commitment to excellence, integrity, and relentless innovation ensures that we don’t just meet expectations; we exceed them, propelling global progress forward. Join us on the journey where Mini-Investments open doors to boundless opportunities for individuals and communities worldwide.</p>
            </div>
            <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-10 gap-7 mt-10">
              {
                [
                  [Icon1,
                    "Managed Services",
                    "Elevate your business with our Managed Services, offering seamless IT solutions and round-the-clock support. From proactive monitoring to strategic optimization, we ensure maximum uptime and efficiency. Partner with us for peace of mind and focus on what truly matters—your success"],
                  [Icon2,
                    "Cloud",
                    "Embrace limitless scalability and flexibility with our Cloud solutions. From data storage to application hosting, we provide tailored cloud services to suit your needs. Experience seamless integration and enhanced efficiency as you propel your business into the digital age."],
                  [Icon3,
                    "Security",
                    "Safeguard your digital assets with our comprehensive Security solutions. From threat detection to data encryption, we prioritize your peace of mind. Partner with us to fortify your defenses and stay ahead in an ever-evolving threat landscape."],
                  [Icon4,
                    "IT Service Desk",
                    "Experience unparalleled support with our IT Service Desk solutions. Our expert team ensures swift resolution to technical issues, keeping your operations running smoothly. Trust us to provide proactive assistance and personalized solutions tailored to your needs."],
                  [Icon5,
                    "Web 3.0 Development",
                    "Embark on the next frontier of the web with our Web 3.0 Development services. Harness the power of blockchain, AI, and decentralized technologies to create immersive and secure digital experiences. Join us in shaping the future of the internet with innovative solutions tailored to your vision."],
                  [Icon6,
                    "Digital Marketing",
                    "Elevate your online presence with our Digital Marketing expertise. From SEO strategies to social media campaigns, we drive targeted traffic and amplify your brand’s reach. Partner with us to unlock growth opportunities and stand out in the digital landscape."],
                  [Icon7,
                    "Hosting Service",
                    "Experience reliable and scalable hosting solutions with our Hosting Service. From websites to applications, we ensure seamless performance and uptime. Trust us to provide secure and tailored hosting options to meet your needs."],
                  [Icon8,
                    "Content Services",
                    "Elevate your content game with our comprehensive Content Services. From engaging copy to captivating visuals, we craft compelling content tailored to your audience. Partner with us to tell your story and leave a lasting impression in the digital realm."]
                ].map(([img, title, desc], i) => (
                  <div key={i} className="border-2 transition-all duration-200 ease-in-out group hover:border-[#484848] border-[#438eff] md:rounded-[0_20px_0_20px] rounded-[20px] p-[50px_20px] text-center text-white">
                    <Image src={img} alt="icons" className="block mx-auto group-hover:invert-[.2] group-hover:brightness-[.1]" draggable={false} />
                    <h3 className="text-[20px] leading-tight font-bold my-3">{title}</h3>
                    <p className="text-[13px] leading-normal font-normal">{desc}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-[#231F20] md:py-[60px] py-[40px]">
          <div className="container">
            <div className="text-white text-center">
              <h2 className="xl:text-[50px] lg:text-[40px] md:text-[30px] text-[25px] leading-tight font-semibold">Our Brands</h2>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-x-10 gap-5 items-center mt-10">
              <div className="text-white sm:text-start text-justify">
                <h3 className="xl:text-[50px] lg:text-[40px] md:text-[30px] text-[20px] leading-tight font-semibold mb-3">Infinity Animations</h3>
                <span className="block text-[#438EFF] lg:text-[20px] md:text-[18px] text-base leading-tight font-medium mb-3">Let Our Animations Tell Your Story</span>
                <h4 className="lg:text-[23px] md:text-[20px] text-base font-medium leading-tight mb-3">Infinityanimations.com</h4>
                <p className="md:text-[1rem] text-sm leading-normal font-normal">Transforming Visions into Vivid Realities: Elevate Your Storytelling with Our Animation Magic. Whether you’re a brand looking to mesmerize audiences, an educator aiming to demystify complexities, or a content creator chasing visual perfection, our animation services are your canvas. We merge technical mastery with artistic genius, infusing life into every frame and creating animations that defy expectations. Let us turn your ideas into animated masterpieces that captivate, educate, and inspire.</p>
                <a href="http://Infinityanimations.com" target="_blank" rel="dofollow" className="w-max mt-8 flex items-center gap-x-3 p-[10px_30px] border-2 transition-all duration-300 ease-in-out hover:scale-105">
                  <span className="block text-base font-medium">
                    Learn More
                  </span>
                  <span className="block w-[1rem] h-[1rem]">
                    <svg fill="#ffffff" aria-hidden="true" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"></path></svg>
                  </span>
                </a>
              </div>
              <div>
                <Card />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about-us">
        <div className="relative z-10 bg-[#131313] xl:py-[100px] lg:py-[80px] md:py-[60px] py-[40px]">
          <div className="container">
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-x-16 gap-5 items-center">
              <div className="text-white">
                <h2 className="lg:text-[42px] md:text-[32px] text-[25px]  leading-tight font-bold mb-3 text-[#438EFF]">WE HAVE IT ALL!</h2>
                <div className="relative flex items-center gap-x-16 md:my-10 my-5">
                  <Image src={Ellipse} alt="ellipse" className="absolute bg-[#131313] top-40 right-40 -z-10 w-full h-full object-contain object-left-bottom" priority={true} />
                  <div className="text-center">
                    <CounterAnimation start={0} end={10} duration={3000} />
                    <span className="block lg:text-[20px] md:text-base text-sm font-light">Years</span>
                  </div>
                  <div className="text-center">
                    <CounterAnimation start={0} end={2000} duration={3000} prefix="+" />
                    <span className="block lg:text-[20px] md:text-base text-sm font-light">Clients</span>
                  </div>
                  <div className="text-center">
                    <CounterAnimation start={0} end={600} duration={3000} prefix="+" />
                    <span className="block lg:text-[20px] md:text-base text-sm font-light">Reviews</span>
                  </div>
                </div>
                <p className="text-sm sm:text-start text-justify leading-normal font-normal">We are a technology-focused investment company that drives innovation and transformation across various digital services. With a passion for excellence and a deep understanding of the evolving technological landscape, we invest in cutting-edge solutions to help businesses thrive in the digital age. Discover how our expertise in digital marketing, mobile app development, software solutions, and content services can unlock new opportunities and accelerate your growth.</p>
              </div>
              <div className="relative z-10">
                <Image src={Ellipse2} alt="ellipse" className="absolute right-0 md:-bottom-16 -bottom-8 -z-10 w-[10%] h-full object-contain object-right-bottom" priority={true} />
                <a href="https://jumpto1.com/" target="_blank" rel="dofollow">
                  <Image src={Logo1} alt="logos" className="block mb-4 transition-all duration-300 ease-in-out hover:sm:scale-125 hover:scale-110" />
                </a>
                <a href="https://bestsellingpublisher.com/" target="_blank" rel="dofollow">
                  <Image src={Logo2} alt="logos" width={145} height={60} className="block mb-4 xl:-mt-10 transition-all duration-300 ease-in-out hover:sm:scale-125 hover:scale-110 ms-auto" />
                </a>
                <a href="https://clickfirstsmm.com/" target="_blank" rel="dofollow">
                  <Image src={Logo3} alt="logos" width={161} height={91} className="block xl:ms-14 mb-4 transition-all duration-300 ease-in-out hover:sm:scale-125 hover:scale-110" />
                </a>
                <a href="https://www.bookwritingexperts.com/" target="_blank" rel="dofollow" className="block xl:me-16">
                  <Image src={Logo4} alt="logos" width={121} height={97} className="block xl:-mt-16 mb-4 transition-all duration-300 ease-in-out hover:sm:scale-125 hover:scale-110 ms-auto" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="relative bg-[#231F20] text-white lg:pt-[80px] md:pt-[60px] pt-[40px]">
          <div className="container">
            <div className="bg-[#438EFF] grid grid-cols-12 md:gap-0 gap-5 items-center rounded-3xl md:px-10 px-5 md:py-10 py-8">
              <div className="xl:col-span-9 md:col-span-8 col-span-12">
                <span className="block text-sm font-normal mb-3">Do you have any project?</span>
                <h3 className="lg:text-[30px] md:text-[25px] text-[20px] leading-tight font-medium">Let’s Talk About Business <br className="md:block hidden" /> Solutions With Us</h3>
              </div>
              <div className="xl:col-span-3 md:col-span-4 col-span-12">
                <a href="#" className="block text-center border-2 px-14 py-2 transition-all duration-300 ease-in-out __animatedPing border-white lg:text-[25px] md:text-xl text-base leading-tight hover:bg-white hover:text-black">Join Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="relative z-10 xl:py-[100px] lg:py-[80px] md:py-[60px] py-[40px] bg-[#231F20]">
          <Image src={Banner} alt="banner" className="absolute bg-[#231F20] top-0 left-0 right-0 bottom-0 -z-10 w-full h-full object-cover object-center" priority={true} />
          <div className="container">
            <div className="text-center text-white">
              <span className="block md:text-[20px] text-lg leading-tight font-medium">A journey of a thousand miles begins with a single step</span>
              <h2 className="text-[#438EFF] xl:text-[45px] lg:text-[40px] md:text-[30px] text-[25px] font-bold mb-5">GET IN TOUCH</h2>
            </div>
            <Contact />
          </div>
        </div>
      </section>
    </>
  )
}
export default Home;