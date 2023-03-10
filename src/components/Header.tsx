import Image from "next/image";
import Link from "next/link";

const navMenus = [
  { text: "Company", href: "#" },
  { text: "Layanan", href: "#" },
  { text: "Studi Kasus", href: "#" },
  { text: "Data Center", href: "#" },
];

export default function Header() {
  return (
    <header className=" sticky top-0 z-20 bg-white ">
      <nav className="flex items-center justify-between px-3 md:px-[120px] py-[23px]">
        <>
          <div className="flex gap-8 items-center">
            <Link href={"/"}>
              <div className="relative w-[140px] h-[40px]">
                <Image
                  src={"/icon/brand_logo.svg"}
                  alt="logo"
                  fill
                  style={{ objectFit: "fill" }}
                />
              </div>
            </Link>

            <div className="hidden md:flex gap-10">
              {navMenus.map((m, i) => (
                <Link href={m.href} key={i}>
                  <div className="font-nunito text-base text-[#5A5A5A] ">
                    {m.text}
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <Link href={"/soundcloud"} legacyBehavior>
            <a className="w-[157px] h-[48px] px-6 py-3 bg-[#00DE9C] shadow rounded-full text-center text-white text-base font-bold">
              SOUNDCLOUD
            </a>
          </Link>
        </>
      </nav>
    </header>
  );
}
