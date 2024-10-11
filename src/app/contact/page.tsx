import Link from "next/link";

export default function Contact() {
  return (
    <div className="pt-20 flex flex-col items-center">
      <div className="text-4xl font-bold self-center pt-20">
        Contact & Access Info.
      </div>
      <div className="w-2/3 flex flex-row gap-10 mt-20 items-center">
        <div className="w-1/2 flex flex-col items-center gap-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.9364981696035!2d135.67576527713268!3d34.98325530399305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6001072b7d143a45%3A0x7084e1068fb44a0!2z5Lqs6YO95aSn5a2mIOahguOCreODo-ODs-ODkeOCuSBDM-ajnw!5e0!3m2!1sja!2sjp!4v1728629761867!5m2!1sja!2sjp"
            height="450"
            loading="lazy"
            className="w-full"
          ></iframe>
          <Link
            className="btn btn-primary"
            href="https://www.t.kyoto-u.ac.jp/en/access/katsura?set_language=en"
          >
            Link to Detail Access Info.
          </Link>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col text-bold gap-2">
            <p>〒 615-8540</p>
            <p>
              Kyoto University, Katsura Campus, Bldg. No. C3, Room S14,
              Saikyo-Ku, Kyoto, JAPAN
            </p>
            <p>
              Department of Micro Engineering, Graduate School of Engineering,
              Kyoto University
            </p>
            <p>Nano/Microsystem Engineering laboratory</p>
            <p>TEL: (+81)-75-383-3691</p>
            <p>E-mail: hirotani.jun.7v@kyoto-u.ac.jp</p>
          </div>

          <div className="flex flex-col text-bold gap-2">
            <p>〒 615-8540</p>
            <p>京都市西京区京都大学桂C3棟c2S14室</p>
            <p>京都大学工学研究科マイクロエンジニアリング専攻</p>
            <p>ナノ・マイクロシステム工学研究室</p>
            <p>電話番号：075-383-3691</p>
            <p>メールアドレス：hirotani.jun.7v@kyoto-u.ac.jp</p>
          </div>
        </div>
      </div>
    </div>
  );
}
