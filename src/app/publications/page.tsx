"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
type NewsType = {
  title: string;
  authors: string;
  publication: string;
  id: number;
  link: string;
  detail?: string;
};

export default function Publications() {
  const [selectingPage, setSelcetingPage] = useState(1);
  const totalNews = NEWS_LIST.length;
  const [showingNewsList, setShowingNewsList] = useState<NewsType[]>([]);
  const [pageNumberList, setPageNumberList] = useState<number[]>([]);
  const numberPerPage = 10;

  useEffect(() => {
    const tempList = [];
    if (totalNews % numberPerPage === 0) {
      for (let i = 1; i < Math.floor(totalNews / numberPerPage) + 1; i++) {
        tempList.push(i);
      }
    } else {
      for (let i = 1; i < Math.floor(totalNews / numberPerPage) + 2; i++) {
        tempList.push(i);
      }
    }
    setPageNumberList(tempList);
  }, []);

  useEffect(() => {
    setShowingNewsList(
      NEWS_LIST.slice(
        (selectingPage - 1) * numberPerPage,
        selectingPage * numberPerPage
      )
    );
  }, [selectingPage]);

  return (
    <div className="pt-20 flex flex-col items-center">
      <div className="text-4xl font-bold self-center pt-8 lg:pt-20">
        Publications
      </div>
      <div className="w-5/6 lg:w-2/3 flex flex-col gap-4 mt-8 lg:mt-20">
        <div className="flex flex-col gap-10 lg:gap-10 pl-4">
          {showingNewsList.map((news) => {
            return (
              <PubLi
                key={news.id}
                title={news.title}
                link={news.link}
                id={news.id}
                publication={news.publication}
                authors={news.authors}
                detail={news.detail}
              />
            );
          })}
        </div>
        <div className="flex flex-row items-center justify-center gap-10 mt-10 pt-2 pb-5">
          <div
            className={`${
              selectingPage === 1 || totalNews / numberPerPage <= 5
                ? "invisible"
                : "flex"
            }`}
          >
            <button onClick={() => setSelcetingPage(selectingPage - 1)}>
              {"<"}
            </button>
          </div>
          {pageNumberList
            .filter((item) => {
              if (selectingPage === 1 || selectingPage === 2) {
                return item <= 5;
              }
              if (
                selectingPage === pageNumberList.length - 1 ||
                selectingPage === pageNumberList.length
              ) {
                return (
                  item >= pageNumberList.length - 4 &&
                  item <= pageNumberList.length
                );
              }

              return item >= selectingPage - 2 && item <= selectingPage + 2;
            })
            .map((item) => {
              return (
                <button
                  type="button"
                  key={item}
                  className={`flex rounded-full w-8 h-8 items-center justify-center ${
                    item === selectingPage
                      ? "bg-blue-600 text-white"
                      : "hover:bg-blue-400 hover:text-white"
                  }`}
                  onClick={() => {
                    setSelcetingPage(item);
                  }}
                >
                  {item}
                </button>
              );
            })}
          <div
            className={`${
              selectingPage === pageNumberList.length ||
              totalNews / numberPerPage <= 5
                ? "invisible"
                : "flex"
            }`}
          >
            <button onClick={() => setSelcetingPage(selectingPage + 1)}>
              {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const PubLi = ({
  title,
  authors,
  link,
  publication,
  id,
  detail,
}: {
  title: string;
  authors: string;
  link: string;
  publication: string;
  id: number;
  detail?: string;
}) => {
  return (
    <>
      <div className="hidden md:flex flex-row gap-10 items-center">
        <div className="flex flex-col gap-2 p-2 text-lg">
          <Link
            className="text-xl font-bold hover:text-blue-500"
            href={link}
            target="_blank"
            rel="noreferrer noopener"
          >
            ({id}) {title}
          </Link>
          <div>{authors}</div>
          <div>{publication}</div>
          <div className="text-red-500 italic font-bold">{detail}</div>
        </div>
      </div>
      <div className="flex md:hidden flex-col gap-2 items-center">
        <Link className="text-lg font-bold hover:text-blue-500" href={link}>
          ({id}) {title}
        </Link>
        <div className="flex flex-col text-sm self-start">
          <div>{authors}</div>
          <div>{publication}</div>
          <div className="text-red-400 italic">{detail}</div>
        </div>
      </div>
    </>
  );
};

const NEWS_LIST: NewsType[] = [
  {
    title:
      "Frequency-domain thermoreflectance with beam offset without the spot distortion for accurate thermal conductivity measurement of anisotropic materials",
    authors:
      "Yuki Akura, Yasuaki Ikeda, Yuki Matsunaga, Masaki Shimofuri, Amit Banerjee, Toshiyuki Tsuchiya, Jun Hirotani",
    id: 42,
    link: "https://doi.org/10.1063/5.0237004",
    publication: "Review of Scientific Instruments, 96(1) 014902 (2025)",
    detail: "",
  },
  {
    title:
      "Flexible 3ω sensors on submicron-thick parylene substrates for thermal conductivity measurements of liquids and soft materials",
    authors:
      "Ryuto Yamasaki, Yuki Matsunaga, Yuki Akura, Masaki Shimofuri, Amit Banerjee, Toshiyuki Tsuchiya, Jun Hirotani",
    id: 41,
    link: "https://doi.org/10.1063/5.0239596",
    publication: "Applied Physics Letters, 126(1) 014101 (2025)",
    detail: "Selected as a cover article.",
  },
  {
    title:
      "Enhanced water adsorption properties of Ti3C2Tx MXene/bentonite thin films for highly sensitive humidity sensing",
    authors:
      "Hiroya Morotomi, Yuki Matsunaga, Lijun Liu, Hisashi Sugime, Jun Hirotani",
    id: 40,
    link: "https://doi.org/10.1063/5.0245810",
    publication: "AIP Advances, 14(12) 125123 (2024)",
    detail: "Selected as a featured article.",
  },
  {
    title:
      "Carbon nanotube thin film pn junction diode with high-temperature tolerance using chemical dopants",
    authors: "Yuki Matsunaga, Haruki Uchiyama, Haruka Omachi, Jun Hirotani",
    id: 39,
    link: "https://doi.org/10.35848/1347-4065/ad68e0",
    publication: "Japanese Journal of Applied Physics, 63(8) 080904 (2024)",
  },
  {
    title:
      "Evaluation of topological protection in kagome lattice-based thermal diffusion systems",
    authors: "K. Funayama, J. Hirotani, H. Tanaka",
    id: 38,
    link: "https://doi.org/10.1063/5.0214412",
    publication: "Applied Physics Letters, 124(23) (2024)",
  },
  {
    title:
      "Enhancing responsivity and detection limit in tunable nano-electromechanical system resonator mass sensors",
    authors: "Wei Yu, Amit Banerjee, Jun Hirotani, Toshiyuki Tsuchiya",
    id: 37,
    link: "https://doi.org/10.35848/1347-4065/ad2979",
    publication: "Japanese Journal of Applied Physics, 63(3) 03SP74 (2024)",
  },
  {
    title:
      "Selectable diffusion direction with topologically protected edge modes ",
    authors: "Keita Funayama, Jun Hirotani, Atsushi Miura, Hiroya Tanaka",
    id: 36,
    link: "https://doi.org/10.1038/s42005-023-01490-9",
    publication: "Communications Physics, 6(1) (2023)",
  },
  {
    title:
      "Achieving Ultrawide Tunability in Monolithically Fabricated Si Nanoresonator Devices ",
    authors:
      "Wei Yu, Yuma Ohara, Claude Meffan, Jun Hirotani, Amit Banerjee, Toshiyuki Tsuchiya",
    id: 35,
    link: "https://doi.org/10.1021/acs.nanolett.3c03164",
    publication: "Nano Letters, 23(24) 11517-11525 (2023)",
  },
  {
    title:
      "Robustness of quantum spin Hall effect-inspired edge modes depending on C6 symmetry in topological diffusion systems ",
    authors: "Keita Funayama, Jun Hirotani, Atsushi Miura, Hiroya Tanaka",
    id: 34,
    link: "https://doi.org/10.1063/5.0173487",
    publication: "Applied Physics Letters, 123(22) (2023)",
  },
  {
    title:
      "Numerical calculation of thermoreflectance coefficient of c-Si for wavelengths of 200–800 nm and temperatures of 300–500 K ",
    authors:
      "Masaki Shimofuri, Taichi Murakami, Shugo Miyake, Amit Banerjee, Jun Hirotani, Toshiyuki Tsuchiya",
    id: 33,
    link: "https://doi.org/10.35848/1347-4065/ad07f8",
    publication: "Japanese Journal of Applied Physics, 62(11) 112006 (2023)",
  },
  {
    title:
      "Artificial-intelligence-assisted mass fabrication of nanocantilevers from randomly positioned single carbon nanotubes",
    authors:
      "Yukihiro Tadokoro, Keita Funayama, Keisuke Kawano, Atsushi Miura, Jun Hirotani, Yutaka Ohno, Hiroya Tanaka",
    id: 32,
    link: "https://doi.org/10.1038/s41378-023-00507-1",
    publication: "Microsystems &amp; Nanoengineering, 9(1) (2023)",
  },
  {
    title:
      "Gap distance dependence on field emission at the nanogap between silicon cleavage surfaces",
    authors:
      "Yuki Akura, Masaki Shimofuri, Amit Banerjee, Jun Hirotani, Toshiyuki Tsuchiya",
    id: 31,
    link: "https://doi.org/10.1116/6.0002456",
    publication: "Journal of Vacuum Science & Technology B (2023)",
  },
  {
    title:
      "Fabrication of MXene transparent conductive films via transfer process",
    authors:
      "Yuki Shibata, Rie Suizu, Kunio Awaga, Jun Hirotani, Haruka Omachi",
    id: 30,
    link: "https://doi.org/10.35848/1882-0786/acbbb8",
    publication: "Applied Physics Express (2023)",
  },
  {
    title:
      "Highly temperature-tolerant p-type carbon nanotube transistor doped with 1,4,5,8,9,11-hexaazatriphenylenehexacarbonitrile",
    authors: "Yuki Matsunaga, Jun Hirotani, Haruka Omachi",
    id: 29,
    link: "https://doi.org/10.1063/5.0087868",
    publication: "AIP Advances, 12(4) 045322 (2022)",
  },
  {
    title:
      "Exfoliation of Al-Residual Multilayer MXene Using Tetramethylammonium Bases for Conductive Film Applications",
    authors:
      "Emi Saita, Masaki Iwata, Yuki Shibata, Yuki Matsunaga, Rie Suizu, Kunio Awaga, Jun Hirotani, Haruka Omachi",
    id: 28,
    link: "https://doi.org/10.3389/fchem.2022.841313",
    publication: "Frontiers in Chemistry, 10 (2022)",
  },
  {
    title:
      "Temperature dependence of Raman shift in defective single-walled carbon nanotubes",
    authors: "Masanori Endo, Haruki Uchiyama, Yutaka Ohno, Jun Hirotani",
    id: 27,
    link: "https://doi.org/10.35848/1882-0786/ac4678",
    publication: "APPLIED PHYSICS EXPRESS, 15(2) (2022)",
  },
  {
    title:
      "In-plane dual-electrode triboelectric nanogenerator based on differential surface functionalization",
    authors: "Masahiro Matsunaga, Jun Hirotani, Yutaka Ohno",
    id: 26,
    link: "https://doi.org/10.35848/1882-0786/ac4d07",
    publication: "APPLIED PHYSICS EXPRESS, 15(2) (2022)",
  },
  {
    title:
      "Application of Bayesian Super-Resolution to Spectroscopic Data for Precise Characterization of Spectral Peak Shape",
    authors: "Kota Tsujimori, Jun Hirotani, Shunta Harada",
    id: 25,
    link: "",
    publication: "JOURNAL OF ELECTRONIC MATERIALS, 51(2) 712-717 (2022)",
  },
  {
    title:
      "Carbon Nanotube-Based Nanomechanical Receiver for Digital Data Transfer ",
    authors:
      "Keita Funayama, Hiroya Tanaka, Jun Hirotani, Keiichi Shimaoka, Yutaka Ohno, Yukihiro Tadokoro",
    id: 24,
    link: "",
    publication: "ACS Applied Nano Materials, 4(12) 13041-13047 (2021)",
  },
  {
    title:
      "Dynamic Range Enhancement Via Linearized Output in Nanoelectromechanical Systems by Combining High-Order Harmonics",
    authors:
      "Keita Funayama, Hiroya Tanaka, Jun Hirotani, Keiichi Shimaoka, Yutaka Ohno, Yukihiro Tadokoro",
    id: 23,
    link: "",
    publication:
      "IEEE TRANSACTIONS ON CIRCUITS AND SYSTEMS II-EXPRESS BRIEFS, 68(10) 3251-3255 (2021)",
  },
  {
    title:
      "Vertical GaN-on-GaN nanowire Schottky barrier diodes by top-down fabrication approach",
    authors:
      "Yaqiang Liao, Tao Chen, Jia Wang, Yuto Ando, Wentao Cai, Xu Yang, Hirotaka Watanabe, Jun Hirotani, Atsushi Tanaka, Shugo Nitta, Yoshio Honda, Kevin J. Chen, Hiroshi Amano",
    id: 22,
    link: "https://doi.org/10.35848/1347-4065/ac06b5",
    publication: "JAPANESE JOURNAL OF APPLIED PHYSICS, 60(7) (2021)",
  },
  {
    title: "Tunable carbon nanotube diode with varying asymmetric geometry",
    authors:
      "Keita Funayama, Jun Hirotani, Atsushi Miura, Hiroya Tanaka, Yutaka Ohno, Yukihiro Tadokoro",
    id: 21,
    link: "https://doi.org/10.1063/5.0058300",
    publication: "AIP Advances, 11(7) 075212 (2021)",
  },
  {
    title:
      "Low-voltage carbon nanotube complementary electronics using chemical doping to tune the threshold voltage ",
    authors:
      "Fu Wen Tan, Jun Hirotani, Yoshiyuki Nonoguchi, Shigeru Kishimoto, Hiromichi Kataura, Yutaka Ohno",
    id: 20,
    link: "https://doi.org/10.35848/1882-0786/abe8aa",
    publication: "Applied Physics Express, 14(4) 045002 (2021)",
  },
  {
    title:
      "Cross-linking gelation of isomaltodextrin for the chromatographic separation of semiconducting carbon nanotubes",
    authors: "Yuki Matsunaga, Jun Hirotani, Yutaka Ohno, Haruka Omachi",
    id: 19,
    link: "https://gateway.webofknowledge.com/gateway/Gateway.cgi?GWVersion=2&SrcAuth=JSTA_CEL&SrcApp=J_Gate_JST&DestLinkType=FullRecord&KeyUT=WOS:000601128900001&DestApp=WOS_CPL",
    publication: "APPLIED PHYSICS EXPRESS, 14(1) (2021)",
  },
  {
    title:
      "Low-Voltage Operable and Strain-Insensitive Stretchable All-Carbon Nanotube Integrated Circuits with Local Strain Suppression Layer",
    authors:
      "Yuya Nishio, Jun Hirotani, Shigeru Kishimoto, Hiromichi Kataura, Yutaka Ohno",
    id: 18,
    link: "https://doi.org/10.1002/aelm.202000674",
    publication: "ADVANCED ELECTRONIC MATERIALS, 7(1) (2021)",
  },
  {
    title:
      "Fabrication of Carbon Nanotube Thin Films for Flexible Transistors by Using a Cross-Linked Amine Polymer",
    authors:
      "Matsumoto Kaisei, Ueno Kazuki, Hirotani Jun, Ohno Yutaka, Omachi Haruka",
    id: 17,
    link: "https://doi.org/10.1002/chem.202000228",
    publication: "CHEMISTRY-A EUROPEAN JOURNAL, 26(28) 6118-6121 (2020)",
  },
  {
    title:
      "High-output, transparent, stretchable triboelectric nanogenerator based on carbon nanotube thin film toward wearable energy harvesters",
    authors: "Masahiro Matsunaga, Jun Hirotani, Shigeru Kishimoto, Yutaka Ohno",
    id: 16,
    link: "https://doi.org/10.1016/j.nanoen.2019.104297",
    publication: "Nano Energy, 67 (2020)",
  },
  {
    title:
      "Stochastic optimal control to minimize the impact of manufacturing variations on nanomechanical systems",
    authors:
      "Yuji Ito, Keita Funayama, Jun Hirotani, Yutaka Ohno, Yukihiro Tadokoro",
    id: 15,
    link: "https://doi.org/10.1109/ACCESS.2019.2955697",
    publication: "IEEE Access, 7 171195-171205 (2019)",
  },
  {
    title:
      "Dependence of enhancement factor on electrode size for field emission current from carbon nanotube on silicon wafer",
    authors:
      "Funayama Keita, Tanaka Hiroya, Hirotani Jun, Shimaoka Keiichi, Ohno Yutaka, Tadokoro Yukihiro",
    id: 14,
    link: "https://doi.org/10.1088/1361-6528/ab33c8",
    publication: "NANOTECHNOLOGY, 30(42) 425201 (2019)",
  },
  {
    title:
      "Aqueous two-phase extraction of semiconducting single-wall carbon nanotubes with isomaltodextrin and thin-film transistor applications",
    authors:
      "Omachi Haruka, Komuro Tomohiko, Matsumoto Kaisei, Nakajima Minako, Watanabe Hikaru, Hirotani Jun, Ohno Yutaka, Shinohara Hisanori",
    id: 13,
    link: "https://doi.org/10.7567/1882-0786/ab369e",
    publication: "APPLIED PHYSICS EXPRESS, 12(9) (2019)",
  },
  {
    title: "Field emission from Carbon nanotube tip to planer electrode",
    authors:
      "Keita Funayama, Jun Hirotani, Keiichi Shimaoka, Hiroya Tanaka, Yutaka Ohno, Yukihiro Tadokoro",
    id: 12,
    link: "https://doi.org/10.1088/1361-6528/ab33c8",
    publication: "Nanotechnology, 30(42) (2019)",
  },
  {
    title:
      "Carbon Nanotube Thin Films for High-Performance Flexible Electronics Applications",
    authors: "Jun Hirotani, Yutaka Ohno",
    id: 11,
    link: "https://doi.org/10.1007/s41061-018-0227-y",
    publication: "TOPICS IN CURRENT CHEMISTRY, 377(1) (2019)",
  },
  {
    title:
      "Noise Modeling in Field Emission and Evaluation of the Nano-Receiver in Terms of Temperature",
    authors:
      "Funayama Keita, Tanaka Hiroya, Hirotani Jun, Shimaoka Keiichi, Ohno Yutaka, Tadokoro Yukihiro",
    id: 10,
    link: "https://doi.org/10.1109/ACCESS.2019.2913692",
    publication: "IEEE ACCESS, 7 57820-57828 (2019)",
  },
  {
    title:
      "Origins of the variability of the electrical characteristics of solution-processed carbon nanotube thin-film transistors and integrated circuits",
    authors: "Jun Hirotani, Shigeru Kishimoto, Yutaka Ohno",
    id: 9,
    link: "https://doi.org/10.1039/C8NA00184G",
    publication: "Nanoscale Advances, 636-642 (2019)",
  },
  {
    title:
      "Purification of 1.9-nm-diameter semiconducting single-wall carbon nanotubes by temperature-controlled gel-column chromatography and its application to thin-film transistor devices",
    authors:
      "Boanerges Thendie, Haruka Omachi, Jun Hirotani, Yutaka Ohno, Yasumitsu Miyata, Hisanori Shinohara",
    id: 8,
    link: "https://doi.org/10.7567/JJAP.56.065102",
    publication: "JAPANESE JOURNAL OF APPLIED PHYSICS, 56(6) (2017)",
  },
  {
    title:
      "Printed, short-channel, top-gate carbon nanotube thin-film transistors on flexible plastic film",
    authors:
      "Michihiko Maeda, Jun Hirotani, Ryotaro Matsui, Kentaro Higuchi, Shigeru Kishimoto, Takuya Tomura, Masafumi Takesue, Katsuhiko Hata, Yutaka Ohno",
    id: 7,
    link: "https://doi.org/10.7567/APEX.8.045102",
    publication: "APPLIED PHYSICS EXPRESS, 8(4) 5102 (2015)",
  },
  {
    title:
      "Experimental Study on Thermal Contact Resistance at the End of a Carbon Nanotube",
    authors: "J. Hirotani, T. Ikuta, K. Takahashi",
    id: 6,
    link: "https://doi.org/10.1007/s10765-011-1137-1",
    publication:
      "INTERNATIONAL JOURNAL OF THERMOPHYSICS, 34(12) 2351-2360 (2013)",
  },
  {
    title: "Carbon nanotube thermal probe for quantitative temperature sensing",
    authors:
      "Jun Hirotani, Juo Amano, Tatsuya Ikuta, Takashi Nishiyama, Koji Takahashi",
    id: 5,
    link: "https://doi.org/10.1016/j.sna.2013.04.038",
    publication: "SENSORS AND ACTUATORS A-PHYSICAL, 199(1) 1-8 (2013)",
  },
  {
    title:
      "Measuring the thermal boundary resistance of van der Waals contacts using an individual carbon nanotube",
    authors: "Jun Hirotani, Tatsuya Ikuta, Takashi Nishiyama, Koji Takahashi",
    id: 4,
    link: "https://doi.org/10.1088/0953-8984/25/2/025301",
    publication: "Journal of Physics Condensed Matter, 25(2) 5301 (2013)",
  },
  {
    title: "カーボンナノチューブプローブを用いた表面温度計測法",
    authors: "天野樹生, 廣谷潤, 生田竜也, 西山貴史, 高橋厚史",
    id: 3,
    link: "https://researchmap.jp/7000020868/published_papers/8277836",
    publication: "日本機械学会論文集（B編）, 79(799) 390-398 (2013)",
  },
  {
    title:
      "Thermal boundary resistance between the end of an individual carbon nanotube and a Au surface",
    authors: "Jun Hirotani, Tatsuya Ikuta, Takashi Nishiyama, Koji Takahashi",
    id: 2,
    link: "https://doi.org/10.1088/0957-4484/22/31/315702",
    publication: "NANOTECHNOLOGY, 22(31) 5702 (2011)",
  },
  {
    title: "カーボンナノチューブ‐固体間の界面熱抵抗に関する実験的研究",
    authors: "廣谷潤, 甲斐聡, 生田竜也, 高橋厚史",
    id: 1,
    link: "https://researchmap.jp/7000020868/published_papers/8277839",
    publication: "日本機械学会論文集（B編）, 76(769) 1412-1419 (2009)",
  },
];
