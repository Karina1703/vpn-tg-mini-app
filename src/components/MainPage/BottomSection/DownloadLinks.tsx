"use client";

import { useEffect, useState } from "react";

const apps = [
  { name: "iOS", link: "/download/ios", icon: "🍏" },
  { name: "Android", link: "/download/android", icon: "🤖" },
  { name: "Windows", link: "/download/windows", icon: "🖥" },
  { name: "macOS", link: "/download/mac", icon: "💻" },
];

export default function DownloadLinks() {
  const [platform, setPlatform] = useState("ios");

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes("android")) {
      setPlatform("Android");
    } else if (userAgent.includes("iphone") || userAgent.includes("ipad")) {
      setPlatform("iOS");
    } else if (userAgent.includes("win")) {
      setPlatform("Windows");
    } else if (userAgent.includes("mac")) {
      setPlatform("macOS");
    }
  }, []);

  return (
    <div className="overflow-x-auto no-scrollbar w-full">
      <div className="flex gap-4 min-w-max">
        {apps.map((app) => (
          <a
            key={app.name}
            href="#!"
            className={`flex flex-col items-start justify-between w-32 h-28 rounded-xl p-4 font-semibold transition ${
              platform === app.name
                ? "bg-[#6F40DC] text-white"
                : "bg-gray-900 text-gray-400"
            }`}
          >
            <span className="text-3xl">{app.icon}</span>
            <span className="text-sm">{app.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
