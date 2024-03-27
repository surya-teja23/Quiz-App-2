type Answers = {
  answer_a: string;
  answer_b: string;
  answer_c: string | null;
  answer_d: string | null;
  answer_e: string | null;
  answer_f: string | null;
};

type CorrectAnswers = {
  answer_a_correct: "true" | "false";
  answer_b_correct: "true" | "false";
  answer_c_correct: "true" | "false";
  answer_d_correct: "true" | "false";
  answer_e_correct: "true" | "false";
  answer_f_correct: "true" | "false";
};

type Tags = {
  name: string;
};

export type RawQuestion = {
  id: number;
  question: string;
  description: string | null;
  answers: Answers;
  multiple_correct_answers: "true" | "false";
  correct_answers: CorrectAnswers;
  correct_answer:
    | "answer_a"
    | "answer_b"
    | "answer_c"
    | "answer_d"
    | "answer_e"
    | "answer_f";
  explanation: string | null;
  tip: string | null;
  tags: Tags[];
  category: string | null;
  difficulty: "Easy" | "Medium" | "Hard";
};

const useTransformedObject = ({
  id,
  question,
  description,
  answers,
  multiple_correct_answers,
  correct_answers,
  correct_answer,
  explanation,
  tip,
  tags,
  category,
  difficulty,
}: RawQuestion) => {
  let correctAnswers = Object.entries(correct_answers)
    .filter(([key, value]) => value === "true")
    .map(([key]) => {
      const answerKey = key.replace("_correct", "") as keyof Answers;
      return answers[answerKey];
    });
  if (correctAnswers.length === 0) {
    correctAnswers = [answers[correct_answer as keyof Answers] || "none"];
  }

  const noOfNullOptions = Object.values(answers).filter(
    (option) => option === null
  ).length;
  let options;
  if (noOfNullOptions === 4) {
    options = [answers.answer_a, answers.answer_b];
  } else {
    options = [
      answers.answer_a,
      answers.answer_b,
      answers.answer_c,
      answers.answer_d || "none",
    ];

    if (!options.includes(correctAnswers[0])) {
      options[3] = correctAnswers[0];
    }
  }

  const isMultipleCorrectAnswers = multiple_correct_answers === "true";
  return {
    id,
    question,
    options,
    isMultipleCorrectAnswers,
    correctAnswers,
    selectedOption: [],
  };
};

export default useTransformedObject;
