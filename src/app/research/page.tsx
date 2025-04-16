import Image, { StaticImageData } from "next/image";
import FDTRImage from "../_images/fdtr.jpeg";
import FlexibleImage from "../_images/flexible2.jpg";
import DeviceImage from "../_images/device.jpeg";
import BunnerImage from "../_images/JKA_bunner.gif";
import Bunner2Image from "../_images/JKA_banner2.png";
import Bunner3Image from "../_images/JKA_banner3.png";
import Link from "next/link";

export default function Research() {
  return (
    <div className="pt-20 flex flex-col items-center">
      <div className="w-5/6 md:w-2/3 flex flex-col md:gap-4 lg:gap-10">
        <div className="text-4xl font-bold self-center pt-10 md:pt-20">
          Research Topics
        </div>
        <div className="flex flex-col gap-8 md:gap-10 lg:gap-16 mt-4 md:mt-0">
          <div id="fdtr">
            <ResearchLi
              image={FDTRImage}
              title="Nanoscale and microscale thermal transport"
              details="When we pursue the highest performance of nano-electrical devices, it becomes crucial to manage the heat generation and dissipation, where thermal transport might be dominated by the thermal boundary resistance at the interfaces. We have explored nanoscale and microscale thermal transport by Raman thermal measurement and thermoreflectance technique with combinations of first-principle/molecular-dymanics calculations."
            />
          </div>
          <div id="flexible">
            <ResearchLi
              image={FlexibleImage}
              title="Flexible electronics"
              details="In recent years, flexible electronics have attracted considerable attention due to the wide range of potential applications, from flexible displays to wearable healthcare devices. For example. carbon nanotube thin-film transistors (CNT TFTs) are considered to be promising building blocks for flexible electronics because of their remarkable electrical and mechanical properties. In my research group, flexible device applications based on nanomaterials have been explored for future IoT and healthcare devices."
            />
          </div>
          <div id="device">
            <ResearchLi
              image={DeviceImage}
              title="Electronic and thermal devices for tissue engineering"
              details="As the field of tissue engineering advances, new tools for monitoring and evaluating of engineered tissues along with new biomaterials to direct tissue growth are needed. We use carbon nanotubes as an important tissue engineering material for improved tracking of cells, sensing of microenvironments, delivering of transfection agents, and scaffolding for incorporating with the host’s body. In addition, monitoring and alteringintra and intercellular processes would be useful for design of better engineered tissues. Since 2020, we have just started to make electronic and thermal device for creating and monitoring engineered tissue."
            />
          </div>
          {/* <div>
            <ResearchLi
              image={DeviceImage}
              title="Electronic and thermal devices for tissue engineering"
              details="details details details details details details details details details details details details details details details details details details details details details "
            />
          </div>
          <div>
            <ResearchLi
              image={DeviceImage}
              title="Electronic and thermal devices for tissue engineering"
              details="details details details details details details details details details details details details details details details details details details details details details "
            />
          </div> */}
        </div>
        <div className="mt-24 flex flex-col">
          <div className="text-2xl lg:text-4xl font-bold self-center">
            Acknowledgments
          </div>
          <div className="mt-2 md:mt-8 text-xl lg:text-3xl font-bold">
            Financial Supports
          </div>
          <div>
            <ul className="md:mt-4 list-disc pl-4 md:text-2xl md:space-y-2">
              <li>JSPS Grant-in-Aid for Scientific Research</li>
              <li>JST PRESTO</li>
              <li>NEDO</li>
              <li>JKA</li>
            </ul>
            <div className="md:mt-2">
              <span className="md:text-xl">etc.</span>
            </div>
          </div>
          <div className="flex flex-row gap-4 md:mt-4 w-full">
            {/* <Image src={BunnerImage} alt="バナー1" className="w-1/2 md:w-1/4" /> */}
            <Image
              src={Bunner2Image}
              alt="バナー2"
              className="w-1/2 md:w-1/4"
            />
            <Image
              src={Bunner3Image}
              alt="バナー3"
              className="w-1/2 md:w-1/4"
            />
          </div>
          <div className="mt-2 md:mt-5 md:text-xl">
            <Link
              className="hover:text-blue-500 underline"
              href="https://kdb.iimc.kyoto-u.ac.jp/profile_private/ja.021b7faef0586f89.html#display-items_research"
              target="_blank"
              rel="noreferrer noopener"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const ResearchLi = ({
  title,
  image,
  details,
}: {
  title: string;
  image: StaticImageData;
  details: string;
}) => {
  return (
    <>
      <div className="hidden lg:flex flex-col gap-6 mt-20">
        <div className="text-3xl font-bold">{title}</div>
        <div className="flex flex-row gap-8 items-center">
          <Image src={image} alt="" className="w-1/3" />
          <div className="text-justify">{details}</div>
        </div>
      </div>
      <div className="flex lg:hidden flex-col items-center gap-6 mt-8">
        <div className="text-2xl lg:text-3xl font-bold text-center">
          {title}
        </div>
        <Image src={image} alt="" className="w-full md:w-4/5" />
        <div className="text-justify lg:text-lg">{details}</div>
      </div>
    </>
  );
};
