import Link from "next/link";

const DownloadButton = () => {
  return (
    <Link type="button" className="ml-4 border-1 border-black p-2 shadow-lg hover:bg-pink1-cus hover:border-1 hover:text-white rounded " href="/">Download CV</Link>
  )
}

export default DownloadButton