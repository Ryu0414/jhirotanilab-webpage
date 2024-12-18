"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NEWS_LIST from "./news";
type NewsType = {
  date: string;
  description: string;
  id: number;
  imgPath: string;
  link: string;
};

export default function News() {
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
      <div className="text-4xl font-bold self-center pt-10 lg:pt-20">News</div>
      <div className="w-5/6 lg:w-2/3 flex flex-col gap-4 mt-10 lg:mt-20">
        <div className="flex flex-col gap-8 lg:gap-20 lg:pl-4">
          {showingNewsList.map((news) => {
            return (
              <NewsLi
                key={news.id}
                date={news.date}
                title={news.description}
                link={news.link}
                imgPath={news.imgPath}
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

const NewsLi = ({
  title,
  date,
  imgPath,
  link,
}: {
  title: string;
  date: string;
  imgPath: string;
  link: string;
}) => {
  return (
    <>
      <div className="hidden lg:flex flex-row gap-10">
        <div className="w-1/3">
          <Image
            src={imgPath}
            alt={title}
            width={200}
            height={200}
            className="w-full"
          />
        </div>
        <div className="flex flex-col gap-2 p-2 text-xl w-2/3">
          <div className="font-bold">{date}</div>
          <div className="text-justify">{title}</div>
          {link !== "" && (
            <Link
              href={link}
              className="underline"
              target="_blank"
              rel="noreferrer noopener"
            >
              Detail
            </Link>
          )}
        </div>
      </div>
      <div className="lg:hidden flex flex-col gap-2">
        <div className="flex flex-col gap-2 text-sm md:text-lg w-full">
          <div className="font-bold">{date}</div>
          <div className="text-justify">{title}</div>
          {link !== "" && (
            <Link
              href={link}
              className="underline"
              target="_blank"
              rel="noreferrer noopener"
            >
              Detail
            </Link>
          )}
        </div>
        <div className="self-center w-2/3">
          {imgPath !== "" && (
            <Image
              src={imgPath}
              alt={title}
              width={200}
              height={200}
              className="w-full"
            />
          )}
          {/* {imgPath === "" && (
            <Image
              src="/_images/news_logo.png"
              alt={title}
              width={200}
              height={200}
              className="w-full"
            />
          )} */}
        </div>
      </div>
    </>
  );
};

// const NEWS_LIST: NewsType[] = [
//   {
//     date: "Octobar 1, 2024",
//     description: "Webpage is renewed.",
//     id: 1,
//     link: "",
//     imgPath: "/_images/device.jpeg",
//   },
//   {
//     date: "Octobar 31, 2024",
//     description:
//       "We visited UC San Diego for 2024 UC San Diego×Kyoto University-KSAC Joint Symposium.",
//     id: 2,
//     link: "https://www.saci.kyoto-u.ac.jp/topics/news/16063.html",
//     imgPath: "/_images/20241031_UCSD.JPG",
//   },
//   {
//     date: "Octobar 31, 2024",
//     description: "We participated in TECHINNOVATION 2024 in Singapore.",
//     id: 3,
//     link: "",
//     imgPath: "/_images/20241031_singapore.JPG",
//   },
//   {
//     date: "November 13, 2024",
//     description:
//       "We presented at the 34th International Symposium on Transport Phenomena (ISTP-34). The titles of presentations are 'Flexible Three-Omega Sensors Fabricated on Parylene Substrates' (R. Yamasaki et al.) and 'Estimation of Thermal Conductivity Profile in Depth Direction Using Machine Learning in Frequency Domain Thermoreflectance' (Y. Ikeda et al.).",
//     id: 4,
//     link: "",
//     imgPath: "/_images/20241113_istp.JPG",
//   },
//   {
//     date: "November 19, 2024",
//     description:
//       "We participated in a plant tour of JX Advanced Metals Corporation.",
//     id: 5,
//     link: "",
//     imgPath: "/_images/20241119_jx.JPG",
//   },
// ];

// export default NEWS_LIST;
