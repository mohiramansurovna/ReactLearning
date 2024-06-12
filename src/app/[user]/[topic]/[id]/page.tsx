import React from 'react';
import Main from './Main';
import mainLink from '@/MainLink';
export default async function Learning({params}: {params: {id: number, user:string; topic:string}}) {
    const responce = await fetch(`${mainLink}/data?query=${params.topic}`);
    const js = await responce.json();
    return (
        <>
            <Main
                id={params.id}
                user={params.user}
                js={js}
            />
        </>
    );
}
