import PostContent from "../../cmps/posts/post-details/post.content";
import { getPost, getPostFiles } from "../../services/util-service";
function PostDetails({ post }) {
    return <PostContent post={post} />
}

export function getStaticProps(context) {
    const { params } = context
    const { slug } = params
    const postData = getPost(slug)

    return {
        props: {
            post: postData
        },
        revalidate: 600
    }
}

export function getStaticPaths() {
    const postFileNames = getPostFiles()
    const slugs = postFileNames.map(fileName => fileName.replace(/\.md$/, ''))
    return {
        paths: slugs.map(slug => ({ params: { slug } })),
        fallback: false
    }
}

export default PostDetails;