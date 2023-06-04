export const revalidate = 420;

interface IBlog {
  title: string;
  slug: string;
  content: string;
}

interface IProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const response = await fetch("http://localhost:3000/api/content");
  const blogs: IBlog[] = await response.json();

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogSlug({ params }: IProps) {
  const response = await fetch("http://localhost:3000/api/content");
  const blogs: IBlog[] = await response.json();
  const blog = blogs.find((blog) => blog.slug === params.slug);

  return (
    <div className="max-w-xl px-2 py-24 mx-auto">
      <h1 className="mb-2 text-2xl">{blog?.title}</h1>
      <div>{blog?.content}</div>
    </div>
  );
}
