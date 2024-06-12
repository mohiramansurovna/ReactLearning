import React, {useContext} from 'react';
import {Choosen} from './Main';

export default function Question({
    questionId,
    question,
    correct,
    answer1,
    answer2,
    answer3,
}: {
    questionId:number;
    question: string;
    correct: string;
    answer1: string;
    answer2: string;
    answer3: string;
}) {
    const {choosen, setChoosen}=useContext(Choosen)
    
    function handleAnswer(answer: string) {
        setChoosen(answer);
    }

    return (
        <>
            <h4>{questionId}  \\  {question}</h4>
            <ul>
                <li>
                    <button
                        className={answer1===choosen?'choosen':''}
                        onClick={() => {
                            handleAnswer(answer1);
                        }}>
                        {answer1}
                    </button>
                </li>
                <li>
                    <button
                        className={answer2===choosen?'choosen':''}
                        onClick={() => {
                            handleAnswer(answer2);
                        }}>
                        {answer2}
                    </button>
                </li>
                <li>
                    <button
                        className={answer3===choosen?'choosen':''}
                        onClick={() => {
                            handleAnswer(answer3);
                        }}>
                        {answer3}
                    </button>
                </li>
            </ul>
        </>
    );
}
