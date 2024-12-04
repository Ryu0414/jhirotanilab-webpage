type NewsType = {
  date: string;
  description: string;
  id: number;
  imgPath: string;
  link: string;
};
const NEWS_LIST: NewsType[] = [
  {
    date: "Octobar 1, 2024",
    description: "Webpage is renewed.",
    id: 1,
    link: "",
    imgPath: "/_images/device.jpeg",
  },
  {
    date: "Octobar 31, 2024",
    description:
      "We visited UC San Diego for 2024 UC San Diego×Kyoto University-KSAC Joint Symposium.",
    id: 2,
    link: "https://www.saci.kyoto-u.ac.jp/topics/news/16063.html",
    imgPath: "/_images/20241031_UCSD.JPG",
  },
  {
    date: "Octobar 31, 2024",
    description: "We participated in TECHINNOVATION 2024 in Singapore.",
    id: 3,
    link: "",
    imgPath: "/_images/20241031_singapore.JPG",
  },
  {
    date: "November 13, 2024",
    description:
      "We presented at the 34th International Symposium on Transport Phenomena (ISTP-34). The titles of presentations are 'Flexible Three-Omega Sensors Fabricated on Parylene Substrates' (R. Yamasaki et al.) and 'Estimation of Thermal Conductivity Profile in Depth Direction Using Machine Learning in Frequency Domain Thermoreflectance' (Y. Ikeda et al.).",
    id: 4,
    link: "",
    imgPath: "/_images/20241113_istp.JPG",
  },
  {
    date: "November 19, 2024",
    description:
      "We participated in a plant tour of JX Advanced Metals Corporation.",
    id: 5,
    link: "",
    imgPath: "/_images/20241119_jx.JPG",
  },
];

export default NEWS_LIST;
