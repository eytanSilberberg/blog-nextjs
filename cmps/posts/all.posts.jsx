import classes from './all.post.module.css'
import PostGrid from './post.grid';

function AllPosts({ posts }) {


    return <section className={classes.posts}>
        <h1>All posts</h1>
        <PostGrid posts={posts} />
    </section>
}
export default AllPosts;