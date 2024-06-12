'use client';
import mainLink from '@/MainLink';
import {AllTopics, Topics, TypeSaved, TypeUser} from '@/Types';
import {useEffect, useState} from 'react';
import FinishedTopics from './FinishedTopics';

export default function Learning({params}: {params: {user: string; topic: string}}) {
    const [topic, setTopic] = useState<Topics[]>();
    const [saved, setSaved] = useState<TypeSaved | undefined>();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    async function fetchedData() {
        try {
            const responce = await fetch(`${mainLink}/authentication/data/`, {
                cache: 'force-cache',
                headers: {
                    'Authorization': '"icantopenwithoutit"',
                },
            });
            if (!responce.ok) {
                throw new Error('Problem with responce');
            }
            const users = await responce.json();
            users.map((user: TypeUser) => {
                if (user.userName == params.user) {
                    setSaved(user.saved);
                }
            });
            const responceJS = await fetch(`${mainLink}/data?query=${params.topic}`);
            
            if (!responceJS.ok) {
                throw new Error('Preblem with responce');
            }
            const topics:Topics[] = await responceJS.json();
            setTopic(topics)
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message.toString());
            } else {
                setError('Unknown problem occured');
            }
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchedData();
    }, []);
    if (loading === false && topic) {
        if (params.topic == 'js') {
            return <FinishedTopics
                saved={saved ? saved.js : []}
                topic={topic}
                url='js'
            />;
        } else if (params.topic == 'react') {
            return <FinishedTopics
                saved={saved ? saved.react : []}
                topic={topic}
                url='react'
            />;
        }else if (params.topic == 'next') {
            return <FinishedTopics
                saved={saved ? saved.next : []}
                topic={topic}
                url='next'
            />;
        } 
    } else if (error) {
        <section>
            <h2>{error}</h2>
        </section>;
    } else {
        return (
            <section className='finishedTopics'>
                <h2 id='results'>Loading... your learned topics</h2>
            </section>
        );
    }
}
