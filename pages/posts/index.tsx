import { FC, Fragment } from "react";
import SEO from "@/components/seo/index";
import AllPosts from "@/components/posts/all-posts";
import { getAllPosts } from "@/lib/posts-util";

interface AllPostsPageProps {
  posts: any;
}

const AllPostsPage: FC<AllPostsPageProps> = ({ posts }) => {
  return (
    <Fragment>
      <SEO
        title={post.title}
        description="A list of all programming-related tutorials and posts!"
      />

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
