import PostHeader from "./post-header";

const DUMMY_POST = {
  slug: "getting-started-nextjs",
  title: "Getting Started NextJS",
  image: "getting-started-nextjs.png",
  date: "2021-05-14",
  content: "# This is a first post",
};

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.image}`;

  return (
    <article>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      CONTENT
    </article>
  );
}

export default PostContent;
