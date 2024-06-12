import React, {useContext, useState} from 'react';
import {Score} from './Main';
import {usePathname, useRouter} from 'next/navigation';
import Link from 'next/link';
import mainLink from '@/MainLink';

export default function Result({
    incorrect,
    topicId,
}: {
    incorrect: [{questionId:number, question: string; correct: string; urAnswer: string}];
    topicId: string;
}) {
    const {score, setScore} = useContext(Score);
    const [ulDisplay, setUlDisplay] = useState('none');
    const nextTopic = parseInt(topicId) + 1;
    const pathname = usePathname();
    const router = useRouter();

    if (score >= 3) {
        try {
            fetch(`${mainLink}/authentication/data`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: '"icantopenwithoutit"',
                },
                body: JSON.stringify([
                    pathname.split('/')[1],
                    'js',
                    topicId.toString(),
                    score.toString(),
                ]),
            });
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <section className='result'>
            <div>Your Score is {score * 20}%</div>
            <ul style={{display: ulDisplay}}>
                {incorrect.map((item, index) => {
                    return (
                        <li key={index}>
                            <div>
                                <h3>Question: {item.questionId}</h3>
                                <p>{item.question}</p>
                            </div>
                            <div>
                                <h3>Your answer: </h3>
                                <p>{item.urAnswer}</p>
                            </div>
                            <div>
                                <h3> Correct answer:</h3>
                                <p>{item.correct}</p>
                            </div>
                        </li>
                    );
                })}
            </ul>
            <button
                style={score===5?{display:'none'}:{}}
                onClick={() => {
                    setUlDisplay(ulDisplay == 'block' ? 'none' : 'block');
                }}>
                {ulDisplay == 'block' ? 'Close the window' : 'See the incorrect answers'}
            </button>
            {score >= 3 ? (
                pathname === '/learning/' ? (
                    <button>
                        <Link
                            className='subLink'
                            href={`learning/${nextTopic}/`}>
                            Go to next topic
                        </Link>
                    </button>
                ) : (
                    <button>
                        <Link
                            className='subLink'
                            href={`${nextTopic}/`}>
                            Go to next topic
                        </Link>
                    </button>
                )
            ) : (
                <button
                    onClick={() => {
                        router.refresh();
                    }}>
                    Retake the test
                </button>
            )}
        </section>
    );
}
