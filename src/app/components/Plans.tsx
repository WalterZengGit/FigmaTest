"use client";
import { useEffect, useState } from "react";
import { fetchPlans } from "../utils/api";

export default function Plans() {
  const [plans, setPlans] = useState<{ name: string; price: number }[]>([]);

  useEffect(() => {
    fetchPlans().then(data => setPlans(data.data));
  }, []);

  return (
    <section id="plans" className="p-6 rounded-lg shadow-md w-full md:w-1/2" style={{ backgroundColor: "#355c9b" }}>
      <h2 className="text-xl font-bold mb-4 text-white">方案列表</h2>
      <ul>
        {plans.map((plan, index) => (
          <li key={index} className="flex justify-between border-b border-gray-300 py-2 text-white">
            <span>{plan.name}</span>
            <span>{plan.price} TWD/kWh</span>
          </li>
        ))}
      </ul>
    </section>
  );
}