import Image from "next/image";
import LogoImage from "./_images/Unknown.png";
// import nextConfig from "../../next.config.mjs";
// const BASE_PATH = nextConfig.basePath || "";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="font-bold text-3xl">Welcome to J.HIROTANI Webpage!!!</div>
      <Image src={LogoImage} alt="logo" className="w-1/2" />
    </div>
  );
}
