import UserStories from './UserStories';
import InputBox from './InputBox';
import UserPosts from './UserPosts';

function Feed({posts}) {
    return (
        <div className='flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto scrollbar-hide'>
            <div className='mx-auto max-w-md md:max-w-lg lg:max-w-2xl'>
                <UserStories />
                <InputBox />
                <UserPosts posts={posts} />
            </div>
        </div>
    );
}

export default Feed;
