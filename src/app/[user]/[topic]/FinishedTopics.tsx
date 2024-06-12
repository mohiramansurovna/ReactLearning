import React from 'react';
import Link from 'next/link';
import {Topics} from '@/Types';
import Image from 'next/image';
export default function FinishedTopics({
    saved,
    topic,
    url,
}: {
    saved: string[][];
    topic: Topics[];
    url: string;
}) {
    return (
        <section className='finishedTopics'>
            {saved[0] ? (
                <>
                    <h2>Your finished topics</h2>
                    <ul>
                        {saved.map((item, index: number) => {
                            return (
                                <Link
                                    key={index}
                                    href={`${url}/${item[0]}`}>
                                    <li>
                                        <p>
                                            {topic
                                                ? topic[parseInt(item[0])]
                                                    ? topic[parseInt(item[0])][0]
                                                    : null
                                                : 'there is a problem with fetching data pls wait or refresh'}
                                        </p>
                                        {item[1] === '1' ? (
                                            <div>
                                                <Image
                                                    src={`./images/star.svg`}
                                                    alt='star'
                                                    width={40}
                                                    height={40}
                                                />
                                            </div>
                                        ) : item[1] === '2' ? (
                                            <div>
                                                <Image
                                                    src={`./images/star.svg`}
                                                    alt='star'
                                                    width={40}
                                                    height={40}
                                                />
                                                <Image
                                                    src={`./images/star.svg`}
                                                    alt='star'
                                                    width={40}
                                                    height={40}
                                                />
                                            </div>
                                        ) : item[1] === '3' ? (
                                            <div>
                                                <Image
                                                    src={`./images/star.svg`}
                                                    alt='star'
                                                    width={40}
                                                    height={40}
                                                />
                                                <Image
                                                    src={`./images/star.svg`}
                                                    alt='star'
                                                    width={40}
                                                    height={40}
                                                />
                                                <Image
                                                    src={`./images/star.svg`}
                                                    alt='star'
                                                    width={40}
                                                    height={40}
                                                />
                                            </div>
                                        ) : item[1] === '4' ? (
                                            <div>
                                                <Image
                                                    src={`./images/star.svg`}
                                                    alt='star'
                                                    width={40}
                                                    height={40}
                                                />
                                                <Image
                                                    src={`./images/star.svg`}
                                                    alt='star'
                                                    width={40}
                                                    height={40}
                                                />
                                                <Image
                                                    src={`./images/star.svg`}
                                                    alt='star'
                                                    width={40}
                                                    height={40}
                                                />
                                                <Image
                                                    src={`./images/star.svg`}
                                                    alt='star'
                                                    width={40}
                                                    height={40}
                                                />
                                            </div>
                                        ) : (
                                            <div>
                                                <Image
                                                    src={`./images/star.svg`}
                                                    alt='star'
                                                    width={40}
                                                    height={40}
                                                />
                                                <Image
                                                    src={`./images/star.svg`}
                                                    alt='star'
                                                    width={40}
                                                    height={40}
                                                />
                                                <Image
                                                    src={`./images/star.svg`}
                                                    alt='star'
                                                    width={40}
                                                    height={40}
                                                />
                                                <Image
                                                    src={`./images/star.svg`}
                                                    alt='star'
                                                    width={40}
                                                    height={40}
                                                />
                                                <Image
                                                    src={`./images/star.svg`}
                                                    alt='star'
                                                    width={40}
                                                    height={40}
                                                />
                                            </div>
                                        )}
                                    </li>
                                </Link>
                            );
                        })}
                    </ul>
                </>
            ) : (
                <h2>You have not finished any topic yet</h2>
            )}
        </section>
    );
}
