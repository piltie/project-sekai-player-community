import { Outlet } from "react-router-dom";
import logo from "../../assets/auth/auth-logo.png";
export default function AuthLayout() {
  return (
    <div className="overflow relative  flex h-[100vh] min-h-[50em]  flex-col  items-center  bg-white  bg-[length:100%] bg-no-repeat md:min-h-[40em] md:justify-center md:bg-[#d5dce4] md:bg-parallax">
      <div className="mt-8 flex w-full flex-col justify-between md:mt-0   md:h-[30em] md:w-[28em] ">
        <div>
          <img
            className="m-auto flex w-[90%] md:m-0 md:w-[15em] md:pb-[1em]"
            src={logo}
            alt="title-logo"
          />
        </div>
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-between bg-white  after:absolute  after:top-0 after:ml-[1em] after:mt-[1em] after:h-full  after:w-full after:border-r-[1em] after:border-b-[1em]  after:border-solid after:border-[#f965b1]  after:content-[] md:mt-0 md:items-stretch md:pb-[1em] md:after:content-['']">
          <Outlet />
        </div>
      </div>
      <p className="absolute bottom-4 w-[55%] text-center font-m-plus-1p text-[0.7em] md:left-4 md:text-left">
        © SEGA / © Colorful Palette Inc. / © Crypton Future Media, INC.
        www.piapro.net All rights reserved.
      </p>
    </div>
  );
}
