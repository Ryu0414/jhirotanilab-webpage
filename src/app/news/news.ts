type NewsType = {
  date: string;
  description: string;
  id: number;
  imgPath: string;
  link: string;
};
const NEWS_LIST: NewsType[] = [
  {
    date: "December 11, 2024",
    description:
      "We won the Excellence Award at Academia Award in Semicon Japan 2024!",
    id: 8,
    link: "https://www.semiconjapan.org/jp/workforce/academia-award",
    imgPath: "/_images/20241211_semiconJapanAward.jpg",
  },
  {
    date: "December 10, 2024",
    description:
      "We will participate in SEMICON Japan at Tokyo International Exhibition Center from December 11 to 13.",
    id: 7,
    link: "",
    imgPath: "/_images/20241210_semiconJapan.jpg",
  },
  {
    date: "December 6, 2024",
    description:
      "We presented at the MATERIALS RESEARCH SOCIETY (MRS). The titles of presentations are 'Carbon Nanotube Thin Film PN Junction Diode with High Temperature Tolerance Using Chemical Dopants.' (Y. Matsunaga et al.), 'Estimation of Thermal Conductivity Measurement of Ti3C2Tx MXene Thin Film Using Frequency-Domain Thermoreflectance' (Y. Akura et al.) and 'A Highly Sensitive Flexible Humidity Sensor Based on Ti3C2Tx MXene/Bentonite Thin Film' (H. Morotomi et al.). Y. Matsunaga won the Best Poster Award!",
    id: 6,
    link: "",
    imgPath: "/_images/20241206_MRS.jpg",
  },
  {
    date: "November 19, 2024",
    description:
      "We participated in a plant tour of JX Advanced Metals Corporation.",
    id: 5,
    link: "",
    imgPath: "/_images/20241119_jx.JPG",
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
    date: "Octobar 31, 2024",
    description: "We participated in TECHINNOVATION 2024 in Singapore.",
    id: 3,
    link: "",
    imgPath: "/_images/20241031_singapore.JPG",
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
    date: "Octobar 1, 2024",
    description: "Webpage is renewed.",
    id: 1,
    link: "",
    imgPath: "/_images/news_logo.png",
  },
];

export default NEWS_LIST;
