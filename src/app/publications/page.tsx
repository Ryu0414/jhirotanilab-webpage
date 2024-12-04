"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
type NewsType = {
  title: string;
  authors: string;
  publication: string;
  id: number;
  link: string;
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
}: {
  title: string;
  authors: string;
  link: string;
  publication: string;
  id: number;
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
            {id}. {title}
          </Link>
          <div>{authors}</div>
          <div>{publication}</div>
        </div>
      </div>
      <div className="flex md:hidden flex-col gap-2 items-center">
        <Link className="text-lg font-bold hover:text-blue-500" href={link}>
          {title}
        </Link>
        <div className="flex flex-col text-sm">
          <div>{authors}</div>
          <div>{publication}</div>
        </div>
      </div>
    </>
  );
};

const NEWS_LIST: NewsType[] = [
  {
    title:
      "Carbon nanotube thin film pn junction diode with high-temperature tolerance using chemical dopants",
    authors: "Yuki Matsunaga, Haruki Uchiyama, Haruka Omachi, Jun Hirotani",
    id: 39,
    link: "https://doi.org/10.35848/1347-4065/ad68e0",
    publication:
      "Japanese Journal of Applied Physics, 63(8) 080904-080904 (2024)",
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
    publication:
      "Japanese Journal of Applied Physics, 63(3) 03SP74-03SP74 (2024)",
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
    publication:
      "Japanese Journal of Applied Physics, 62(11) 112006-112006 (2023)",
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
    publication: "AIP Advances, 12(4) 045322-045322 (2022)",
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
    id: 26,
    link: "https://doi.org/10.35848/1882-0786/ac4678",
    publication: "APPLIED PHYSICS EXPRESS, 15(2) (2022)",
  },
  {
    title:
      "In-plane dual-electrode triboelectric nanogenerator based on differential surface functionalization",
    authors: "Masahiro Matsunaga, Jun Hirotani, Yutaka Ohno",
    id: 25,
    link: "https://doi.org/10.35848/1882-0786/ac4d07",
    publication: "APPLIED PHYSICS EXPRESS, 15(2) (2022)",
  },
];
