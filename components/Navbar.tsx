import Image from "next/image";
import Link from "next/link";

import CustomBtn from "./CustomBtn";
const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between item-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="car logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>

        <CustomBtn
          title="Sign In"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130]"
        />
      </nav>
    </header>
  );
};

export default Navbar;