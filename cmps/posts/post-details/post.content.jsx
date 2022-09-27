import classes from './post.content.module.css'
import PostHeader from './post.header'

import ReactMarkdown from 'react-markdown'

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css'

SyntaxHighlighter.registerLanguage('js', js)
SyntaxHighlighter.registerLanguage('css', css)


function PostContent({ post }) {

    const customRenderers = {
        code(code) {
            const { className, children } = code
            const language = className.split('-')[1]
            return (
                <SyntaxHighlighter
                    style={atomDark}
                    language={language}
                    children={children}
                />
            );

        }
    }

    const { title, image, slug, content } = post
    console.log(slug);

    // const customRenderers = {
    //     image(image) {
    //         console.log(image.src);
    //         return (
    //             <Image src={`/images/posts/${slug}}/${image.src}`} alt={image.alt} width={600} height={300} />
    //         )
    //     }
    // }
    const imagePath = `/images/posts/${slug}/${image}`
    return <article className={classes.content}>
        <PostHeader title={title} image={imagePath} />
        <ReactMarkdown components={customRenderers}>{content}</ReactMarkdown>
    </article>
}
export default PostContent