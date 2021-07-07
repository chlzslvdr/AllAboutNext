import Image from "next/image";
import Link from "next/link";
import getFormattedDate from "../../common/methods/getFormattedDate";
import classes from "./post-item.module.css";

function PostItem(props) {
  const { title, image, excerpt, date, slug } = props.post;

  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <li className={classes.post}>
      <Link href={linkPath} passHref>
        <a>
          <div className={classes.image}>
            <Image
              src={imagePath}
              alt={title}
              width={300}
              height={200}
              layout="responsive"
            />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{getFormattedDate(date)}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default PostItem;
