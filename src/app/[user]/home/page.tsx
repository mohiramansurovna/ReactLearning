import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
export default function Home() {
    const links = [
        {
            name: 'JS',
            href: `js`,
            img: '/js.svg',
        },
        {
            name: 'React',
            href: `react`,
            img: '/react.svg',
        },
        {
            name: 'Next',
            href: `next`,
            img: '/next.svg',
        },
    ];
    return (
        <main>
            {links.map((link, index) => {
                return (
                    <Link
                        key={index}
                        className='home'
                        href={link.href}>
                        <Image
                            alt='logo'
                            width={250}
                            height={200}
                            src={link.img}
                        />
                    </Link>
                );
            })}
        </main>
    );
}
