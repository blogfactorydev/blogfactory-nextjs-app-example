"use client";

import { BlogFactoryNextJS } from "@blogfactory/nextjs";
import Link from "next/link";

const { PostPage } = new BlogFactoryNextJS(
  process.env.NEXT_PUBLIC_BLOGFACTORY_PROJECT_ID as string
).app;

type Props = { params: { slug: string } };

function BlogPostPage(props: Props) {
  return (
    <div>
      <div style={{ margin: "0.5rem" }}>
        <Link href="/blog">{"< Blog"}</Link>
      </div>
      <div className="prose max-w-full">
        <PostPage {...props} />
      </div>
    </div>
  );
}

export default BlogPostPage;
