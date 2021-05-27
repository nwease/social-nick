import Image from 'next/image'

function Post({name, email, image, postImage, timestamp, message}) {
    return (
        <div className='flex flex-col'>
            <div className='p-5 bg-white mt-5 rounded-t-2xl shadow-sm'>
                <div className='flex items-center space-x-2'>
                    <img
                        className='rounded-full'
                        src={image}
                        alt='Images'
                        width={40}
                        height={40}
                    />

                    <div>
                        <p className='font-medium'>
                            {name}
                        </p>

                        <p className='text-xs text-gray-400'>
                            {
                                new Date(timestamp?.toDate()).toLocaleString()
                            }
                        </p>
                    </div>
                </div>

                <p className='pt-4'>
                    {message}
                </p>
            </div>

            {
                postImage && (
                    <div className='relative h-56 md:h-96 bg-white'>
                        <Image
                            src={postImage}
                            layout='fill'
                            objectFit='cover'
                        />
                    </div>
                )
            }

        {/*FOOTER OF POST*/}
            <div className='flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t'>
                <div>

                </div>

                <div>

                </div>

                <div>

                </div>
            </div>
        </div>
    );
}

export default Post;
