import Header from "../components/Header";
import Footer from "../components/Footer";
import Square from "../components/square";
import DownloadButton from "../components/DownloadButton";
import Head from "next/head";
import experience from "../data/data";
import LanguagueSection from "../components/LanguagueSection";
import SkillSection from "../components/SkillSection";
import Link from "next/link";

const Resume = () => {
  return (
    <div className="">
      <Head>
        <title>Resume</title>
        <meta name="description" content="Created by Tuon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon-sm.png" />
      </Head>
      <Header />
      <main className="bg-pink1-cus py-32 xs:py-24 ">
        <div className="mx-96 md:mx-10 xs:mx-0">
          <div className="flex justify-center items-center">
            <Square />
            <span className="text-3xl tracking-widest font-bold xs:text-xl">Resume</span>
          </div>
          <div title="Experience" className="flex justify-between md:mt-10 xs:px-5 pt-3">
            <span className="text-2xl tracking-widest xs:text-xl">Experience</span>
            <Link
              type="button"
              className="bg-blue-cus text-white border-black p-2 shadow-lg hover:bg-white hover:border hover:text-black rounded-lg xs:py-2 "
              href="/"
            >
              Download CV
            </Link>
          </div>
          {experience.map((item,index) => (
            <div key={index} className="w-full bg-white mt-10 flex justify-center items-center drop-shadow-xl xs:flex-wrap ">
              <div className="flex-1 w-32 p-10 flex flex-col gap-1 xs:flex-none xs:w-full xs:px-5 xs:pb-5">
                <p className="text-blue-cus font-bold">{item.begin} - {item.end}</p>
                <p>Position: {item.job}</p>
                <p>Company: {item.company}</p>
              </div>
              <div className="flex-1 w-32 xs:flex-none xs:w-full xs:px-5">
                <p>{item.description}</p>
              </div>
            </div>
            ))}
        </div>
        <SkillSection/>
        <LanguagueSection/>
      </main>
      <Footer />
    </div>
  );
};

export default Resume;
