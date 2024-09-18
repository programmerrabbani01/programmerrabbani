import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function ({ children }: Props) {
  return (
    <>
      <div className="border-none bg-white dark:bg-black card_shadow rounded-2xl h-full">
        {children}
      </div>
    </>
  );
}
