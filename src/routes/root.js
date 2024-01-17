import React from "react";
import Nav from "../components/nav";
import { Outlet } from "react-router-dom";
export default function root() {
  return (
    <>
      <Nav />
      <hr />

      {<Outlet />}
    </>
  );
}
