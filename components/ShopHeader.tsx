import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";

export default function ShopHeader() {
  return (
    <div
      className="bg-no-repeat flex justify-center items-center h-[316px] md:h-[500px]" // Added responsive height
      style={{
        backgroundImage: `url("/images/ContactHeader-bg.png")`,
        backgroundSize: "100% 100%", // Ensures the image stretches to fit width and height of the div
        backgroundPosition: "center", // Centers the image
        backgroundRepeat: "no-repeat", // Avoids tiling if the image is smaller
      }}
    >
      <div className="w-fit">
        <div className="flex flex-col justify-center items-center">
          <div className="w-[60px] h-[60px] flex items-center justify-center">
            <Image
              src="/images/Meubel House_Logos-05.png"
              alt="logo"
              width={50}
              height={100}
            />
          </div>
          <div>
            <h2 className="font-medium text-[48px] text-black">Shop</h2>
          </div>
        </div>
        <div className="flex items-center justify-center gap-1">
          <Link href="/" className="font-semibold text-[16px] text-black">
            Home
          </Link>
          <Icon icon="material-symbols:keyboard-arrow-right" className="w-5 h-5 font-bold" />
          <p className="font-light text-[16px] text-black">Shop</p>
        </div>
      </div>
    </div>
  );
}
