import Image from 'next/image';
import {signIn} from 'next-auth/client';

function Login() {
    return (
        <div className='mt-32 grid justify-items-center'>
            <Image
                src='/fb_logo.svg'
                height={300}
                width={300}
                objectFit='contain'
            />

            <h1
                onClick={signIn}
                className='mt-24 p-5 bg-blue-500 rounded-full text-white text-center w-1/6 cursor-pointer'
            >
                Login with Facebook
            </h1>
        </div>
    );
}

export default Login;
