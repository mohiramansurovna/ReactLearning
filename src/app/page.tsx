import Link from 'next/link';
import logo from '@/assets/Logo.png';
import Image from 'next/image';
import {HrefLink} from '@/Types';
export default function HomePage() {
    const links: HrefLink[] = [
        {name: 'Sign Up', href: '/authentication/signUp'},
        {name: 'Sign In', href: '/authentication/signIn'},
    ];
    return (
        <>
            <header>
                <Image
                    src={logo}
                    alt='Logo'
                    width={192}
                    height={56}
                />
                <nav>
                    {links.map((link: HrefLink, index: number) => {
                        return (
                            <Link
                                key={index}
                                href={link.href}>
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
            </header>
            <main>
                <h1>This is main page</h1>
            </main>
        </>
    );
}
