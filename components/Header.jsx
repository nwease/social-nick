import Image from 'next/image'
import {SearchIcon, FlagIcon, PlayIcon, ShoppingCartIcon} from '@heroicons/react/outline';
import {BellIcon, ChatIcon, ChevronDownIcon, HomeIcon, UserGroupIcon, ViewGridIcon} from '@heroicons/react/solid';
import HeaderIcons from './HeaderIcons';
import {signOut, useSession} from 'next-auth/client';

function Header() {

    const [session] = useSession();

    return (
        <div className='sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md'>
        {/*HEADER-LEFT*/}
            <div className='flex items-center'>
                <Image
                    src='/Facebook-Pic.svg'
                    alt='Facebook'
                    width={40}
                    height={40}
                    layout='fixed'
                />

                <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'>
                    <SearchIcon className='h-6 text-gray-600' />

                    <input
                        className='hidden md:inline-flex ml-2 bg-transparent items-center focus:outline-none flex-shrink'
                        type='text'
                        placeholder='Search Facebook'
                    />
                </div>
            </div>

        {/*HEADER-CENTER*/}
            <div className='flex justify-center flex-grow'>
                <div className='flex space-x-6 md:space-x-2'>
                    <HeaderIcons active Icon={HomeIcon} />
                    <HeaderIcons Icon={FlagIcon} />
                    <HeaderIcons Icon={PlayIcon} />
                    <HeaderIcons Icon={ShoppingCartIcon} />
                    <HeaderIcons Icon={UserGroupIcon} />
                </div>
            </div>

        {/*HEADER-RIGHT*/}
            <div className='flex items-center sm:space-x-2 justify-end'>
            {/*PROFILE PIC*/}
                <Image
                    onClick={signOut}
                    className='rounded-full cursor-pointer'
                    src={session.user.image}
                    width={40}
                    height={40}
                    layout='fixed'
                />

                <p className='whitespace-nowrap font-semibold pr-3'>
                    {session.user.name}
                </p>

                <ViewGridIcon className='icon' />
                <ChatIcon className='icon' />
                <BellIcon className='icon' />
                <ChevronDownIcon className='icon' />
            </div>
        </div>
    );
}

export default Header;
