import {useCollection} from 'react-firebase-hooks/firestore';
import {db} from '../firebase';
import Post from './Post';

function UserPosts() {

    const [realTimePosts] = useCollection(
        db.collection('posts')
            .orderBy('timestamp', 'desc')
    )

    return (
        <div>
            {
                realTimePosts?.docs.map(post => (
                    <Post
                        key={post.id}
                        name={post.data().name}
                        email={post.data().email}
                        timestamp={post.data().timestamp}
                        image={post.data().image}
                        postImage={post.data().postImage}
                    />
                ))
            }
        </div>
    );
}

export default UserPosts;
