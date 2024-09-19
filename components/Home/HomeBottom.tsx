import React from "react";
import Card from "../Card/Card.tsx";

type Props = {};

export default function HomeBottom({}: Props) {
  return (
    <>
      <div className="mt-6 flex flex-wrap">
        <div className="w-4/6">
          <Card>|Hello</Card>
        </div>
        <div className="w-2/6 pl-3">
          <Card>|Bye</Card>
        </div>
      </div>
    </>
  );
}
