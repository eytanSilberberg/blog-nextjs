import Link from "next/link"
import classes from './post.preview.module.css'
import Image from 'next/image'

function PostPreview(props) {
    const { title, image, excerpt, date, slug } = props.post
    console.log(slug);
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    return <li className={classes.post}>
        <Link href={`/posts/${slug}`}>
            <a>
                <div className={classes.image}>
                    <Image src={`/images/posts/${slug}/${image}`} alt={title} width={300} height={200} layout='responsive' />
                </div>
                <div className={classes.content}>
                    <h3>{title}</h3>
                    <time>{formattedDate}</time>
                    <p>{excerpt}</p>
                </div>
            </a>
        </Link>
    </li>
}

export default PostPreview