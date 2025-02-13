"use client";
import { useState, useEffect } from "react";
import { fetchCarousel } from "../utils/api";

export default function Carousel() {
  const [carousel, setCarousel] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchCarousel().then(data => setCarousel(data.data));
  }, []);

  // 自動輪播 (每 2 秒切換)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carousel.length);
    }, 4000);

    return () => clearInterval(interval); // 清除計時器，避免記憶體洩漏
  }, [carousel]);

  // 手動切換
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? carousel.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carousel.length);
  };

  return (
    <section className="relative w-full h-[400px] flex justify-center items-center mt-16 bg-gray-200">
      {/* 顯示輪播圖片 */}
      {carousel.length > 0 && (
        <img
          src={carousel[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-all duration-500"
        />
      )}

      {/* 左右切換按鈕 */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
      >
        ▶
      </button>
    </section>
  );
}
