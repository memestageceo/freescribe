import React, { useState, useEffect, useRef } from "react";

export default function HomePage({ setAudioStream, setFile }) {
  const [recordingStatus, setRecordingStatus] = useState("inactive");
  const [audioChunks, setAudioChunks] = useState([]);
  const [duration, setDuration] = useState(0);

  const mediaRecorder = useRef(null);

  const mimeType = "audio/webm";

  async function startRecording() {
    let tempStream;
    console.log("start recording");

    try {
      const streamData = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false,
      });
      tempStream = streamData;
    } catch (error) {
      console.log(err.message);
      return;
    }
    setRecordingStatus("recording");
    const media = new MediaRecorder(tempStream, { type: mimeType });

    mediaRecorder.current = media;
    mediaRecorder.current.start();
    const localAudioChunks = [];

    mediaRecorder.current.ondataavailable = (event) => {
      if (typeof event.data === "undefined" || event.data.size === 0) {
        return;
      }
      localAudioChunks.push(event.data);
    };
    setAudioChunks(localAudioChunks);
  }

  async function stopRecording() {
    setRecordingStatus("inactive");
    console.log("stop recording");

    mediaRecorder.current.stop();
    mediaRecorder.current.onstop = () => {
      const audioBlog = new Blob(audioChunks, { type: mimeType });
      setAudioStream(audioBlog);
      setAudioChunks([]);
      setDuration(0);
    };
  }

  useEffect(() => {
    if (recordingStatus === "inactive") {
      return;
    }
    const interval = setInterval(() => {
      setDuration((curr) => curr + 1);
    }, 1000);

    return () => clearInterval(interval);
  });
  return (
    <main className="flex-1 p-4 flex flex-col text-center sm:gap-4 md:gap-5 pb-20 justify-center">
      <h1 className="font-semibold text-5xl sm:text-6xl md:text-7xl">
        Free <span className="text-blue-400 bold">Scribe</span>
      </h1>
      <h3 className="font-medium">
        Record <span className="text-blue-400">&rarr;</span> Transcribe
        <span className="text-blue-400">&rarr;</span> Translate
      </h3>
      <button
        className="flex items-center text-base justify-between specialBtn px-4 py-2 rounded-xl gap-4 mx-auto w-72 max-w-full my-4"
        onClick={
          recordingStatus === "recording" ? stopRecording : startRecording
        }
      >
        <p className="text-blue-400">
          {recordingStatus === "inactive" ? "Record" : `Stop recording`}
        </p>
        <div className="flex items-center gap-2">
          {duration !== 0 && <p className="text-sm">{duration}s</p>}
          <i
            className={
              "fa-solid fa-microphone duration-200 " +
              (recordingStatus === "recording" ? "text-rose-300" : "")
            }
          ></i>
        </div>
      </button>
      <p className="text-base">
        Or
        <label
          htmlFor="fileInput"
          className="text-blue-400 cursor-pointer hover:text-blue-600 duration-200"
        >
          <input
            type="file"
            name="fileInput"
            id="fileInput"
            accept=".mp3, .wave"
            className="hidden"
            onChange={(e) => {
              const tempFile = e.target.files[0];
              setFile(tempFile);
            }}
          />
          Upload
        </label>
        a mp3 file.
      </p>
      <div className="italic text-slate-500">Free now free foreever.</div>
    </main>
  );
}
