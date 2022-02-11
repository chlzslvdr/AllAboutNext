import { FC } from "react";
import SEO from "@/components/seo/index";
import { Fragment } from "react";
import PostContent from "@/components/posts/post-detail/post-content";
import { getPostsFiles, getPostData } from "@/lib/posts-util";

interface PostDetailPageProps {
  post: any;
}

const PostDetailPage: FC<PostDetailPageProps> = ({ post }) => {
  return (
    <Fragment>
      <SEO title={post.title} description={post.excerpt} />
      <PostContent post={post} />
    </Fragment>
  );
};

export function getStaticProps(context: any) {
  const { slug } = context.params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 1800,
  };
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default PostDetailPage;
