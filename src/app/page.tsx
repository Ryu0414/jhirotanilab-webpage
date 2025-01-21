"use client";
import Image, { StaticImageData } from "next/image";
import HeroImage from "./_images/fdtr.jpeg";
import LogoImage from "./_images/Unknown.png";
import FDTRImage from "./_images/fdtr.jpeg";
import FlexibleImage from "./_images/flexible2.jpg";
import DeviceImage from "./_images/device.jpeg";
import Link from "next/link";
import NEWS_LIST from "./news/news";

import { YouTubeEmbed } from "@next/third-parties/google";

// import { useEffect, useState } from "react";

// import nextConfig from "../../next.config.mjs";
// const BASE_PATH = nextConfig.basePath || "";

export default function Home() {
  // const imgPathList = [
  //   // "/_images/hero_image.jpeg",
  //   "/_images/fdtr.jpeg",
  //   "/_images/flexible3.jpg",
  //   "/_images/device.jpeg",
  // ];
  // const [imgCurrentIndex, setImgCurrentIndex] = useState(0);
  // const [isFading, setIsFading] = useState(false);

  // useEffect(() => {
  //   const slideImageInterval = setInterval(() => {
  //     setIsFading(true);
  //     setTimeout(() => {
  //       setImgCurrentIndex((prevIndex) => (prevIndex + 1) % imgPathList.length);
  //       setIsFading(false);
  //     }, 1000);
  //   }, 6000);
  //   return () => clearInterval(slideImageInterval);
  // }, []);

  return (
    <>
      <div className="relative h-[100vh] flex flex-col items-center bg-gray-500">
        <Image src={HeroImage} alt="logo" className="h-[100vh] object-cover" />
        {/* <Image
          src={imgPathList[imgCurrentIndex]}
          alt={`${imgCurrentIndex}`}
          width={1000}
          height={1000}
          className={`h-[100vh] object-cover w-full transition-opacity animate-fade duration-1000 ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        /> */}
        <div className="w-full lg:w-4/5 absolute top-1/2 -translate-y-1/2 text-7xl h-48 flex items-center justify-center">
          <Image src={LogoImage} alt="logo" className="w-3/4 animate-fade" />
        </div>
      </div>
      <div className="flex flex-col gap-10 md:gap-20 justify-center items-center">
        <div className="p-10 flex flex-col justify-center items-center gap-10">
          <div className="mt-10 text-2xl md:text-4xl lg:text-6xl text-center font-bold">
            Nanoscale Thermal Science
            <br />& Micro and Nanosystems
          </div>
          {/* <Image
            src={"/_images/fdtr.jpeg"}
            alt="hero"
            className="lg:w-1/2"
            width={1000}
            height={1000}
          /> */}
          <div className="hidden md:flex items-center">
            <YouTubeEmbed
              videoid="beeJIm58N10"
              height={400}
              width={700}
              params="controls=0"
            />
          </div>
          <div className="flex items-center md:hidden">
            <YouTubeEmbed
              videoid="beeJIm58N10"
              height={160}
              width={300}
              params="controls=0"
            />
          </div>
          <div className="lg:w-2/3 text-sm md:text-xl text-justify leading-5 md:leading-6">
            My research team is an interdisciplinary research group specializing
            in both the experimental characterization of energy transport in
            nanomaterials and device fabrication for micro and nanosystems. My
            research missions are to advance the fundamental understanding of
            multiscale energy transport and make a transformative impact on
            nanomaterial design and discovery for diverse applications such as
            for future high-efficient electronic and thermal devices. I really
            appreciate my great collaborators for greatful advices and sponsors
            for supporting my academic researches.
          </div>
        </div>
        <div className="w-5/6 lg:w-2/3 flex flex-col gap-6 md:gap-10">
          <div className="text-4xl font-bold">RESEARCH</div>
          <div className="flex flex-col gap-10 lg:gap-8">
            <ResearchLi
              image={FDTRImage}
              title="Nanoscale and microscale thermal transport"
              link="/research#fdtr"
            />
            <ResearchLi
              image={FlexibleImage}
              title="Flexible electronics"
              link="/research#flexible"
            />
            <ResearchLi
              image={DeviceImage}
              title="Electronic and thermal devices for tissue engineering"
              link="/research#device"
            />
          </div>
          <Link href={"/research"} className="text-xl self-center">
            <button className="btn btn-primary text-lg">Show More</button>
          </Link>
        </div>
        <div className="w-5/6 lg:w-2/3 flex flex-col gap-4">
          <div className="text-4xl font-bold">NEWS</div>
          <div className="flex flex-col gap-4 pl-4">
            {NEWS_LIST.slice(0, 3).map((news) => {
              return (
                <NewsLi
                  date={news.date}
                  title={news.description}
                  key={news.id}
                />
              );
            })}
          </div>
          <Link href={"/news"} className="text-xl self-center">
            <button className="btn btn-primary text-lg">Show More</button>
          </Link>
        </div>
      </div>
    </>
  );
}

const NewsLi = ({ title, date }: { title: string; date: string }) => {
  return (
    <div className="flex flex-col gap-2 p-2 text-xl">
      <div className="font-bold">{date}</div>
      <div>{title}</div>
    </div>
  );
};

const ResearchLi = ({
  title,
  image,
  link,
}: {
  title: string;
  image: StaticImageData;
  link: string;
}) => {
  return (
    <div className="flex flex-col lg:flex-row items-center text-center lg:text-start gap-4 lg:gap-6">
      <Image src={image} alt="" className="md:w-2/3 lg:w-1/3" />
      <div className="flex flex-col">
        <div className="text-2xl font-bold">{title}</div>
        <Link className="hover:text-blue-500" href={link}>
          show details
        </Link>
      </div>
    </div>
  );
};
