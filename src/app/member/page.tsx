import Image from "next/image";

export default function Member() {
  return (
    <div className="pt-20 flex flex-col items-center">
      <div className="text-4xl font-bold self-center pt-10 lg:pt-20">
        Member
      </div>
      <div className="w-5/6 lg:w-2/3 flex flex-col gap-6 lg:gap-6 mt-10 lg:mt-20 items-center">
        <div className="text-3xl font-bold">STAFF</div>
        <div className="flex flex-col lg:flex-row w-full items-center">
          <Image
            src={"/_images/hirotani-sensei.webp"}
            width={100}
            height={100}
            alt="Hirotani-sensei"
            className="w-full md:w-2/3 lg:w-1/2 p-10"
          />
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <p className="text-2xl lg:text-3xl font-bold">
                Jun Hirotani, Ph.D.
              </p>
              <p className="text-base lg:text-xl">
                Email: hirotani.jun.7v@kyoto-u.ac.jp
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xl lg:text-2xl">Associate Professor</p>
              <p className="text-base lg:text-lg">
                Department of Micro Engineering, Graduate School of Engineering,
                Kyoto University, JAPAN
              </p>
            </div>
            <div className="self-center lg:self-start">
              <Image
                src={"/_images/KU_logo.png"}
                width={200}
                height={100}
                alt="KU logo"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 mt-8 lg:mt-0">
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-2xl font-bold">EMPLOYMENT HISTORY</p>
            </div>
            <div>
              <ul className="list-disc pl-4 text-base lg:text-lg">
                <li>
                  PRESTO Researcher, Department of Strategic Basic Research,
                  Japan Science and Technology Agency, JAPAN (Dec. 2020 – Mar.
                  2024)
                </li>
                <li>
                  Assistant Professor, Department of Electrical Engineering,
                  Graduate School of Engineering, Nagoya University (Jan. 2016 –
                  Sep. 2021)
                </li>
                <li>
                  Postdoctoral Researcher, Department of Electrical Engineering,
                  Graduate School of Engineering, Nagoya University (Oct. 2014 –
                  Dec. 2015)
                </li>
                <li>
                  Engineer, Semiconductor Process R&D Division, DENSO
                  Cooperation (Apr. 2013 – Sep. 2014)
                </li>
                <li>
                  Research Fellow (DC1), Japan Society for the Promotion of
                  Science (Apr. 2011 – Mar. 2013)
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-2xl font-bold">EDUCATION</p>
            </div>
            <div>
              <ul className="list-disc pl-4 text-base lg:text-lg">
                <li>
                  Ph.D., Aeronautics and Astronautics, Kyushu University, JAPAN
                  (2013)
                </li>

                <li>
                  M.S., Aeronautics and Astronautics, Kyushu University, JAPAN
                  (2011)
                </li>
                <li>
                  B.E., Mechanical and Aerospace Engineering, Kyushu University,
                  JAPAN (2009)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
