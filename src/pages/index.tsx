import DefaultLayout from "@/components/DefaultLayout";
import Image from "next/image";

const ourPartner = [
  { img: "/icon/Rectangle 28.svg" },
  { img: "/icon/Rectangle 29.svg" },
  { img: "/icon/Rectangle 30.svg" },
  { img: "/icon/Rectangle 31.svg" },
  { img: "/icon/Rectangle 32.svg" },
  { img: "/icon/Rectangle 33.svg" },
  { img: "/icon/Rectangle 34.svg" },
  { img: "/icon/Rectangle 35.svg" },
  { img: "/icon/Rectangle 36.svg" },
  { img: "/icon/Rectangle 37.svg" },
  { img: "/icon/Rectangle 38.svg" },
  { img: "/icon/Rectangle 39.svg" },
];
const testimonials = [
  {
    desc: "Our experience tells us it's better this way. Not only because it is more efficient – the outcome is simply much better.",
    class: "bg-[#049CFB]",
    img: "assets-testimonial 1.svg",
  },
  {
    desc: "Sejak akhir 2012, mulai dari konsep POS sederhana. Terus berkembang memenuhi kebutuhan. Dengan Tlab sistem dapat bertumbuh sesuai kebutuhan.",
    class: "bg-[#5449D6]",
    img: "assets-testimonial 2.svg",
  },
  {
    desc: "Kreativitas, tanggung jawab, serta komunikasi yang andal menjadi kunci kelancaran kerjasama kami bersama TLab dalam membangun aplikasi Anterin.",
    class: "bg-[#00DE9C]",
    img: "assets-testimonial 3.svg",
  },
];

