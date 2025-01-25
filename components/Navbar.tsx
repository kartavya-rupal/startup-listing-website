import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { auth, signIn, signOut } from '@/auth'
import { BadgePlus, LogOut } from 'lucide-react';
import { Avatar, AvatarFallback } from '@radix-ui/react-avatar';
import { AvatarImage } from './ui/avatar';


const Navbar = async () => {
    const session = await auth()
    // console.log(session?.id)
    return (
        <header className='px-5 py-2 bg-white shadow-sm font-work-sans'>
            <nav className='flex justify-between items-center'>
                <Link href="/">
                    <span className='flex items-center text-[25px] ml-4'>
                        <span className='font-extrabold text-customPink'>Inno</span>
                        <span className='font-extrabold text-black'>Vault</span>
                    </span>

                </Link>

                <div className='flex items-center gap-5 text-black'>
                    {session && session?.user ? (
                        <>
                            <Link href="/startup/create">
                                <span className='max-sm:hidden'>Create</span>
                                <BadgePlus className='size-6 sm:hidden' />
                            </Link>

                            <form
                                action={async () => {
                                    'use server';
                                    await signOut({ redirectTo: '/' })
                                }}>
                                <button type='submit'>
                                    <span className='max-sm:hidden'>Logout</span>
                                    <LogOut className='size-6 sm:hidden text-red-500' />
                                </button>
                            </form>

                            <Link href={`/user/${session?.id}`}>
                                <span className='flex items-center'>{session?.user?.name}</span>
                            </Link>
                            
                        </>
                    ) : (
                        <form
                            action={async () => {
                                'use server';
                                await signIn({ provider: 'github' });
                            }}
                        >
                            <button type='submit'>Login</button>
                        </form>
                    )}
                </div>
            </nav>
        </header>
    );
};


export default Navbar
