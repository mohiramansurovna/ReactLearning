'use client';
import React, {useState} from 'react';
import Question from './Question';
import Result from './Result';
import {type Topic} from '../Aside';

export const Score = React.createContext({score: 0, setScore: (score: number) => {}});
export const Choosen = React.createContext({choosen: '', setChoosen: (choosen: string) => {}});

export default function Main({id ,user, topicName, js}: {id: number; user:string; topicName:string; js: [topic: Topic]}) {
    const [questionId, setQuestionId] = useState(1);
    const [done, setDone] = useState(false);
    const topic = js[id];
    const [score, setScore] = useState(0);
    const [choosen, setChoosen] = useState<string>('');
    const [incorrect, setIncorrect] = useState<object[]>([]);
    function handleNext() {
        if (questionId < 5) {
            //@ts-ignore
            if (choosen == topic[questionId].correct) {
                setScore(score + 1);
            } else {
                setIncorrect((prevIncorrect) => [
                    ...prevIncorrect,
                    {
                        questionId:questionId,
                        //@ts-ignore
                        question: topic[questionId].question,
                        //@ts-ignore
                        correct: topic[questionId].correct,
                        urAnswer: choosen,
                    },
                ]);
            }
            setTimeout(() => {
                setQuestionId(questionId + 1);
            }, 100);
        } else {
            //@ts-ignore
            if (choosen == topic[questionId].correct) {
                setScore(score + 1);
            } else {
                setIncorrect((prevIncorrect) => [
                    ...prevIncorrect,
                    {
                        questionId:questionId,
                        //@ts-ignore
                        question: topic[questionId].question,
                        //@ts-ignore
                        correct: topic[questionId].correct,
                        urAnswer: choosen,
                    },
                ]);
            }
            setTimeout(() => {
                setDone(true);
            }, 100);
        }
    }
    function handlePrev() {
        if (questionId > 1) {
            setQuestionId(questionId - 1);
        }
    }
    return done == false ? (
        <section className='questions'>
            <div>#{topic[0]}</div>
            <Choosen.Provider value={{choosen: choosen, setChoosen: setChoosen}}>
                <Question
                    questionId={questionId}
                    //@ts-ignore
                    question={topic[questionId].question}
                    //@ts-ignore
                    correct={topic[questionId].correct}
                    //@ts-ignore
                    answer1={topic[questionId].answer1}
                    //@ts-ignore
                    answer2={topic[questionId].answer2}
                    //@ts-ignore
                    answer3={topic[questionId].answer3}
                />
            </Choosen.Provider>
            <div id='buttons'>
                {questionId !== 1 ? (
                    <button onClick={handlePrev}>Prev</button>
                ) : (
                    <button className='unUse'>Prev</button>
                )}
                <button onClick={handleNext}>{done === false ? 'Next' : 'False'}</button>
            </div>
        </section>
    ) : (
        <Score.Provider value={{score: score, setScore: setScore}}>
            <Result
            //@ts-ignore
                incorrect={incorrect}
                topicId={id.toString()}
                topicName={topicName}
            />
        </Score.Provider>
    );
}
