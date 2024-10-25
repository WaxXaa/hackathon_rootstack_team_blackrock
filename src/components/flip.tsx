import React from "react";
import { FlipWords } from "./ui/flip-words";

export function Flips() {
  const words = ["Boletos", "Entradas", "Tickets", "Pases"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-6xl mx-auto font-normal text-neutral-100 dark:text-neutral-100">
        Compra
        <FlipWords words={words} /> <br />
        Compra con PanaEventos
      </div>
    </div>
  );
}
