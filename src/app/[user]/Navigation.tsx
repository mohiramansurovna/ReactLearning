'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '@/assets/Logo.png';
import {usePathname} from 'next/navigation';
import mainLink from '@/MainLink';
import { TypeUser } from '@/Types';
export default function Navigation({user, topic}: {user: string; topic?: string}) {
    const [photoURL, setPhotoURL]=useState<string>()
    async function DataFetch() {
        const responce= await fetch(`${mainLink}/authentication/data?user=${user}`)
        const userJSON:TypeUser=await responce.json();
        setPhotoURL(userJSON.photoURL)
    }
    useEffect(()=>{
        DataFetch()
    },[])
    const pathname = usePathname();
    const links = [
        {
            name: ':)  Home',
            href: `/${user}/home`,
        },
        {
            name: 'Your Learning',
            href: `/${user}/${topic}`,
        },
        {
            name:'Profile',
            href:`/${user}/editProfile`
        },
        {
            name: 'About (;',
            href: `/${user}/about`,
        },
        {
            name: 'Sign out',
            href: '/',
        },
    ];
    return (
        <header>
            <Image
                src={logo}
                alt='Logo'
                width={192}
                height={56}
            />
            <nav>
                {links.map((link) => {
                    const isActive = pathname.startsWith(link.href);
                    if (!(!topic && link.name === 'Your Learning')) {
                        return (
                            <Link
                                className={isActive ? ' active' : ''}
                                key={link.name}
                                href={link.href}>
                                {link.name}
                            </Link>
                        );
                    }
                })}
                <Image src={photoURL?photoURL:'https://files.edgestore.dev/2buizor9f52z0fnh/myPublicImages/_public/3fcfb0e7-c5e3-43f1-a295-768f922172df.jpg'} width={70} height={70} alt='profile photo'/>
            </nav>
        </header>
    );
}
