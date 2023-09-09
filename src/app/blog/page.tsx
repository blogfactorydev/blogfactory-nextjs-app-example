"use client";

import { BlogFactoryNextJS } from "@blogfactory/nextjs";
import { useEffect, useState } from "react";
import Link from "next/link";

const blogFactory = new BlogFactoryNextJS(
  process.env.NEXT_PUBLIC_BLOGFACTORY_PROJECT_ID as string
).app;

export default function Blog() {
  const [posts, setPosts] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await blogFactory.listPosts();

        setPosts(data?.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ margin: "2rem" }}>
      <h2 className="mb-5">Blog</h2>
      {posts.map((p: any) => (
        <Link
          href={`/blog/${p.urlSlug}`}
          key={p.id}
          style={{ textDecoration: "underline" }}
        >
          {p.title}
        </Link>
      ))}
    </div>
  );
}