export default function Home() {
  return (
    <DefaultLayout>
      <section id="1">
        <div className="text-center px-3 md:px-[265] py-5 md:py-[117px] md:w-[908px] md:h-[828px] mx-auto">
          <h1 className="font-bold text-3xl md:text-5xl text-[#5A5A5A]">
            Dapatkan solusi digital terbaik untuk mengembangkan bisnis Anda
          </h1>
          <p className="text-2xl text-[#5A5A5A] my-14">
            Jadikan bisnis semakin berkembang dengan pemilihan teknologi yang
            tepat dan andal
          </p>

          <div className="relative w-full md:w-[907.96px] z-0 h-[20rem] md:h-[533px] mx-auto">
            <Image
              src={"/img/Openess.svg"}
              alt=""
              fill
              style={{ objectFit: "fill" }}
            />
          </div>
        </div>
      </section>

      <section id="2">
        <div className="flex flex-col md:flex-row gap-10 px-3 md:px-[120px]  md:pt-[200px]">
          <div className="flex flex-col gap-8">
            <h2 className="font-bold text-[32px] text-[#5A5A5A]">
              Rangkaian Proyek <br />
              Menarik TLab
            </h2>
            <p className="font-nunito text-base text-[#5A5A5A]">
              Integritas dan kreativitas menjadi kunci dalam membangun produk
              digital <br />
              terbaik untuk bisnis Anda
            </p>
            <div className="flex gap-3 items-center">
              <p className="font-bold text-base text-[#5449D6]">
                Lihat Semua Layanan TLab
              </p>
              <div className="relative w-[16px] h-[16px]">
                <Image
                  src={"/icon/diagonal-arrow-right-up-outline.svg"}
                  alt=""
                  fill
                  style={{ objectFit: "fill" }}
                />
              </div>
            </div>

            <div className="relative w-full md:w-[685px] h-[457px]">
              <div>
                <div className="absolute z-10 bottom-0 bg-white inline-flex flex-col space-y-2 items-start justify-center p-6 rounded-tr-lg rounded-bl-lg md:w-[446.24px] h-[217.82px]">
                  <h2 className="text-sm text-[#5A5A5A] font-bold">
                    IT Managed Services
                  </h2>
                  <p className="text-2xl text-[#5A5A5A] font-bold">
                    kesan.id - Kedaulatan Santri dan Kepribadian Muslim
                  </p>
                </div>

                <div className="relative w-full md:w-[685px] h-[200px] md:h-[457px]">
                  <Image
                    src={"/img/card__cover 1.svg"}
                    alt=""
                    fill
                    style={{ objectFit: "fill" }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="relative w-full md:w-[482px]    md:h-[321px]">
              <div>
                <div className="absolute z-10 bottom-0 bg-white inline-flex flex-col space-y-2 items-start justify-center p-6 rounded-tr-lg rounded-bl-lg w-[314px] h-[153px]">
                  <h2 className="text-sm text-[#5A5A5A] font-bold">
                    Application Development
                  </h2>
                  <p className="text-2xl text-[#5A5A5A] font-bold">
                    Anterin.id Ridesharing company
                  </p>
                </div>

                <div className="relative w-full md:w-[482px] h-[321px]">
                  <Image
                    src={"/img/card__cover 2.svg"}
                    alt=""
                    fill
                    style={{ objectFit: "fill" }}
                  />
                </div>
              </div>
            </div>

            <div className="relative w-full md:w-[482px] h-[321px]">
              <div>
                <div className="absolute z-10 bottom-0 bg-white inline-flex flex-col space-y-2 items-start justify-center p-6 rounded-tr-lg rounded-bl-lg w-[314px] h-[153px]">
                  <h2 className="text-sm text-[#5A5A5A] font-bold">
                    Artificial Intelligence
                  </h2>
                  <p className="text-2xl text-[#5A5A5A] font-bold">
                    Juru.id Smart Parking
                  </p>
                </div>

                <div className="relative w-full md:w-[482px] h-[321px]">
                  <Image
                    src={"/img/card__cover 3.svg"}
                    alt=""
                    fill
                    style={{ objectFit: "fill" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className=" h-[677px] bg-no-repeat"
          style={{ backgroundImage: "url(" + "/img/background1.svg" + ")" }}
        >
          <div className="flex flex-col md:flex-row k md:gap-72 pt-10 px-5 md:p-[125px]">
            <h2 className="font-bold text-[32px] text-[#5A5A5A]">
              Connect <br /> & Collaborate
            </h2>
            <div>
              <p className="max-w-[576px] font-nunito text-lg leading-loose text-[#5A5A5A]">
                Pengalaman partner TLab ketika berkolaborasi untuk menghasilkan
                produk terbaik
              </p>
              <div className="flex gap-3 items-center mt-5">
                <p className="font-bold text-base text-[#5449D6]">
                  Lihat Semua Partner TLab
                </p>
                <div className="relative w-[16px] h-[16px]">
                  <Image
                    src={"/icon/diagonal-arrow-right-up-outline.svg"}
                    alt=""
                    fill
                    style={{ objectFit: "fill" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row  gap-5 md:gap-0  md:justify-between px-3 md:px-[120px] -mt-[370px]">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className={`${item.class} flex flex-col justify-between md:w-96 h-[569px] rounded-lg`}
            >
              <p className="font-bold text-2xl text-white px-4 py-8">
                {item.desc}
              </p>

              <div className="relative w-full  ">
                <div>
                  <div className="absolute  z-10 bottom-0  bg-white inline-flex gap-5 space-y-2 items-start justify-center p-6 rounded-tr-lg rounded-bl-lg w-[314px] h-[112px]">
                    <div className="relative w-[64px] h-[64px]">
                      <Image
                        src={"/icon/avatar.svg"}
                        alt=""
                        fill
                        style={{ objectFit: "fill" }}
                      />
                    </div>
                    <div className="flex flex-col">
                      <h2 className="text-base text-[#5A5A5A] font-nunito">
                        Hamdan Hamedan
                      </h2>
                      <p className="text-sm text-[#5A5A5A] font-nunito">
                        CEO of Kesan Indonesia
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full ">
                  <div className="relative -mb-[2.4px] w-full md:w-[384px] h-[198px] flex   px-0 mx-0 overflow-visible">
                    <Image
                      src={`/img/${item.img}`}
                      alt=""
                      fill
                      style={{ objectFit: "fill" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 justify-center mt-[80px] mb-[100px]">
          {ourPartner.map((v, i) => (
            <div key={i} className="m-2">
              <div className="relative mx-4 w-[153.38] h-[71.81px]"  >
                <Image src={v.img} alt="" fill style={{objectFit:"fill"}} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
