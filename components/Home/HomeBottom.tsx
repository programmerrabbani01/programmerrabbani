import React from "react";
import Card from "../Card/Card.tsx";
import { IconArrowRightSquare } from "@tabler/icons-react";
import Link from "next/link";

type Props = {};

export default function HomeBottom({}: Props) {
  return (
    <>
      <div className="mt-6 flex flex-wrap">
        <div className="w-4/6">
          <Card>
            <div className="p-6">
              <h3 className="flex items-center gap-[15px] justify-between text-2xl font-semibold leading-[1.333em] mb-2">
                Services I Offered
                <Link
                  href=""
                  className="text-base font-normal text-[#4770ff] leading-[1.5em] flex items-center border-b border-[#dbdfe5] dark:border-[#576076] hover:border-[#4770ff] dark:hover:border-[#4770ff] transition-all duration-300"
                >
                  See All Services <IconArrowRightSquare stroke={2} />
                </Link>
              </h3>
              {/* items */}
              <div className="mt-6">Hello</div>
            </div>
          </Card>
        </div>
        <div className="w-2/6 pl-3">
          <Card>|Bye</Card>
        </div>
      </div>
    </>
  );
}
