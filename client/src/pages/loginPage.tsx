import logo from "../assets/auth/kindpng_1230876.png";
import logoChibi from "../assets/auth/login-logo-chibi.png";

export default function AuthLayout() {
  return (
    <>
      <div className="w-full p-5">
        <h1>Login</h1>
      </div>

      <img
        className="fixed z-20 hidden w-[40%]  md:bottom-0 md:right-0 md:block"
        src={logo}
        alt="logo"
      />
      <img
        className="mt-[3em] block w-[50%] md:hidden"
        src={logoChibi}
        alt="logo-mobile"
      />
    </>
  );
}
