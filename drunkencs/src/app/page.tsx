"use client";

import React from "react";
import CheckBox from "./components/common/CheckBox";
import Intro from "./components/Intro";
import Navigation from "./components/Navigation";

export default function Home() {
  const [checked, setChecked] = React.useState(false);
  return (
    <>
      <Navigation />
        <Intro header="yeee" summary="Are you tired of cyka blyat?" />
       <CheckBox checked={checked} onChange={() => setChecked(!checked)} />
    </>
  );
}
