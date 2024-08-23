import React, { useState } from "react";
import Transcription from "./Transcription";
import Translation from "./Translation";

export default function Information() {
  const [tab, setTab] = useState("transcription");
  return (
    <main className="flex-1 p-4 flex flex-col text-center sm:gap-4 md:gap-5 pb-20 justify-center max-w-prose w-full mx-auto">
      <h1 className="font-semibold text-5xl sm:text-6xl md:text-7xl whitespace-nowrap">
        Your <span className="text-blue-400 bold">Transcription</span>
      </h1>

      <div className="gid grid-cols-2 mx-auto bg-white border-2 border-solid border-blue-300 shadow  gap-2">
        <button
          onClick={() => setTab("transcription")}
          className={
            "px-4 py-2 font-medium duration-200 " +
            (tab === "transcription"
              ? "bg-blue-400 text-white"
              : "text-blue-400 hover:text-blue-600")
          }
        >
          Transcription
        </button>
        <button
          onClick={() => setTab("translation")}
          className={
            "px-4 py-2 font-medium duration-200 " +
            (tab === "translation"
              ? "bg-blue-400 text-white"
              : "text-blue-400 hover:text-blue-600")
          }
        >
          Translation
        </button>
      </div>
      {tab === "transcription" ? <Transcription /> : <Translation />}
    </main>
  );
}
