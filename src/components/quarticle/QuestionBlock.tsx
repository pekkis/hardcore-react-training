"use client";

import { QuestionBlockType } from "@/services/quarticle";
import { FC, useState } from "react";
import * as styles from "./QuestionBlock.css";
import Button from "../duck-ui/Button";
import clsx from "clsx";

type Props = {
  block: QuestionBlockType;
};

const QuestionBlock: FC<Props> = ({ block }) => {
  const [userAnswer, setUserAnswer] = useState<number | undefined>(() => {
    return undefined;
  });

  return (
    <div className={styles.question}>
      <p>{block.question}</p>

      <ul>
        {block.answers.map((answer, i) => {
          if (userAnswer !== undefined) {
            const classes = clsx(styles.answer, {
              [styles.correct]:
                userAnswer === i &&
                userAnswer === block.correctAnswer &&
                block.correctAnswer === i,
              [styles.incorrect]:
                userAnswer === i && userAnswer !== block.correctAnswer
            });

            return (
              <li className={classes} key={i}>
                {answer}
              </li>
            );
          }

          return (
            <li key={i}>
              <Button
                onClick={() => {
                  setUserAnswer(i);
                }}
              >
                {answer}
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default QuestionBlock;
