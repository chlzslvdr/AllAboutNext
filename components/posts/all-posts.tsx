import { FC } from "react";
import PostsGrid from "./posts-grid";
import classes from "./all-posts.module.css";

interface AllPostsProps {
  posts: string;
}

const AllPosts: FC<AllPostsProps> = ({ posts }) => {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default AllPosts;
