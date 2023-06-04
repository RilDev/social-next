import Link from "next/link";

interface IBlog {
  title: string;
  slug: string;
  content: string;
}

export default async function Blog() {
  const response = await fetch("http://localhost:3000/api/content");
  const blogs: IBlog[] = await response.json();

  return (
    <div className="max-w-xl px-2 py-24 mx-auto">
      <h1 className="mb-2 text-2xl">Blog</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.slug}>
            <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
