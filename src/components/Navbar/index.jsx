import NavLayout from "../../layouts/NavLayout";
import { FiSearch } from "react-icons/fi";
import Button from "../common/Button";
const Navbar = () => {
  return (
    <NavLayout>
      <div>
        <figure>
          <img width="190" src="src/assets/pronature-logo.svg" alt="" />
        </figure>
      </div>
      <div className="flex gap-x-[40px] items-center">
        <div className="flex gap-x-[20px] font-medium">
          <a href="">Resources</a>
          <a href="">Home</a>
          <a href="">About us</a>
          <a href="">Our works</a>
        </div>
        <div className="flex gap-x-[20px] items-center">
          <h1 className="text-2xl">
            <FiSearch />
          </h1>
          <Button
            className="bg-black rounded-xl flex items-center justify-center py-3 px-5 font-normal text-white"
            text="Request a demo"
          />
        </div>
      </div>
    </NavLayout>
  );
};

export default Navbar;
