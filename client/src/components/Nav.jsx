import React from "react";

const Nav = () => {
  return (
    <nav className="bg-secondary">
      <div className="mx-auto flex w-[90%] max-w-7xl items-center justify-between py-4">
        <h2 className="text-primary flex flex-wrap items-end text-2xl font-bold">
          <p className="pr-2">GALLER-E</p>
          <span className="text-sm font-normal text-white">
            powered by OpenAI
          </span>
        </h2>

        <button className="bg-primary rounded px-4 py-2 text-white hover:opacity-80 focus:opacity-80">
          Create
        </button>
      </div>
    </nav>
  );
};

export default Nav;
