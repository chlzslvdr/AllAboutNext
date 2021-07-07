import AllPosts from "../../components/posts/all-posts";

const DUMMY_POSTS = [
  {
    slug: "getting-started-nextjs",
    title: "Getting Started NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next. js is a React Framework used for front-end development that enables us to use functionalities such as generating static websites and server-side rendering for React-based web applications",
    date: "2021-05-14",
  },
  {
    slug: "getting-started-nextjs2",
    title: "Getting Started NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next. js is a React Framework used for front-end development that enables us to use functionalities such as generating static websites and server-side rendering for React-based web applications",
    date: "2021-05-14",
  },
  {
    slug: "getting-started-nextjs3",
    title: "Getting Started NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next. js is a React Framework used for front-end development that enables us to use functionalities such as generating static websites and server-side rendering for React-based web applications",
    date: "2021-05-14",
  },
  {
    slug: "getting-started-nextjs4",
    title: "Getting Started NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next. js is a React Framework used for front-end development that enables us to use functionalities such as generating static websites and server-side rendering for React-based web applications",
    date: "2021-05-14",
  },
];

function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}

export default AllPostsPage;
