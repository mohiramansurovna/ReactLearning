import React from 'react';
import Link from 'next/link';
import { Topics } from '@/Types';
export default function FinishedTopics({saved, topic, url}: {saved: string[][]; topic: Topics[], url:string;}) {
    
    return (
        <section className='finishedTopics'>
            <h2>Your finished topics</h2>
            <ul>
                {saved[0] ? (
                    saved.map((item, index: number) => {
                        return (
                            <Link
                                key={index}
                                href={`${url}/${item[0]}`}>
                                <li>
                                    <p>{topic ? topic[parseInt(item[0])]? topic[parseInt(item[0])][0] : null:'there is a problem with fetching data pls wait or refresh'}</p>
                                    {item[1] === '1' ? (
                                        <div>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-regular fa-star'></i>
                                            <i className='fa-regular fa-star'></i>
                                            <i className='fa-regular fa-star'></i>
                                            <i className='fa-regular fa-star'></i>
                                        </div>
                                    ) : item[1] === '2' ? (
                                        <div>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-regular fa-star'></i>
                                            <i className='fa-regular fa-star'></i>
                                            <i className='fa-regular fa-star'></i>
                                        </div>
                                    ) : item[1] === '3' ? (
                                        <div>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-regular fa-star'></i>
                                            <i className='fa-regular fa-star'></i>
                                        </div>
                                    ) : item[1] === '4' ? (
                                        <div>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-regular fa-star'></i>
                                        </div>
                                    ) : (
                                        <div>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                            <i className='fa-solid fa-star'></i>
                                        </div>
                                    )}
                                </li>
                            </Link>
                        );
                    })
                ) : (
                    <h2>You haven't finished any topic yet</h2>
                )}
            </ul>
        </section>
    );
}
