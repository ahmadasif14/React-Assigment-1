"use client";
import Button from "@/components/Button";
import { useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(0);
  };

  return (
    <div className="p-11">
      <h1 className="text-2xl font-bold text-blue-300 mb-6">
        Simple Tap Counter
      </h1>
      <div className="text-6xl font-bold text-white mb-6">{counter}</div>
      <Button title={"+"} onClick={handleIncrement} />
      <Button title={"-"} onClick={handleDecrement} />
      <Button title={"Reset"} onClick={handleReset} />
    </div>
  );
}
