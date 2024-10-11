"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
type NewsType = {
  title: string;
  authors: string;
  publication: string;
  id: number;
  link: string;
  imgPath: string;
};

export default function Publications() {
  const [selectingPage, setSelcetingPage] = useState(1);
  const [totalNews, SetTotalNews] = useState(NEWS_LIST.length);
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
      <div className="text-4xl font-bold self-center pt-20">Publications</div>
      <div className="w-2/3 flex flex-col gap-4 mt-20">
        <div className="flex flex-col gap-20 pl-4">
          {/* <NewsLi title="Akura Poyon received SUGOI Award." date="2024/10/3" />
          <NewsLi title="Akura Poyon received SUGOI Award." date="2024/10/2" />
          <NewsLi title="Akura Poyon received SUGOI Award." date="2024/10/1" /> */}
          {showingNewsList.map((news) => {
            return (
              <PubLi
                key={news.id}
                title={news.title}
                link={news.link}
                imgPath="/_images/device.jpeg"
                publication={news.publication}
                authors={news.authors}
              />
            );
          })}
        </div>
        <div className="flex flex-row items-center justify-center gap-10 pt-2 pb-5">
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
  imgPath,
}: {
  title: string;
  authors: string;
  link: string;
  publication: string;
  imgPath: string;
}) => {
  return (
    <div className="flex flex-row gap-10 items-center">
      <Image
        src={imgPath}
        alt={title}
        width={100}
        height={100}
        className="w-1/2"
      />
      <div className="flex flex-col gap-2 p-2 text-lg">
        <Link className="text-xl font-bold hover:text-blue-500" href={link}>
          {title}
        </Link>
        <div>{authors}</div>
        <div>{publication}</div>
      </div>
    </div>
  );
};

const NEWS_LIST: NewsType[] = [
  {
    title:
      "Highly temperature-tolerant p-type carbon nanotube transistor doped with 1,4,5,8,9,11-hexaazatriphenylenehexacarbonitrile",
    authors: "Yuki Matsunaga, Jun Hirotani, Haruka Omachi",
    id: 1,
    link: "https://pubs.aip.org/aip/adv/article/12/4/045322/2819500/Highly-temperature-tolerant-p-type-carbon-nanotube",
    publication: "AIP advances, 12, 045322-045322 (2022)",
    imgPath: "/_images/device.jpeg",
  },
  {
    title:
      "Highly temperature-tolerant p-type carbon nanotube transistor doped with 1,4,5,8,9,11-hexaazatriphenylenehexacarbonitrile",
    authors: "Yuki Matsunaga, Jun Hirotani, Haruka Omachi",
    id: 1,
    link: "https://pubs.aip.org/aip/adv/article/12/4/045322/2819500/Highly-temperature-tolerant-p-type-carbon-nanotube",
    publication: "AIP advances, 12, 045322-045322 (2022)",
    imgPath: "/_images/device.jpeg",
  },
  {
    title:
      "Highly temperature-tolerant p-type carbon nanotube transistor doped with 1,4,5,8,9,11-hexaazatriphenylenehexacarbonitrile",
    authors: "Yuki Matsunaga, Jun Hirotani, Haruka Omachi",
    id: 1,
    link: "https://pubs.aip.org/aip/adv/article/12/4/045322/2819500/Highly-temperature-tolerant-p-type-carbon-nanotube",
    publication: "AIP advances, 12, 045322-045322 (2022)",
    imgPath: "/_images/device.jpeg",
  },
  {
    title:
      "Highly temperature-tolerant p-type carbon nanotube transistor doped with 1,4,5,8,9,11-hexaazatriphenylenehexacarbonitrile",
    authors: "Yuki Matsunaga, Jun Hirotani, Haruka Omachi",
    id: 1,
    link: "https://pubs.aip.org/aip/adv/article/12/4/045322/2819500/Highly-temperature-tolerant-p-type-carbon-nanotube",
    publication: "AIP advances, 12, 045322-045322 (2022)",
    imgPath: "/_images/device.jpeg",
  },
  {
    title:
      "Highly temperature-tolerant p-type carbon nanotube transistor doped with 1,4,5,8,9,11-hexaazatriphenylenehexacarbonitrile",
    authors: "Yuki Matsunaga, Jun Hirotani, Haruka Omachi",
    id: 1,
    link: "https://pubs.aip.org/aip/adv/article/12/4/045322/2819500/Highly-temperature-tolerant-p-type-carbon-nanotube",
    publication: "AIP advances, 12, 045322-045322 (2022)",
    imgPath: "/_images/device.jpeg",
  },
];
