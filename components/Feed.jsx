import UserStories from './UserStories';
import InputBox from './InputBox';

function Feed() {
    return (
        <div className='flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto'>
            <div className='mx-auto max-w-md md:max-w-lg lg:max-w-2xl'>
                <UserStories />
                <InputBox />
            {/*USER POSTS*/}
            </div>
        </div>
    );
}

export default Feed;
