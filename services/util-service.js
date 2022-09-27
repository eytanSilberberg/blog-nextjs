
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postDirectory = path.join(process.cwd(), 'data/posts')

export function getPostFiles() {
    return fs.readdirSync(postDirectory)
}

export function getAllPost() {
    const postFiles = getPostFiles()

    const allPosts = postFiles.map(postFile => {
        return getPost(postFile)
    })
    const sortedPostsArray = allPosts.sort((postA, postB) => postA.date > postB ? -1 : 1)
    return sortedPostsArray

}

export function getFeaturedEvents() {
    const allPosts = getAllPost()
    const featuredPosts = allPosts.filter(post => post.isFeatured)
    return featuredPosts
}


export function getPost(fileIdentifier) {
    const postSlug = fileIdentifier.replace(/\.md$/, '')//removes the file extension
    const filePath = path.join(postDirectory, `${postSlug}.md`)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent)

    const postData = { slug: postSlug, ...data, content }
    return postData
}

