import Header from "@/components/shared/Header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#0C1844]">
      <Header />
      {/* <UserButton/> */}
      <div className="  block justify-center items-center gap-10 py-10 px-12 bg-gradient-to-r from-[#FF6969] via-pink-600 to-[#C80036] lg:flex lg:px-0">
        <div>
          <h1 className="head-text mb-4 text-white">
            Go Digital with creatorAcademy.
          </h1>
          <p>
            The ultimate platform for creators to design, share, and monetize
            their courses effortlessly.
          </p>
        </div>
        <Image
          src={"/assets/home-1.png"}
          width={400}
          height={400}
          alt="home-1"
        />
      </div>

      <section className="py-16">
        <h2 className="text-heading3-bold font-bold text-center mb-12 text-white">
          Features
        </h2>
        <div className=" flex justify-center container mx-auto ">
          <div className="flex flex-col items-center">
            <div className="w-full md:w-1/2  mb-8 ">
              <div className="p-6 bg-white rounded-lg  text-black  shadow-md shadow-[#FFF5E1] ">
                <h3 className="text-xl font-bold mb-4">Easy Course Creation</h3>
                <p>Create courses using our intuitive tools.</p>
              </div>
            </div>
            <div className="w-full md:w-1/2  mb-8">
              <div className="p-6 bg-[#FF6969] rounded-lg shadow-lg text-white shadow-md shadow-[#FF6969]">
                <h3 className="text-xl font-bold mb-4">
                  Customizable Templates
                </h3>
                <p>Choose from a variety of beautiful templates.</p>
              </div>
            </div>
          </div>
          <div className=" flex items-center">
            <Image
              src={"/assets/home-2.png"}
              alt="home-2"
              width={300}
              height={300}
            />
          </div>
          <div className="flex flex-col items-center">
            <div className="w-full md:w-1/2  mb-8">
              <div className="p-6 bg-white rounded-lg text-black shadow-md shadow-[#FFF5E1]">
                <h3 className="text-xl font-bold mb-4">Multi-Media Support</h3>
                <p>Incorporate videos, quizzes, PDFs, and more.</p>
              </div>
            </div>
            <div className="w-full md:w-1/2   mb-8">
              <div className="p-6 bg-[#FF6969] rounded-lg text-white shadow-md shadow-[#FF6969]">
                <h3 className="text-xl font-bold mb-4">
                  Analytics and Insights
                </h3>
                <p>Track student progress and engagement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 ">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-heading3-bold font-bold text-center mb-12 text-white">
            Testimonials
          </h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <p className="italic">
                  "CreatorAcademy has transformed my teaching business. The
                  platform is easy to use, and my students love it!"
                </p>
                <p className="mt-4 font-bold flex gap-4 items-center">
                  -{" "}
                  <img
                    className="rounded-full"
                    src="https://randomuser.me/api/portraits/men/15.jpg"
                    width={35}
                    height={35}
                  />{" "}
                  Jane Doe, Creator
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <p className="italic">
                  "The analytics tools have been invaluable in understanding my
                  students' needs. Highly recommend!"
                </p>
                <p className="mt-4 font-bold flex gap-4 items-center">
                  -{" "}
                  <img
                    className="rounded-full"
                    src="https://randomuser.me/api/portraits/men/28.jpg"
                    width={35}
                    height={35}
                  />{" "}
                  - John Smith, Educator
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <p className="italic">
                  "The course creation tools are incredibly intuitive and have
                  saved me so much time. My students love the interactive
                  content!"
                </p>

                <p className="mt-4 font-bold flex gap-4 items-center">
                  -
                  <img
                    className="rounded-full"
                    src="https://randomuser.me/api/portraits/women/17.jpg"
                    width={35}
                    height={35}
                  />
                  - Emily Johnson, Online Instructor
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-20 ">
          <h2 className="text-heading3-bold text-3xl font-bold text-center mb-12 text-white">
            Pricing Plans
          </h2>
          <div className="shadow-lg shadow-[#FF6969] mx-10 px-6 py-6 flex items-center justify-between bg-[#FF6969] rounded-lg text-white ">
            <div>
              <h3 className="text-xl font-bold mb-4">Free Plan</h3>
              <p>$0/month</p>
              <p>Basic features to get started.</p>
            </div>
            <div>
              <Link
                className="bg-[#C80036] p-2 rounded-lg text-white font-semibold hover:bg-[#FF6969]"
                href={"/sign-in"}
              >
                Gets Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
