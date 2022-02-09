import { FC } from "react";
import Head from "next/head";
import { Fragment } from "react";
import AllPosts from "@/components/posts/all-posts";
import { getAllPosts } from "@/lib/posts-util";

interface AllPostsPageProps {
  posts: any;
}

const AllPostsPage: FC<AllPostsPageProps> = ({ posts }) => {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials and posts!"
        />
      </Head>
      <AllPosts posts={posts} />
    </Fragment>
  );
};

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
