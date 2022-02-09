import { FC } from "react";
import PostItem from "./post-item";
import classes from "./posts-grid.module.css";

interface PostGridProps {
  posts: any;
}

const PostGrid: FC<PostGridProps> = ({ posts }) => {
  return (
    <ul className={classes.grid}>
      {posts.map((post: any) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};

export default PostGrid;
