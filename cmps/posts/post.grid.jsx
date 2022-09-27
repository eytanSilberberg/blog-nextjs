import PostPreview from './post.preview'
import classes from './post.grid.module.css'

function PostGrid(props) {
    const { posts } = props
    return <ul className={classes.grid}>
        {posts.map(post => <PostPreview key={post.slug} post={post} />)}
    </ul>
}
export default PostGrid