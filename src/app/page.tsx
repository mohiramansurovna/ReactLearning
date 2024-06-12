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
            <section className='flex flex-col h-[300vh] pt-[100px]'>
                <div className='h-full w-full bg-[#71b69c] px-[32%] flex flex-col justify-center align-middle gap-5'>
                    <p className='font-bold font-sans text-black text-nowrap text-[35px]'>Hello Sabrina Happy Birthday</p>
                    <Image
                    className='ml-24'
                        width={240}
                        height={300}
                        src={`./images/catsatisfied.svg`}
                        alt='satisfied cat'
                    />
                </div>
                <div className='h-full w-full bg-[#71aeb6] pl-[23%] flex flex-col justify-center align-middle gap-5'>
                    <p className='font-bold font-sans text-black text-[35px]' >I hope u will like this web, even design is shabby</p>
                    <Image
                    className='ml-64'
                        width={240}
                        height={300}
                        src={`./images/catlol.svg`}
                        alt='lol cat'
                    />
                </div>
                <div className='h-full w-full bg-[#71a0b6] pl-[30%] flex flex-col justify-center align-middle gap-5'>
                    <p className='font-bold font-sans text-black text-[35px]'>Sorry I could not make it responsive</p>
                    <Image
                    className='ml-28'
                        width={240}
                        height={300}
                        src={`./images/catweary.svg`}
                        alt='weary cat'
                    />
                    <p className='font-bold font-sans ml-5 text-black text-[35px]'>If u find bugs please tell me</p>
                </div>
            </section>
        </>
    );
}
