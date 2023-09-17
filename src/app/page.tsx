import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div style={{ margin: "0.5rem" }}>
        <Link href="/blog">{"View Blog"}</Link>
      </div>
    </main>
  );
}
