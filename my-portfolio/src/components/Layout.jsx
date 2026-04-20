import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import toggleStore from "./../utils/toggleStore";
import Nav from "./nav";
import Sidebar from "./sidebar";
import Footer from "./footer";

export default function Layout() {
  const { isDark } = toggleStore();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const lineNumbers = Array.from({ length: 40 }, (_, i) =>
    String(i + 1).padStart(2, "0"),
  );

  return (
    <div className="bg-zinc-200 text-slate-900 dark:bg-[#222222] dark:text-[#e5e2e1] min-h-screen w-full font-sans flex flex-col text-left selection:bg-cyan-300 dark:selection:bg-[#00F5FF] selection:text-black transition-colors duration-500 ease-in-out relative">

      <Nav />

      <div className="flex flex-1 w-full max-w-[1600px] mx-auto">
        <Sidebar lineNumbers={lineNumbers} />

        <main className="flex-1 overflow-x-hidden">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
}