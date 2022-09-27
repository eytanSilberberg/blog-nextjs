import Hero from "../cmps/home-page/hero";
import { Fragment } from "react";
import FeaturedPosts from "../cmps/home-page/featured.posts";
import { getFeaturedEvents } from "../services/util-service";

function HomePage({ posts }) {

    return <Fragment>
        <Hero />
        <FeaturedPosts posts={posts} />
    </Fragment>
}

export function getStaticProps() {
    const featuredEvents = getFeaturedEvents()
    return {
        props: {
            posts: featuredEvents
        }
    }
}

export default HomePage;

