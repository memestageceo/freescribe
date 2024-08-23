import React from "react";

export default function Header() {
  return (
    <header className="flex items-center justify-between gap-4">
      <a href="/">
        <h1>
          Free <span className="text-blue-400">Scribe</span>
        </h1>
      </a>

      <a
        href="/"
        className="flex specialBtn px-4 py-2 rounded-lg text-blue-400 items-center text-sm gap-2"
      >
        <p>New</p>
        <i className="fa-soli fa-plus"> </i>
      </a>
    </header>
  );
}
