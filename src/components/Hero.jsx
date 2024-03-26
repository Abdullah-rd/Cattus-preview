import Maind from "../assets/main-pic.png";

export default function Hero() {
  return (
    <div className="flex flex-row flex-wrap md:pl-10 py-20 justify-center md:mr-auto md:mt-0 lg:justify-between lg:items-center lg:py-0 ">
      <div className="left flex flex-col  text-center lg:text-left max-w-[80%] lg:max-w-[50%]">
        <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-none">Bienvenu dans Cattus</h1>
        <h2 className="text-base-content/70 font-title py-4 font-light md:text-lg xl:text-2xl  ">
          platforme qui vise à faciliter l&apos;adoption responsable d&apos;animaux de compagnie et beaucoup Autre chose
        </h2>
        <div className="flex gap-5 grid-rows-1 grid-cols-1 mt-5 justify-center lg:justify-normal">
          <button className="btn btn-primary w-25 lg:w-40 flex justify-between px-4 group ">
            Devenir client
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 transition-transform ease-in-out delay-75 group-hover:translate-x-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
          <button className="btn btn-outline">Autre types</button>
        </div>
      </div>

      <div className="right bg-primary max-w-[80%] mt-10  lg:w-[50%] lg:mt-0">
        <img className=" object-contain lg:block" src={Maind} alt="" />
      </div>
    </div>
  );
}
