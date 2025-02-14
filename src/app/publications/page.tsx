"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import PUB_LIST, { PubType } from "../_data/publish";

export default function Publications() {
  const [selectingPage, setSelcetingPage] = useState(1);
  const totalPub = PUB_LIST.length;
  const [showingPubList, setShowingPubList] = useState<PubType[]>([]);
  const [pageNumberList, setPageNumberList] = useState<number[]>([]);
  const numberPerPage = 10;

  useEffect(() => {
    const tempList = [];
    if (totalPub % numberPerPage === 0) {
      for (let i = 1; i < Math.floor(totalPub / numberPerPage) + 1; i++) {
        tempList.push(i);
      }
    } else {
      for (let i = 1; i < Math.floor(totalPub / numberPerPage) + 2; i++) {
        tempList.push(i);
      }
    }
    setPageNumberList(tempList);
  }, []);

  useEffect(() => {
    setShowingPubList(
      PUB_LIST.slice(
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
          {showingPubList.map((pub) => {
            return (
              <PubLi
                key={pub.id}
                title={pub.title}
                link={pub.link}
                id={pub.id}
                publication={pub.publication}
                authors={pub.authors}
                detail={pub.detail}
              />
            );
          })}
        </div>
        <div className="flex flex-row items-center justify-center gap-10 mt-10 pt-2 pb-5">
          <div
            className={`${
              selectingPage === 1 || totalPub / numberPerPage <= 5
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
              totalPub / numberPerPage <= 5
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
