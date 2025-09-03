"use client";
import { useState, useEffect } from "react";
import figlet from "figlet";
import standard from "figlet/importable-fonts/Standard.js";

figlet.parseFont("Standard", standard);

export default function Home() {
  const [inputText, setInputText] = useState("1DV610");
  const [asciiOutput, setAsciiOutput] = useState("");

  useEffect(() => {
    figlet.text(inputText, { font: "Standard" }, function (err, data) {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      setAsciiOutput(data || "");
    });
  }, [inputText]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let newText = e.target.value;

    if (
      newText.length > 0 &&
      newText.length % 23 === 0 &&
      !newText.endsWith("\n")
    ) {
      newText = newText + "\n";
    }

    setInputText(newText);
  };

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gray-900 rounded-lg shadow-2xl border border-gray-700">
          <div className="bg-gray-800 rounded-t-lg px-4 py-3 flex items-center space-x-2">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="text-gray-400 text-sm ml-4">
              Terminal — 1DV610 ASCII Art Generator
            </div>
          </div>

          <div className="bg-black rounded-b-lg p-6">
            <div className="text-green-400 font-mono text-sm mb-2">
              <span className="text-blue-400">user@terminal</span>
              <span className="text-white">:</span>
              <span className="text-blue-400">~</span>
              <span className="text-white">$ Ascii-art</span>
            </div>

            <pre className="text-green-400 font-mono text-sm overflow-x-auto mb-4 min-h-[120px]">
              {asciiOutput}
            </pre>

            <div className="flex items-center">
              <span className="text-green-400 font-mono text-sm mr-2">
                <span className="text-blue-400">user@terminal</span>
                <span className="text-white">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-white">$ Ascii-art "</span>
              </span>
              <textarea
                value={inputText}
                onChange={handleInputChange}
                placeholder="Enter text here"
                className="flex-1 bg-transparent text-green-400 font-mono text-sm focus:outline-none caret-green-400 resize-none"
                rows={1}
              />
              <span className="text-white font-mono text-sm">"</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
