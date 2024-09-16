"use client";

import React, { useState } from "react";
import NavBar from "./NavBar.tsx";
import MobileNav from "./MobileNav.tsx";

type Props = {};

export default function ResponsiveNav({}: Props) {
  const [showNav, setShowNav] = useState(false);
  const showNavHandler = () => {
    setShowNav(true);
  };
  const closeNavHandler = () => {
    setShowNav(false);
  };

  return (
    <>
      <NavBar openNav={showNavHandler} />
      <MobileNav showNav={showNav} closeNav={closeNavHandler} />
    </>
  );
}
