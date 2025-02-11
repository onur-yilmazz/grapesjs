"use client";
import { useEffect } from "react";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";

export default function EditorPage() {
  useEffect(() => {
    const editor = grapesjs.init({
      container: "#gjs",
      height: "100vh",
      width: "100%",
      fromElement: true,
      storageManager: false,
      panels: { defaults: [] },
      blockManager: {
        appendTo: "#blocks",
      },
    });

    const blockManager = editor.BlockManager;
    
    blockManager.add("button", {
      label: "Buton",
      content: `<button class="bg-blue-500 text-white px-4 py-2 rounded">Buton</button>`,
    });

    blockManager.add("header", {
      label: "Başlık",
      content: "<h1>Başlık</h1>",
    });

    blockManager.add("image", {
      label: "Resim",
      content: '<img src="https://via.placeholder.com/150" />',
    });

  }, []);

  return (
    <div className="flex">
      <div id="blocks" className="w-1/5 bg-gray-200 p-2"></div>
      <div id="gjs" className="w-4/5 border"></div>
    </div>
  );
}
