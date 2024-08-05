import { useState } from "react";
import { ChangeButton } from "./Buttons";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";

export const CountSection = () => {
  const [tall, setTall] = useState(0);

  const increment = () => setTall(tall + 1);
  const decrement = () => setTall(tall - 1);
  const double = () => setTall(tall * 2);
  const half = () => setTall(tall / 2);
  return (
    <>
      <div className="flex justify-center gap-8 flex-wrap m-8">
        <ChangeButton
          className="bg-green-500 border-green-100"
          onClick={increment}
        >
          increment
          <FaArrowAltCircleUp />
        </ChangeButton>
        <ChangeButton className="bg-red-500 border-red-100" onClick={decrement}>
          decrement
          <FaArrowAltCircleDown />
        </ChangeButton>
      </div>
      <p>{tall}</p>
    </>
  );
};
