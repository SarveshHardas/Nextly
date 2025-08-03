"use client"

import {useState} from 'react';
import Image from "next/image";
import {Smile, Sun, Play, ChevronUp,ChevronDown} from "lucide-react";
import ReactPlayer from "react-player";
import {useTheme} from '@/context/ThemeContext';

export default function Home(){
  const [openFAQs, setOpenFAQs] = useState<Record<string, boolean>>({});
  const {isLightTheme} = useTheme();
  const [isPlaying, setIsPlaying] = useState(false);

  const faqData = [
    {
      id: 1,
      question: "Is this template completely free to use?",
      answer: "Yes, this template is completely free to use."
    },
    {
      id: 2,
      question: "Can I use it in a commercial project?",
      answer: "Yes, You can."
    },
    {
      id: 3,
      question: "What is your refund policy?",
      answer: "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked."
    },
    {
      id: 4,
      question: "Do you offer technical support?",
      answer: "No, we don't offer technical support for free downloads. Please purchase a support plan to get 6 months of support."
    }
  ];

  const toggleFAQ = (id: number | string) => {
    setOpenFAQs(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return(
      <section className={"p-8 mx-auto"}>
        <div className={"flex justify-between items-center p-5 xl:p-0"}>
          <div className="space-y-5">
            <p className="text-6xl font-bold">
              Free Landing Page<br/>Template for startups
            </p>
            <p className="text-2xl font-medium text-gray-500">Nextly is a free landing page & marketing website<br/>template for startups and indie projects. Its built with<br/>Next.js & TailwindCSS. And its completely open-source.</p>
            <div className="flex justify-start items-center space-x-5">
              <button type="button" className="bg-[#4f46e5] rounded-lg px-5 py-3 text-white">
                Download for Free
              </button>
              <button type="button" className="flex justify-center items-center space-x-2">
                <Image src="/img/brands/Github.png" alt="github" width={20} height={20}/>
                <p className="text-gray-500">View on Github</p>
              </button>
            </div>
          </div>
          <Image src="/img/hero.png" alt="hero" width={500} height={500} />
        </div>
        <p className={`${isLightTheme?('text-gray-400'):('text-white')} text-center text-2xl mt-10`}>Trusted by <span className="text-[#4f46e5]">2000+ </span>customers worldwide</p>
        <div className="flex justify-evenly items-center space-x-4 py-10">
          <Image src="/img/brands/amazon.svg" alt="amazon" width={110} height={33}/>
          <Image src="/img/brands/verizon.svg" alt="verizon" width={110} height={33}/>
          <Image src="/img/brands/microsoft.svg" alt="microsoft" width={110} height={33}/>
          <Image src="/img/brands/netflix.svg" alt="netflix" width={110} height={33}/>
          <Image src="/img/brands/sony.svg" alt="sony" width={110} height={33}/>
        </div>
        <p className="uppercase text-md font-semibold text-[#4f46e5] text-center py-10">
          nextly benefits
        </p>
        <p className="text-center font-bold text-4xl">Why should you use this landing page</p>
        <p className="text-center text-xl text-gray-500 py-7">
          Nextly is a free landing page & marketing website template for startups<br/>and indie projects. Its built with Next.js & TailwindCSS. And its<br/>completely open-source.
        </p>
        <div className="">
          <div className="flex justify-evenly items-center gap-10 py-50">
            <Image src="/img/benefit-one.png" alt="b1" width={428} height={450}/>
            <div>
              <p className="text-4xl font-bold py-2">Highlight your benefits</p>
              <p className="text-gray-500 text-xl py-2">You can use this space to highlight your first benefit or a feature<br/>of your product. It can also contain an image or Illustration like in<br/>the example along with some bullet points.</p>
              <div className="flex justify-start space-x-2 py-7">
                <div className="bg-[#6366f1] p-4 rounded">
                  <Smile size={24}/>
                </div>
                <div className="space-y-1">
                  <h1 className="text-2xl font-medium">Understand your customers</h1>
                  <p className="text-gray-500">Then explain the first point briefly in one or two lines.</p>
                </div>
              </div>
              <div className="flex justify-start space-x-2 py-7">
                <div className="bg-[#6366f1] p-4 rounded">
                  <Smile size={24}/>
                </div>
                <div className="space-y-1">
                  <h1 className="text-2xl font-medium">Improve acquisition</h1>
                  <p className="text-gray-500">Here you can add the next benefit point.</p>
                </div>
              </div>
              <div className="flex justify-start space-x-2 py-7">
                <div className="bg-[#6366f1] p-4 rounded">
                  <Smile size={24}/>
                </div>
                <div className="space-y-1">
                  <h1 className="text-2xl medium">Drive customer retention</h1>
                  <p className="text-gray-500">This will be your last bullet point in this section.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-evenly items-center gap-10">
            <div>
              <p className="text-4xl font-bold py-2">Offer more benefits here</p>
              <p className="text-gray-500 text-xl py-2">You can use this same layout with a flip image to highlight your<br/>rest of the benefits of your product. It can also contain an image<br/>or Illustration as above section along with some bullet points.</p>
              <div className="flex justify-start space-x-2 py-7">
                <div className="bg-[#6366f1] p-4 rounded">
                  <Smile size={24}/>
                </div>
                <div className="space-y-1">
                  <h1 className="text-2xl font-medium">Mobile Responsive Template</h1>
                  <p className="text-gray-500">Nextly is designed as a mobile first responsive template.</p>
                </div>
              </div>
              <div className="flex justify-start space-x-2 py-7">
                <div className="bg-[#6366f1] p-4 rounded">
                  <Smile size={24}/>
                </div>
                <div className="space-y-1">
                  <h1 className="text-2xl font-medium">Powered by Next.js & TailwindCSS</h1>
                  <p className="text-gray-500">This template is powered by latest technologies and tools.</p>
                </div>
              </div>
              <div className="flex justify-start space-x-2 py-7">
                <div className="bg-[#6366f1] p-4 rounded">
                  <Sun size={24}/>
                </div>
                <div className="space-y-1">
                  <h1 className="text-2xl medium">Dark & Light Mode</h1>
                  <p className="text-gray-500">Nextly comes with a zero-config light & dark mode.</p>
                </div>
              </div>
            </div>
            <Image src="/img/benefit-two.png" alt="b2" width={428} height={450}/>
          </div>
        </div>
        <p className="uppercase text-md font-semibold text-[#4f46e5] text-center py-10">
          Watch a Video
        </p>
        <p className="text-center font-bold text-4xl">Learn how to fulfill your needs</p>
        <p className="text-center text-xl text-gray-500 py-7">
          This section is to highlight a promo or demo video of your product.<br/>Analysts says a landing page with video has 3% more conversion rate.<br/>So, don't forget to add one. Just like this.
        </p>
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center w-[75%] h-[500px] bg-gradient-to-b from-purple-900 to-pink-500 rounded-2xl overflow-hidden hover:cursor-pointer">
            {isPlaying ? (
                <ReactPlayer
                    url="https://youtu.be/Zq5fmkH0T78?si=UIIVMnvJHFUzmZg-"
                    controls
                    playing
                    width="100%"
                    height="100%"
                />
            ) : (
                <button
                    onClick={() => setIsPlaying(true)}
                    className="bg-white rounded-full p-5 hover:cursor-pointer"
                >
                  <Play className="w-10 h-10 text-purple-900" />
                </button>
            )}
          </div>
        </div>
        <p className="uppercase text-md font-semibold text-[#4f46e5] text-center py-10">
          Testimonials
        </p>
        <p className="text-center font-bold text-4xl">Here's what our customers said</p>
        <p className="text-center text-xl text-gray-500 py-7">
          Testimonials is a great way to increase the brand trust and awareness.<br/>Use this section to highlight your popular customers.
        </p>

        <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
          <div className={`${isLightTheme?'bg-[#f3f4f6]':'bg-[#262626]'} flex flex-col justify-between p-[56px] rounded-2xl space-y-15`}>
            <p className="text-2xl">
              Share a real <span className="bg-[#e0e7ff] text-indigo-500 rounded-xl p-1">testimonial</span><br/>that hits some of your<br/>benefits from one of<br/>your popular customer.
            </p>
            <div className="flex justify-start align-bottom space-x-2">
              <Image src="/img/user1.jpg" alt="user1" width={50} height={40} className="rounded-tl-full"/>
              <div className="space-y-1">
                <p className="text-xl font-semibold">Sarah Steiner</p>
                <p className="text-gray-500">VP Sales at Google</p>
              </div>
            </div>
          </div>
          <div className={`${isLightTheme?'bg-[#f3f4f6]':'bg-[#262626]'} flex flex-col justify-between p-[56px] rounded-2xl space-y-15`}>
            <p className="text-2xl">
              Make sure you only pick<br/>the <span className="bg-[#e0e7ff] text-indigo-500 rounded-xl p-1">right sentence </span>to<br/>keep it short and simple.
            </p>
            <div className="flex justify-start align-bottom space-x-2">
              <Image src="/img/user2.jpg" alt="user2" width={50} height={40} className="rounded-tl-full"/>
              <div className="space-y-1">
                <p className="text-xl font-semibold">Dylan Ambrose</p>
                <p className="text-gray-500">Lead marketer at Netflix</p>
              </div>
            </div>
          </div>
          <div className={`${isLightTheme?'bg-[#f3f4f6]':'bg-[#262626]'} flex flex-col justify-between p-[56px] rounded-2xl space-y-15`}>
            <p className="text-2xl">
              This is an <span className="bg-[#e0e7ff] text-indigo-500 rounded-xl p-1">awesome</span><br/>landing page template<br/>I've seen. I would use<br/>this for anything.
            </p>
            <div className="flex justify-start align-bottom space-x-2">
              <Image src="/img/user3.jpg" alt="user3" width={50} height={40} className="rounded-tl-full"/>
              <div className="space-y-1">
                <p className="text-xl font-semibold">Gabrielle Winn</p>
                <p className="text-gray-500">Co-founder of Acme Inc</p>
              </div>
            </div>
          </div>
        </div>
        <p className="uppercase text-md font-semibold text-[#4f46e5] text-center py-10">
          FAQ
        </p>
        <p className="text-center font-bold text-4xl">Frequently Asked Questions</p>
        <p className="text-center text-xl text-gray-500 py-7">
          Answer your customers possible questions here, it will increase the<br/>conversion rate as well as support or chat requests.
        </p>

        <div className="grid grid-cols-1 xl:px-[30%] sm:px-[5%] md:px-[20%]">
          {faqData.map((faq, index) => (
              <div
                  key={faq.id}
                  className={`${isLightTheme ? 'bg-[#f3f4f6]' : 'bg-[#262626]'} ${
                      index === 0 ? 'mb-2.5' : index === faqData.length - 1 ? 'mt-2.5' : 'my-2.5'
                  } px-4 py-6 rounded-xl transition-all duration-300 ease-in-out`}
              >
                <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFAQ(faq.id)}>
                  <p className="text-lg font-medium pr-4">{faq.question}</p>
                  <button className="flex-shrink-0 transition-transform duration-300 ease-in-out">
                    {openFAQs[faq.id] ? (
                        <ChevronDown className="w-5 h-5 text-purple-600" />
                    ) : (
                        <ChevronUp className="w-5 h-5 text-purple-600" />
                    )}
                  </button>
                </div>

                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFAQs[faq.id] ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                }`}>
                  <p className={`${isLightTheme ? 'text-gray-600' : 'text-gray-300'} text-base leading-relaxed`}>
                    {faq.answer}
                  </p>
                </div>
              </div>
          ))}
        </div>
        <div className={"px-[15%] mt-[5%]"}>
          <div className={"bg-[#4f46e5] px-[5%] py-[5%] flex justify-between rounded-xl text-white"}>
            <div className={"space-y-2"}>
              <p className={"text-3xl font-medium"}>Ready to try-out this template?</p>
              <p className={"text-lg font-medium"}>Don't let your visitor see your poor landing.</p>
            </div>
            <button className={"bg-white text-[#4f46e5] px-12 py-3 rounded-lg font-medium text-lg"}>
              <span>Download for Free</span>
            </button>
          </div>
        </div>
        <div className={"mt-[10%] text-gray-300"}>
          <hr/>
        </div>
      </section>
  )
}