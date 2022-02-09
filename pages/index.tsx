import { Fragment } from "react";
import Head from "next/head";
import Hero from "@/components/home-page/hero";
import FeaturedPosts from "@/components/home-page/featured-posts";
import { getFeaturedPosts } from "@/lib/posts-util";

interface HomePageProps {
  posts: any;
}

const HomePage: FC<HomePageProps> = ({ posts }) => {
  return (
    <Fragment>
      <Head>
        <title>AllAboutNext</title>
        <meta
          name="description"
          content="I blog about demigod childrens of greek gods and goddesses."
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
};

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
