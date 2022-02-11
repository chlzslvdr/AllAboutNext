import { FC, Fragment } from "react";
import SEO from "@/components/seo/index";
import Hero from "@/components/home-page/hero";
import FeaturedPosts from "@/components/home-page/featured-posts";
import { getFeaturedPosts } from "@/lib/posts-util";

interface HomePageProps {
  posts: any;
}

const HomePage: FC<HomePageProps> = ({ posts }) => {
  return (
    <Fragment>
      <SEO
        title="AllAboutNext"
        description="I blog about demigod childrens of greek gods and goddesses."
      />
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
