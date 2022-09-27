import AllPosts from "../../cmps/posts/all.posts";
import { getAllPost } from "../../services/util-service";


function AllPostsPage({ posts }) {
    return <AllPosts posts={posts} />
}

export function getStaticProps() {
    const allPosts = getAllPost()
    return {
        props: {
            posts: allPosts
        }
    }
}

export default AllPostsPage;