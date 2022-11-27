import Gapon from "./Gapon";
import Viktoria from "./Vika";

const MainTeam = () => {
  return (
    <div className="bg-[#111111]" >
      <h1 className="text-center text-indigo-400 text-3xl pt-14">Team</h1>
      <div className="grid grid-cols-2 sm:grid-cols-1 pb-32 ">
        <Viktoria />
        <Gapon />
      </div>
    </div>
  );
};

export default MainTeam;
