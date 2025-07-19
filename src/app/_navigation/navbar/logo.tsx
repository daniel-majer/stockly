import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-x-2">
        <Image src="/logo.svg" alt="Logo" width={40} height={40} />
        <h1 className="text-2xl font-bold">Stockly</h1>
      </div>
    </Link>
  );
};

export default Logo;
