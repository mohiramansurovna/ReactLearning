
import React from 'react';
import AsideLinks from './AsideLinks';
import mainLink from '@/MainLink';
export type Topic = [
    string,
    {
        id: number;
        question: string;
        correct: string;
        answer1: string;
        answer2: string;
        answer3: string;
    }
];
export default async function Aside(props:{topic:string}) {
    const responce = await fetch(`${mainLink}/data?query=${props.topic}`);
    const js = await responce.json();
    return (
        <>
            {js.map((topic: Topic, index: number) => {
                return (
                    <AsideLinks
                        topic={topic[0]}
                        id={index}
                        key={index}
                        urlTopic={props.topic}
                    />
                );
            })}
        </>
    );
}
