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
              details="details details details details details details details details details details details details details details details details details details details details details "
            />
          </div>
          <div id="flexible">
            <ResearchLi
              image={FlexibleImage}
              title="Flexible electronics"
              details="details details details details details details details details details details details details details details details details details details details details details "
            />
          </div>
          <div id="device">
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
