import Square from "./square"
import language from "../data/langugage"
const LanguagueSection = () => {
  return (
    <div className="mt-10 mx-96 md:mx-10 xs:mx-0">
      <span className="text-2xl tracking-widest xs:text-xl xs:px-5">Languages</span>
      {language.map((item) => (
        <div className="bg-white flex flex-col gap-2 p-5 flex-wrap h-32 mt-10 drop-shadow-xl">
          <div><Square/><span>{item.primary}</span></div>
          <div><Square/><span>{item.proficient}</span></div>
          <div><Square/><span>{item.learning}</span></div>
        </div>
      ))}
    </div>
  )
}

export default LanguagueSection