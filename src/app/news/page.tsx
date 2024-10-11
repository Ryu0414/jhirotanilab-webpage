"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
type NewsType = {
  date: string;
  description: string;
  id: number;
  imgPath: string;
};

export default function News() {
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
      <div className="text-4xl font-bold self-center pt-20">News</div>
      <div className="w-2/3 flex flex-col gap-4 mt-20">
        <div className="flex flex-col gap-20 pl-4">
          {/* <NewsLi title="Akura Poyon received SUGOI Award." date="2024/10/3" />
          <NewsLi title="Akura Poyon received SUGOI Award." date="2024/10/2" />
          <NewsLi title="Akura Poyon received SUGOI Award." date="2024/10/1" /> */}
          {showingNewsList.map((news) => {
            return (
              <NewsLi
                key={news.id}
                date={news.date}
                title={news.description}
                id={news.id}
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
  id,
  imgPath,
}: {
  title: string;
  date: string;
  id: number;
  imgPath: string;
}) => {
  return (
    <div className="flex flex-row gap-10">
      <Image
        src={imgPath}
        alt={title}
        width={100}
        height={100}
        className="w-1/4"
      />
      <div className="flex flex-col gap-2 p-2 text-xl">
        <div>{date}</div>
        <div>
          {title}
          {id}
        </div>
      </div>
    </div>
  );
};

const NEWS_LIST: NewsType[] = [
  {
    date: "August 2024",
    description: "Akura Poyon received SUGOI",
    id: 1,
    imgPath: "/_images/device.jpeg",
  },
  {
    date: "August 2024",
    description: "Akura Poyon received SUGOI",
    id: 2,
    imgPath: "/_images/device.jpeg",
  },
  {
    date: "August 2024",
    description: "Akura Poyon received SUGOI",
    id: 3,
    imgPath: "/_images/device.jpeg",
  },
  {
    date: "August 2024",
    description: "Akura Poyon received SUGOI",
    id: 4,
    imgPath: "/_images/device.jpeg",
  },
  {
    date: "August 2024",
    description: "Akura Poyon received SUGOI",
    id: 5,
    imgPath: "/_images/device.jpeg",
  },
  {
    date: "August 2024",
    description: "Akura Poyon received SUGOI",
    id: 6,
    imgPath: "/_images/device.jpeg",
  },
  {
    date: "August 2024",
    description: "Akura Poyon received SUGOI",
    id: 7,
    imgPath: "/_images/device.jpeg",
  },
  {
    date: "August 2024",
    description: "Akura Poyon received SUGOI",
    id: 8,
    imgPath: "/_images/device.jpeg",
  },
  {
    date: "August 2024",
    description: "Akura Poyon received SUGOI",
    id: 9,
    imgPath: "/_images/device.jpeg",
  },
  {
    date: "August 2024",
    description: "Akura Poyon received SUGOI",
    id: 10,
    imgPath: "/_images/device.jpeg",
  },
  {
    date: "August 2024",
    description: "Akura Poyon received SUGOI",
    id: 11,
    imgPath: "/_images/device.jpeg",
  },
  {
    date: "August 2024",
    description: "Akura Poyon received SUGOI",
    id: 12,
    imgPath: "/_images/device.jpeg",
  },
  {
    date: "August 2024",
    description: "Akura Poyon received SUGOI",
    id: 13,
    imgPath: "/_images/device.jpeg",
  },
  {
    date: "August 2024",
    description: "Akura Poyon received SUGOI",
    id: 14,
    imgPath: "/_images/device.jpeg",
  },
  {
    date: "August 2024",
    description: "Akura Poyon received SUGOI",
    id: 15,
    imgPath: "/_images/device.jpeg",
  },
  {
    date: "August 2024",
    description: "Akura Poyon received SUGOI",
    id: 16,
    imgPath: "/_images/device.jpeg",
  },
  {
    date: "August 2024",
    description: "Akura Poyon received SUGOI",
    id: 17,
    imgPath: "/_images/device.jpeg",
  },
  {
    date: "August 2024",
    description: "Akura Poyon received SUGOI",
    id: 18,
    imgPath: "/_images/device.jpeg",
  },
  {
    date: "August 2024",
    description: "Akura Poyon received SUGOI",
    id: 19,
    imgPath: "/_images/device.jpeg",
  },
  {
    date: "August 2024",
    description: "Akura Poyon received SUGOI",
    id: 20,
    imgPath: "/_images/device.jpeg",
  },
  {
    date: "August 2024",
    description: "Akura Poyon received SUGOI",
    id: 21,
    imgPath: "/_images/device.jpeg",
  },
  {
    date: "August 2024",
    description: "Akura Poyon received SUGOI",
    id: 22,
    imgPath: "/_images/device.jpeg",
  },
  {
    date: "August 2024",
    description: "Akura Poyon received SUGOI",
    id: 23,
    imgPath: "/_images/device.jpeg",
  },
  {
    date: "August 2024",
    description: "Akura Poyon received SUGOI",
    id: 24,
    imgPath: "/_images/device.jpeg",
  },
  {
    date: "August 2024",
    description: "Akura Poyon received SUGOI",
    id: 25,
    imgPath: "/_images/device.jpeg",
  },
  {
    date: "August 2024",
    description: "Akura Poyon received SUGOI",
    id: 26,
    imgPath: "/_images/device.jpeg",
  },
];
