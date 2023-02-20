import { BsFacebook, BsGithub, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <main className="flex lg:justify-between my-10 items-center lg:px-20 md:justify-center md:gap-10 xs:flex-wrap ">
      <div className="xs:ml-5">
        <p >
          © Power and Secure by <span className="underline">Tuon</span>
        </p>
      </div>
      <div className="flex gap-20 pr-20 md:pr-0 md:gap-10 xs:justify-center xs:mt-5 xs:ml-5">
        <div className="flex flex-col items-center">
          <p>Call</p>
          <p className="text-gray-500 tracking-wider">0984613026</p>
        </div>
        <div className="flex flex-col items-center">
          <p>Follow</p>
          <div className="flex justify-center mt-1 gap-5">
            <a className="text-xl text-gray-500" href="https://www.facebook.com/TuonNguyen1602/"><BsFacebook /></a>
            <a className="text-xl text-gray-500" href="https://github.com/tuon1602"><BsGithub/></a>
            <a className="text-xl text-gray-500" href="https://www.instagram.com/tuonnguyen_._/"><BsInstagram /></a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Footer;
