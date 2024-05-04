import { BsCompass } from "react-icons/bs";
import { AiOutlineAppstore } from "react-icons/ai";
import { PiPencilLine } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const MobileNavbar: React.FC = () => {
  return (
    <div className="fixed bottom-0 rounded-t-2xl h-[80px] bg-white w-full px-4  shadow-2xl">
      <div className="relative">
        <div className="absolute h-14 w-14 bg-orange-600 rounded-full flex items-center justify-center text-[45px] font-bold text-white pb-2 left-1/2 -top-6">
          +
        </div>
      </div>
      <div className="flex w-full justify-between items-center text-3xl text-slate-500 mt-5 ">
        <Link to={"/"}>
          <BsCompass />
        </Link>
        <Link to={"/category"}>
          <AiOutlineAppstore />
        </Link>
        <PiPencilLine />
        <FaRegUser />
      </div>
    </div>
  );
};

export default MobileNavbar;
