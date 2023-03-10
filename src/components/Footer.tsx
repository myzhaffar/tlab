import Image from "next/image";
import Link from "next/link";

const footerCompany = [
  { text: "About", url: "/" },
  { text: "Career", url: "/" },
  { text: "Clients", url: "/" },
  { text: "Logo", url: "/" },
  { text: "Brand Identity", url: "/" },
  { text: "Article", url: "/" },
  { text: "Studi Kasus", url: "/" },
  { text: "Kontak", url: "/" },
];

const footerLayanan = [
  { text: "IT Managed Services", url: "/" },
  { text: "IT Consultant", url: "/" },
  { text: "IT Training", url: "/" },
  { text: "Big Data", url: "/" },
  { text: "Artificial Intelligent", url: "/" },
  { text: "Cloud Computing", url: "/" },
  { text: "Internet of Things", url: "/" },
  { text: "Web Developmnet", url: "/" },
  { text: "Mobile App Developmnet", url: "/" },
  { text: "System Integration", url: "/" },
  { text: "System Information", url: "/" },
];

export default function Footer() {
  return (
    <footer
      className="flex w-screen md:w-[1596px] h-auto md:h-[1002px] -px-[223px] py-[4px] bg-no-repeat"
      style={{ backgroundImage: "url(" + "/img/background2.svg" + ")" }}
    >
      <div className="flex flex-col md:flex-row gap-10 md:gap-20 justify-around px-3 md:px-[120px] py-[80px]">
        <div className="text-center md:text-start">
          <p className="font-bold text-[32px] text-[#5A5A5A] mb-4 ">
            Tlab Amazing
            <br />
            Delivering Innovation
          </p>
          <div className="flex gap-5 mb-8 justify-center md:justify-start">
            <a href="" target="blank">
              <div className="relative w-[24px] h-[24px] mx-auto">
                <Image
                  src={"/icon/Facebook.svg"}
                  alt=""
                  fill
                  style={{ objectFit: "fill" }}
                />
              </div>
            </a>
            <a href="https://www.instagram.com/tlabamazing/" target="blank">
              <div className="relative w-[24px] h-[24px] mx-auto">
                <Image
                  src={"/icon/Instagram.svg"}
                  alt=""
                  fill
                  style={{ objectFit: "fill" }}
                />
              </div>
            </a>
            <a href="" target="blank">
              <div className="relative w-[24px] h-[24px] mx-auto">
                <Image
                  src={"/icon/YouTube.svg"}
                  alt=""
                  fill
                  style={{ objectFit: "fill" }}
                />
              </div>
            </a>
          </div>
          <p className="text-[11px] font-nunito">
            2010-2021 © Tlab. All rights reserved
          </p>
        </div>

        <div>
          <div className="text-[#848d95] flex flex-col items-center md:items-start gap-4">
            <h2 className="text-[14px] text-[#bbc0c4] font-bold my-3">
              Company
            </h2>
            {footerCompany.map((v, i) => (
              <Link href={v.url} className="font-nunito" key={i}>
                {v.text}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="text-[#848d95] flex flex-col items-center md:items-start gap-4">
            <h2 className="text-[14px] text-[#bbc0c4] font-bold my-3">
              Layanan
            </h2>
            {footerLayanan.map((v, i) => (
              <Link href={v.url} className="font-nunito" key={i}>
                {v.text}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="text-[#848d95] md:max-w-[244px] flex flex-col gap-4 text-center md:text-start">
            <h2 className="text-[14px] text-[#bbc0c4] font-bold my-3">
              Kontak
            </h2>
            <h2 className="text-base font-bold text-[#5A5A5A] mb-10">
              PT. Teknologi Kode Indonesia contact@tlab.co.id
            </h2>
            <div className="font-nunito space-y-8">
              <div>
                <p>Head Office</p>
                <p>
                  {" "}
                  Jl Tanjung No.126, Sorosutan,
                  <br /> Umbulharjo,
                </p>
                <p>Yogyakarta - 55162</p>
                <div className="flex justify-center md:justify-start gap-2 mt-5">
                  <div className="relative w-5 h-5 ">
                    <Image
                      src={"/icon/phone.svg"}
                      alt=""
                      fill
                      style={{ objectFit: "fill" }}
                    />
                  </div>
                  <p>(0274)-2870394</p>
                </div>
              </div>
              <div>
                <p>Jakarta Office</p>
                <p>
                  {" "}
                  SOHO Pancoran Unit S-1210 Jl. Let. Jend. MT. Haryono Kav 2-3
                  Pancoran,
                </p>
                <p>Jakarta Selatan 12810</p>
                <div className="flex justify-center md:justify-start gap-2 mt-5">
                  <div className="relative w-5 h-5 ">
                    <Image
                      src={"/icon/phone.svg"}
                      alt=""
                      fill
                      style={{ objectFit: "fill" }}
                    />
                  </div>
                  <p>(0274)-2870394</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
