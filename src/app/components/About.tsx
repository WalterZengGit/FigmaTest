"use client";
import { useEffect, useState } from "react";
import { fetchAbout } from "../utils/api";

export default function About() {
  const [about, setAbout] = useState<string>("");

  useEffect(() => {
    fetchAbout().then(data => setAbout(data.data));
  }, []);

  return (
    <section id="about" className="p-6 bg-white border rounded-lg shadow-md w-full md:w-1/2">
      <h2 className="text-xl font-bold mb-2">關於我們</h2>
      <div dangerouslySetInnerHTML={{ __html: about }} />
    </section>
  );
}