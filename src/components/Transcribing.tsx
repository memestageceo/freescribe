import React from "react";

export default function Transcribing({ downloading }) {
  return (
    <div className="flex items-center flex-col justify-center gap-10 md:gap-14 py-24">
      <div className="flex flex-col gap-2 sm:gap-4">
        <h1 className="font-semibold text-5xl sm:text-6xl md:text-7xl">
          <span className="text-blue-400 bold">Transcribing</span>
        </h1>
        <p>
          {!downloading ? "warming up cylinders" : "core cylinders engaged"}
        </p>
      </div>

      <div className="flex flex-col max-w-[500px] w-full gap-2 md:gap-4">
        {[0, 1, 2].map((val) => {
          return (
            <div
              key={val}
              className={
                "rounded-full h-2 sm:h-3 bg-slate-400 loading " +
                `loading${val}`
              }
            ></div>
          );
        })}
      </div>
    </div>
  );
}
