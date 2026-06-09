"use client";

import Image from "next/image";
import { useState } from "react";

const TestPage = () => {
  return (
    <div className="py-14 bg-white h-screen">
      <div className="w-7xl max-w-[90%] mx-auto relative">
        <Speaker
          name="Rahul Mondal"
          profile_pic_thumb="https://assets.bttcollege.com/staff-portfolios/019c24d9-53d8-73fd-b46a-dae9ea13f1e3/profile-pic-thumb-1779882434359.png"
          profile_pic="https://assets.bttcollege.com/staff-portfolios/019c24d9-53d8-73fd-b46a-dae9ea13f1e3/profile-pic-1779882434359.png"
        />
      </div>
    </div>
  );
};

export default TestPage;

const Speaker = ({
  name,
  email,
  designation,
  profile_pic,
  profile_pic_thumb,
}: {
  name: string;
  email?: string | null;
  designation?: string | null;
  profile_pic?: string | null;
  profile_pic_thumb?: string | null;
}) => {
  const [imgSrc, setImgSrc] = useState(
    profile_pic_thumb || "/images/webinar/dummy-avatar.png"
  );
  return (
    <div className="flex items-center gap-4">
      {/* avatar */}
      <div className="relative flex w-20 h-20 md:w-28 md:h-28 border border-border-grey rounded-full overflow-hidden p-1 bg-white">
        <Image
          src={imgSrc}
          alt="Speaker"
          fill
          sizes="(max-width: 768px) 80px, 112px"
          className="object-cover object-top rounded-full border-2 border-border-grey"
          loading="eager"
          onLoad={() => {
            if (profile_pic) {
              setImgSrc(profile_pic);
            }
          }}
          onError={() => {
            setImgSrc("/images/webinar/dummy-avatar.png");
          }}
        />
      </div>
      {/* details */}
      <div className="flex flex-col gap-0.5 md:gap-1 items-start text-start">
        <p className="font-poppins font-semibold text-lg md:text-xl text-black">
          {name}
        </p>
        <p className="text-dark-grey text-sm md:text-base">{designation}</p>
      </div>
    </div>
  );
};
