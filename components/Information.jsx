import { BsFacebook, BsGithub, BsInstagram } from "react-icons/bs";
import shape from "../assets/graph.png";
import Image from "next/image";
import MyProfileImage from "../assets/profile.png";
import Typewriter from "typewriter-effect";
import Link from "next/link";

const Information = () => {
  return (
    <div className="mt-10 flex gap-10 justify-center items-center bg-white z-1 lg:mx-20 md:flex-wrap md:mx-5 md:pt-20 xs:flex-wrap xs:pt-20 xs:ml-5 xs:gap-0">
      <div className="flex flex-col gap-10 mr-10 xs:hidden">
        <Link href="https://www.facebook.com/TuonNguyen1602/">
          <BsFacebook className="text-2xl text-pink1-cus" />
        </Link>
        <Link href="https://github.com/tuon1602">
          <BsGithub className="text-2xl text-pink1-cus " />
        </Link>
        <Link href="https://www.instagram.com/tuonnguyen_._/">
          <BsInstagram className="text-2xl text-pink1-cus " />
        </Link>
      </div>
      <div className="xl:flex-1 md:w-9/12 md:flex-none ">
        <div className="font-bold text-4xl">
          <Typewriter
            options={{
              strings: [
                "Hi,Im Tuấn",
                "You can call me Tuon",
                "Welcome to my porfolio website",
              ],
              autoStart: true,
              pauseFor: 5000,
              loop: true,
            }}
          />
        </div>

        <h3 className="my-2 text-gray-500">Junior Frontend Developer</h3>
        <p className="w-2/3 text-gray-400">
          I have a passion for creating and building websites and am constantly
          seeking new challenges and opportunities to expand my skills and
          knowledge
        </p>
        <Link type="button" href="/contact" className="border-1 bg-pink-300 hover:bg-pink2-cus hover:text-black p-2 rounded text-white my-5 shadow-lg">
          Contact me
        </Link>
        <Link type="button" className="ml-4 border-1 border-black p-2 shadow-lg hover:bg-pink1-cus hover:border-1 hover:text-white rounded " href="https://drive.google.com/file/d/1MbaO6RnL6GFetiYlpLGCfI2z86vd8RO4/view?usp=share_link">Download CV</Link>
      </div>
      <div className="flex-2 bg-pink1-cus mt-20 relative rounded-full w-96 h-96 xs:mr-5">
        {/* <Image src={shape} className=""/> */}
        <Image src={MyProfileImage} className="absolute bottom-0 right-0 left-0" />
      </div>
    </div>
  );
};

export default Information;
