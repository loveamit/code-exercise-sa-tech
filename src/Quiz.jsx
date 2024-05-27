import React, { useState } from "react";

export const QUESTIONS = {
  1: "Can you code in Ruby?",
  2: "Can you code in JavaScript?",
  3: "Can you code in Swift?",
  4: "Can you code in Java?",
  5: "Can you code in C#?",
};

const Quiz = () => {
  const [result, setResult] = useState([]);

  const [avgResult, setAvgResult] = useState(0);

  const handleResult = () => {
    const noOfQuestions = Object.keys(QUESTIONS).length;
    const noOfYes = document.querySelectorAll('input[value="Yes"]:checked');
    setResult([...result, (100 * noOfYes.length) / noOfQuestions]);

    document
      .querySelectorAll('input[type="radio"]:checked')
      .forEach((ele) => (ele.checked = false));

    const arrLength = result.length;

    var sum = 0;
    result.forEach(function (item, idx) {
      if (typeof item === "number") {
        sum += item;
      }
    });
    var avg = sum / arrLength;

    setAvgResult(result.length ? avg : result);
  };

  return (
    <>
      <h2 className="text-lg font-semibold">Quiz</h2>
      <div id="quiz" className="w-80 justify-center m-auto">
        {Object.keys(QUESTIONS).map((que, id) => {
          return (
            <div id="question" key={id} className="p-2 font-mono text-left">
              <label className="block w-80 text-rose-800">
                {`${que}]`} {QUESTIONS[que]}
              </label>
              <input
                type="radio"
                name={que + id}
                value="Yes"
                className="mr-2"
              />
              Yes
              <input
                type="radio"
                name={que + id}
                value="No"
                className="ml-2 mr-2"
              />
              No
            </div>
          );
        })}
      </div>
      <button
        onClick={handleResult}
        type="button"
        className="bg-blue-700 rounded-md text-white p-2 hover:font-semibold mb-2"
      >
        Submit Quiz
      </button>
      <hr className="my-3" />
      <p>
        You scored = {result[result.length - 1]} and average = {avgResult}
      </p>
    </>
  );
};

export default Quiz;
