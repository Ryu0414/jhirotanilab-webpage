import Image, { StaticImageData } from "next/image";
import FDTRImage from "../_images/fdtr.jpeg";
import FlexibleImage from "../_images/flexible.jpeg";
import DeviceImage from "../_images/device.jpeg";

export default function Research() {
  return (
    <div className="pt-20 flex flex-col items-center">
      <div className="w-2/3 flex flex-col gap-10">
        <div className="text-4xl font-bold self-center pt-20">
          Research Topics
        </div>
        <div className="flex flex-col gap-16">
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
          <div>
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
    <div className="flex flex-row items-center gap-6 mt-20">
      <Image src={image} alt="" className="w-1/3" />
      <div className="flex flex-col">
        <div className="text-2xl font-bold">{title}</div>
        <div className="">{details}</div>
      </div>
    </div>
  );
};
