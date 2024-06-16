import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <>
      {/* logo image here */}
      <span className="w-8 h-8 border bg-accent rounded-full flex justify-center items-center">
        <Image
          src="/logo.jpg"
          alt=""
          width={100}
          height={100}
          className="rounded-full"
        />
      </span>
    </>
  );
}
