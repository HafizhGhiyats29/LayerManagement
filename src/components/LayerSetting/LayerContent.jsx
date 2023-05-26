import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import NavbarMapSetting from "./NavbarLayerSetting";

function LayerContent({ children }) {
  return (
    <section className="py-12 px-6 w-11/12">
      <article className="flex items-center justify-between px-6">
        <h1 className="font-semibold text-3xl">Layer Setting</h1>
        <Link to="/" className="flex items-center text-lg">
          <span>Back to main map</span>
          <span className="text-2xl">
            <MdKeyboardArrowRight />
          </span>
        </Link>
      </article>
      <article>
        <header>
          <NavbarMapSetting />
        </header>
        <main>{children}</main>
      </article>
    </section>
  );
}

export default LayerContent;
