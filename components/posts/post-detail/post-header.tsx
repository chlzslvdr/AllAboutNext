import { FC } from "react";
import Image from "next/image";
import classes from "./post-header.module.css";

interface PostHeaderProps {
  title: string;
  image: any;
}

const PostHeader: FC<PostHeaderProps> = ({ title, image }) => {
  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <div className={classes.imageContainer}>
        <Image src={image} alt={title} width={200} height={150} />
      </div>
    </header>
  );
};

export default PostHeader;
