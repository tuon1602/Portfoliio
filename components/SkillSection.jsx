import skills from "../data/skill";
import Square from "./square";
const SkillSection = () => {
  return (
    <div className="mx-96 mt-10 md:mx-10 xs:mx-0" >
      <span className="text-2xl tracking-widest xs:text-xl xs:px-5">Skills</span>
      {skills.map((item,index) => (
        <div key={index} className="bg-white flex flex-col gap-2 p-5 flex-wrap h-32 mt-10 drop-shadow-xl">
          <div><Square/><span>{item.id1}</span></div>
          <div><Square/><span>{item.id2}</span></div>
          <div><Square/><span>{item.id3}</span></div>
          <div><Square/><span>{item.id4}</span></div>
          <div><Square/><span>{item.id5}</span></div>
        </div>
      ))}
    </div>
  );
};

export default SkillSection;
