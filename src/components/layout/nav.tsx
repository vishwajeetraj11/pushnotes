"use client";

import {
  useRouter,
  usePathname,
  useSelectedLayoutSegments,
  useSelectedLayoutSegment,
} from "next/navigation";

import React from "react";

type Props = { title: string };

const Nav = ({ title }: Props) => {
  return (
    <div className="flex justify-between flex-shrink-0 pr-6 border-b border-gray-200 py-3 h-22 lg:h-15 lg:py-5 pl-4 lg:pl-10">
      <div className="flex items-center flex-wrap">
        <div className="mt-2 lg:mt-0 text-sm font-semibold cursor-default">
          {title}
        </div>
      </div>
    </div>
  );
};

export default Nav;
