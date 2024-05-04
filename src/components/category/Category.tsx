import { useEffect, useState } from "react";
import { categories } from "../../utils/categories/categories";
import { ImageData } from "../../utils/types/types";
import Navbar from "../navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import MobileNavbar from "../mobileNavbar/MobileNavbar";

const Category: React.FC = () => {
  const [category, setCategory] = useState<string>("backgrounds");
  const [loading, setLoading] = useState<boolean>(false);
  const [categoryData, setCategoryData] = useState<ImageData[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, [category]);

  const getData = async () => {
    setLoading(true);
    const response = await fetch(
      `https://pixabay.com/api/?key=43710421-01fe7100b37aad5b2cc8bed3b&category=${category}`
    );
    const data = await response.json();
    console.log(data);
    console.log(data);
    setCategoryData(data.hits);
    setLoading(false);
  };

  return (
    <>
      <div className="hidden md:block">
        <Navbar />
      </div>
      <div className="md:hidden px-5 py-4">
        <button className="text-xl" onClick={() => navigate("/")}>
          <MdArrowBackIos />
        </button>
      </div>
      <div className="md:hidden block">
        <MobileNavbar />
      </div>
      <div className="flex md:flex-row flex-col p-5 sidebar">
        <ul className="min-w-[200px] px-2 py-4 md:py-0 flex md:flex-col gap-4 max-h-[85vh] overflow-x-auto sticky">
          {categories.map((c, i) => {
            return (
              <li
                key={i}
                onClick={() => setCategory(c)}
                className={`${
                  category === c ? "bg-slate-800 text-white" : ""
                } w-full text-start text-base font-semibold hover:bg-slate-400 p-2 rounded-2xl cursor-pointer`}
              >
                {c}
              </li>
            );
          })}
        </ul>
        <ul className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-2 w-full py-5 md:py-0 px-4 max-h-[85vh] overflow-y-auto">
          {categoryData.map((e) => (
            <Link key={e.id} to={`/image-details/${e.id}`}>
              <li className="">
                <img
                  src={e.largeImageURL}
                  className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-2xl object-cover bg-slate-700"
                />
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Category;
