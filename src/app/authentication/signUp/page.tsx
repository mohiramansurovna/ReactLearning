'use client';
import {TypeUser} from '@/Types';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import React, {useEffect, useState} from 'react';
import mainLink from '@/MainLink';
export default function SignUp() {
    const router = useRouter();
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmed, setConfirmed] = useState('');
    const [error, setError] = useState('');
    const [create, setCreate] = useState(false);
    async function createAccount() {
        const responce = await fetch(`${mainLink}/authentication/data`, {
            headers: {
                Authorization: '"icantopenwithoutit"',
            },
        });
        const users: TypeUser[] = await responce.json();

        if (users.some((item) => item.email === email)) {
            setError('There is already an account with this email');
        } else if (users.some((item) => item.userName === userName)) {
            setError('There is already an account with this user name');
        } else if (password !== confirmed) {
            setError('Password and confirmed password are not the same');
        } else {
            fetch(`${mainLink}/authentication/data`, {
                headers: {
                    Authorization: '"icantopenwithoutit"',
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify({
                    userName: userName,
                    password: password,
                    email: email,
                    photoURL: 'smthwillbehere',
                    saved: {
                        js: [],
                        react: [],
                        next: [],
                    },
                }),
            });
            router.push('/authentication/signIn');
        }
    }
    useEffect(() => {
        if (email !== '') {
            createAccount();
        }
    }, [create]);
    return (
        <form>
            <h1>Sign Up</h1>
            <p>{error}</p>
            <legend>User Name</legend>
            <input
                onChange={(e) => {
                    setUserName(e.target.value);
                }}
                type='text'
                placeholder='iLoveReact'
            />
            <legend>Email</legend>
            <input
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
                type='email'
                placeholder='example@mail.com'
            />
            <legend>Password</legend>
            <input
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
                type='password'
            />
            <legend>Confirm password</legend>
            <input
                onChange={(e) => {
                    setConfirmed(e.target.value);
                }}
                onKeyPress={(e) =>
                    e.key === 'Enter' ? setCreate(create === true ? false : true) : null
                }
                type='password'
            />
            <div>
                <button>Cancel</button>
                <button
                    onClick={() => {
                        setCreate(create === true ? false : true);
                    }}
                    type='button'>
                    Create Account
                </button>
            </div>
            <p>
                Already has account <Link href='/authentication/signIn'>Sign In</Link>
            </p>
        </form>
    );
}
