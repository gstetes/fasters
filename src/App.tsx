import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Landing } from "./pages/Landing";

export function App() {
  return (
    <>
      <Header/>
      <Landing />
    </>
  );
};