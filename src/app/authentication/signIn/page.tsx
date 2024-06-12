'use client';

export const fetchCache = 'default-cache';
import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import {TypeUser} from '@/Types';
import mainLink from '@/MainLink';
export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [create, setCreate] = useState<boolean>();
    async function signIn() {
        const usersJSON = await fetch(`${mainLink}/authentication/data`, {
            headers: {
                Authorization: '"icantopenwithoutit"',
            },
        });
        const users: TypeUser[] = await usersJSON.json();
        if (email !== '') {
            users.some((item) => {
                if (item.email === email) {
                    if (item.password === password) {
                        window.location.assign(`/${item.userName}/home`);
                    } else {
                        setError('Incorrect password');
                    }
                } else {
                    setError("Email wasn't found. Please Sign Up");
                }
            });
        }
    }
    useEffect(() => {
        signIn();
    }, [create]);
    return (
        <form>
            <h1>Sign In :)</h1>
            <p>{error}</p>
            <legend>Email</legend>
            <input
                onChange={(e) => setEmail(e.target.value)}
                type='email'
                placeholder='example@mail.com'
            />
            <legend>Password</legend>
            <input
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) =>
                    e.key === 'Enter' ? setCreate(create === true ? false : true) : null
                }
                type='password'
            />
            <div>
                <button>Cancel</button>
                <button
                    type='button'
                    onClick={() => {
                        setCreate(create === true ? false : true);
                    }}>
                    Sign In
                </button>
            </div>
            <p>
                Already has account <Link href='/authentication/signUp'>Sign Up</Link>
            </p>
        </form>
    );
}
