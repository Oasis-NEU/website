import { useState } from "react";

type Props = {
  question: string;
  answer: string;
};

export default function JoinFaqQuestion({ question, answer }: Props) {
  {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="border-t-2 border-oasis-green-pastel py-4">
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="w-full flex flex-row justify-between items-center"
        >
          <h4 className="text-xl text-left">{question}</h4>{" "}
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div
              className={
                "absolute flex justify-center items-center top-0 left-0 w-full text-oasis-green-pastel transition-all duration-300" +
                (isOpen ? " opacity-0 rotate-180 " : "  ")
              }
            >
              +
            </div>
            <div
              className={
                "absolute flex justify-center items-center top-0 left-0 w-full -translate-y-[1.5px] scale-x-150 text-oasis-green-pastel transition-all duration-300" +
                (isOpen ? " " : " opacity-0 ")
              }
            >
              -
            </div>
          </div>
        </button>
        <p
          className={
            "text-lg pt-2 transition-all duration-300 text-oasis-blue" +
            (isOpen ? "" : " scale-y-0 h-0 opacity-0 ")
          }
        >
          {answer}
        </p>
      </div>
    );
  }
}
