// @flow strict
import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaCalendarAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactWithCaptcha from "./contact-with-captcha";
import ContactWithoutCaptcha from "./contact-without-captcha";
function ContactSection() {
  return (
    <div id="contact" className="my-12 lg:my-16 relative mt-24 text-white">
      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          CONTACT
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Contact me
          </p>
          <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
            <div className="lg:w-3/4 ">
              <div className="flex flex-col gap-5 lg:gap-9">
                <p className="text-sm md:text-xl flex items-center gap-3">
                  <MdAlternateEmail
                    className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                    size={36}
                  />
                  <span><a href = {`mailto:${personalData.email}`} target="_blank" className="underline">{personalData.email}</a></span>
                </p>
                <p className="text-sm md:text-xl flex items-center gap-3">
                  <FaCalendarAlt
                    className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                    size={36}
                  />
                   {/* <span><a href = {`mailto:${personalData.meet}`} target="_blank" className="underline">{personalData.email}</a></span> */}
                  <span><a href = {personalData.meet} target="_blank" className="underline">{"Book a Meeting"}</a></span>
                </p>
              </div>
              <div className="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10">
                <Link target="_blank" href={personalData.github}>
                  <IoLogoGithub
                    className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                    size={48}
                  />
                </Link>
                <Link target="_blank" href={personalData.linkedIn}>
                  <BiLogoLinkedin
                    className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                    size={48}
                  />
                </Link>
                <Link target="_blank" href={personalData.twitter}>
                  <FaXTwitter
                    className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                    size={48}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
