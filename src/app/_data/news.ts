export type NewsType = {
  date: string; // 日付
  description: string; // 内容
  id: number; // id
  imgPath: string; // 写真のパス
  link: string; // リンク先
};

const NEWS_LIST: NewsType[] = [
  {
    date: "September 23, 2025",
    description:
      "We participated in The 35th International Symposium on Transport Phenomena at The Westin Josun Busan.",
    id: 21,
    link: "https://istp35.kr/",
    imgPath: "/_images/news/20250923_ISTP35.png",
  },
  {
    date: "August 18, 2025",
    description:
      "Our research paper was published in Applied Physics Letters. The title of research was 'Utilizing machine learning in the three-omega method to predict thermophysical properties with low variation ' (Y. Ikeda et al.).",
    id: 20,
    link: "https://doi.org/10.1063/5.0274238",
    imgPath: "/_images/news/20250818_ikeda_paper_cover.png",
  },
  {
    date: "August 8, 2025",
    description:
      "Our research paper was published in Review of Scientific Instruments. The title of research was 'Enhancing the precision of thermal conductivity measurement via transducer patterning in frequency-domain thermoreflectance' (Y. Akura et al.).",
    id: 19,
    link: "https://doi.org/10.1063/5.0272055",
    imgPath: "/_images/news/20250808_akura_paper_cover.jpg",
  },
  {
    date: "July 23, 2025",
    description:
      "Jun Hirotani gave an invited talk on thermal technologies at ICHIKEN lounge in the TECHNO-FRONTIER 2025.",
    id: 18,
    link: "https://www.youtube.com/watch?v=wlg_Dpe2JZo",
    imgPath: "/_images/news/20250723_ichiken.jpg",
  },
  {
    date: "May 14, 2025",
    description:
      "We participated in the 62nd National Heat Transfer Symposium/HTSJ International Heat Transfer Symposium at Okinawa Convention Center.",
    id: 17,
    link: "https://pub.confit.atlas.jp/ja/event/htsj2025",
    imgPath: "/_images/news/20250523_HSTJ.png",
  },
  {
    date: "March 26, 2025",
    description:
      "Jun Hirotani gave a pitch about creation of a global startup for solving thermal issues with high-performance thermal management products at KSAC DEMO DAY 2025.",
    id: 16,
    link: "https://ksac.site/next-pioneer-demoday2025/en/index.html",
    imgPath: "/_images/news/20250326_KSAC_demo_2025.png",
  },
  {
    date: "March 19, 2025",
    description:
      "Jun Hirotani gave an invited talk on thermal measurement technology at the 275th Special CMSM seminar in NIMS.",
    id: 15,
    link: "https://www.nims.go.jp/mmu/seminar/250319.html",
    imgPath: "/_images/news/20250319_CMSM_seminar_in_NIMS.png",
  },
  {
    date: "February 13, 2025",
    description:
      "Jun Hirotani presented an invited talk about the thermal management business at Deep Tech Forum Boston.",
    id: 14,
    link: "https://ksac.site/boston2025/",
    imgPath: "/_images/news/20250217_DeepTechForum_Boston.png",
  },
  {
    date: "February 6, 2025",
    description:
      "Our research paper was published in Journal of Applied Physics. The title of research was 'Estimating depth-directional thermal conductivity profiles using neural network with dropout in frequency-domain thermoreflectance' (Y. Ikeda et al.).",
    id: 13,
    link: "https://doi.org/10.1063/5.0248430",
    imgPath: "/_images/news/20250206_ikeda_paper_cover.jpg",
  },
  {
    date: "January 9, 2025",
    description:
      "Our research paper was published in Review of Scientific Instruments. The title of research was 'Frequency-domain thermoreflectance with beam offset without the spot distortion for accurate thermal conductivity measurement of anisotropic materials' (Y. Akura et al.).",
    id: 12,
    link: "https://doi.org/10.1063/5.0237004",
    imgPath: "/_images/news/20250109_akura_paper_cover.png",
  },
  {
    date: "January 2, 2025",
    description:
      "Our research paper was published in Applied Physics Letters. The title of research was 'Flexible 3ω sensors on submicron-thick parylene substrates for thermal conductivity measurements of liquids and soft materials' (R. Yamasaki et al.).",
    id: 11,
    link: "https://doi.org/10.1063/5.0239596",
    imgPath: "/_images/news/20250102_yama_paper_image.png",
  },
  {
    date: "December 18, 2024",
    description:
      "Our research paper was published in AIP Advances. The title of research was 'Enhanced water adsorption properties of Ti3C2Tx MXene/bentonite thin films for highly sensitive humidity sensing' (H. Morotomi et al.).",
    id: 10,
    link: "https://doi.org/10.1063/5.0245810",
    imgPath: "/_images/news/20241218_moromoro.jpg",
  },
  {
    date: "December 11, 2024",
    description:
      "We won the Excellence Award at Academia Award in Semicon Japan 2024!",
    id: 9,
    link: "https://www.semiconjapan.org/jp/workforce/academia-award",
    imgPath: "/_images/news/20241211_semiconJapanAward.jpg",
  },
  {
    date: "December 10, 2024",
    description:
      "We participated in SEMICON Japan at Tokyo International Exhibition Center from December 11 to 13.",
    id: 8,
    link: "",
    imgPath: "/_images/news/20241210_semiconJapan.jpg",
  },
  {
    date: "December 6, 2024",
    description:
      "We presented at the MATERIALS RESEARCH SOCIETY (MRS). The titles of presentations were 'Carbon Nanotube Thin Film PN Junction Diode with High Temperature Tolerance Using Chemical Dopants.' (Y. Matsunaga et al.), 'Estimation of Thermal Conductivity Measurement of Ti3C2Tx MXene Thin Film Using Frequency-Domain Thermoreflectance' (Y. Akura et al.) and 'A Highly Sensitive Flexible Humidity Sensor Based on Ti3C2Tx MXene/Bentonite Thin Film' (H. Morotomi et al.).",
    id: 7,
    link: "",
    imgPath: "/_images/news/20241206_MRS.jpg",
  },
  {
    date: "November 19, 2024",
    description:
      "We participated in a plant tour of JX Advanced Metals Corporation.",
    id: 6,
    link: "",
    imgPath: "/_images/news/20241119_jx.JPG",
  },
  {
    date: "November 15, 2024",
    description:
      "We gave an invited talk on thermal management business at DEEPTECH KANSAI.",
    id: 5,
    link: "https://osaka-startup.com/deeptech/",
    imgPath: "/_images/news/20241115_KANSAI.png",
  },
  {
    date: "November 13, 2024",
    description:
      "We presented at the 34th International Symposium on Transport Phenomena (ISTP-34). The titles of presentations were 'Flexible Three-Omega Sensors Fabricated on Parylene Substrates' (R. Yamasaki et al.) and 'Estimation of Thermal Conductivity Profile in Depth Direction Using Machine Learning in Frequency Domain Thermoreflectance' (Y. Ikeda et al.).",
    id: 4,
    link: "",
    imgPath: "/_images/news/20241113_istp.JPG",
  },
  {
    date: "Octobar 31, 2024",
    description: "We participated in TECHINNOVATION 2024 in Singapore.",
    id: 3,
    link: "",
    imgPath: "/_images/news/20241031_singapore.JPG",
  },
  {
    date: "Octobar 14, 2024",
    description:
      "We visited UC San Diego for 2024 UC San Diego×Kyoto University-KSAC Joint Symposium.",
    id: 2,
    link: "https://www.saci.kyoto-u.ac.jp/topics/news/16063.html",
    imgPath: "/_images/news/20241031_UCSD.JPG",
  },
  {
    date: "Octobar 1, 2024",
    description: "Webpage was renewed.",
    id: 1,
    link: "",
    imgPath: "/_images/news/news_logo.png",
  },
];

export default NEWS_LIST;
