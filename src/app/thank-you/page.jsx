// Import Components
import Link from "next/link";

const Page = () => {
    return (
        <main>
            <section>
                <div className="h-screen flex items-center bg-[#231F20]">
                    <div className="container">
                        <h1 className="text-4xl sm:text-5xl xl:text-5xl 2xl:text-6xl text-white font-bold leading-none mb-5">
                            Dear Customer,
                        </h1>
                        <p className="text-base font-medium text-white mb-5">
                            Thank you for submitting the Form on our website. We appreciate your interest
                        </p>
                        <Link href="/" className="w-max text-white gap-x-2 border-2 py-2 px-10 mt-5 block transition-all ease-in-out duration-500 border-[#438EFF] bg-transparent hover:bg-[#438EFF]">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Page;