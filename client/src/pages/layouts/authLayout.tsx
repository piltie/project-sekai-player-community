import { Outlet } from "react-router-dom";
import logo from "../../assets/auth/auth-logo.png";
import miku from "../../assets/auth/kindpng_1230876.png";

// Icons
import { UserIcon } from "@heroicons/react/24/solid";
import { EyeIcon } from "@heroicons/react/24/solid";
import { EyeSlashIcon } from "@heroicons/react/24/solid";

export default function AuthLayout() {
  return (
    <div className="overflow relative   flex h-[100vh] min-h-[50em] flex-col  items-center  bg-[#d5dce4]	 bg-parallax   bg-[length:100%] bg-center bg-no-repeat md:min-h-[40em] md:justify-center">
      <div className="mt-8 flex w-full flex-col justify-between md:mt-0   md:h-[30em] md:w-[28em] ">
        <div>
          <img
            className="m-auto flex w-[90%] pb-[1em] md:m-0 md:w-[15em]"
            src={logo}
            alt="title-logo"
          />
        </div>
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-between border-r-[1em] border-solid border-[#d5dce4]  bg-white after:absolute  after:top-0  after:ml-[2em] after:mt-[1em] after:h-full after:w-full after:border-r-[1em]  after:border-b-[1em] after:border-solid after:border-[#f965b1]  after:content-[''] md:mt-0   md:items-stretch md:border-none md:pb-[1em] md:after:ml-[1em]">
          <Outlet />
        </div>
      </div>
      <img
        className="fixed bottom-0 right-0 z-20  hidden w-[40%] md:block "
        src={miku}
        alt="miku"
      />
      <p className="absolute bottom-4 w-[55%] text-center font-m-plus-1p text-[0.7em] md:left-4 md:text-left">
        <img className="m-auto  md:hidden" src={miku} alt="miku" />© SEGA / ©
        Colorful Palette Inc. / © Crypton Future Media, INC. www.piapro.net All
        rights reserved.
      </p>
    </div>
  );
}
