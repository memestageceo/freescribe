import React from "react";

export default function FileDisplay({ handleAudioReset, file, audioStream }) {
  return (
    <main className="flex-1 p-4 flex flex-col text-center sm:gap-4 md:gap-5 pb-20 justify-center w-fit max-w-full mx-auto">
      <h1 className="font-semibold text-5xl sm:text-6xl md:text-7xl">
        Your <span className="text-blue-400 bold">File</span>
      </h1>
      <div className="flex mx-auto text-left items-center gap-2">
        <h3 className="font-semibold">Name</h3>
        <p>{file ? file?.name : "Custom Audio"}</p>
      </div>
      <div className="flex items-center justify-between gap-4">
        <button
          className="text-slate-400 hover:text-blue-600 duration-200"
          onClick={handleAudioReset}
        >
          Reset
        </button>
        <button className="specialBtn p-2 rounded-lg flex items-center gap-2 font-medium text-blue-400">
          <p>
            Transcribe <i className="fa-solid fa-pen-nib"></i>
          </p>
        </button>
      </div>
    </main>
  );
}
