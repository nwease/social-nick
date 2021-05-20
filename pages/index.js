import Head from 'next/head'
import Header from '../components/Header';
import {getSession} from 'next-auth/client';
import Login from '../components/Login';
import SideBar from '../components/SideBar';
import Feed from '../components/Feed';

export default function Home({session}) {

    if(!session) return <Login />;

    return (
        <div className='h-screen bg-gray-100 overflow-hidden'>
            <Head>
                <title>
                    Social Nick
                </title>

                <link rel='icon' href='/facebook.png' />
            </Head>

            <Header />

            <main className='flex'>
                <SideBar />
                <Feed />
            {/*CONTACTS*/}
            </main>
        </div>
    )
}

export async function getServerSideProps(context) {
    const session = await getSession(context);

    return {
        props: {
            session
        }
    }
}
