import Link from "next/link";

export default function TabBar({ entries }) {
  const categories = new Set(entries.map((entry) => entry.category));

  return (
    <nav>
      {Array.from(categories).map((category) => (
        <Link key={category} href={`/category/${category.categorySlug}`}>
          {category}
        </Link>
      ))}
    </nav>
  );
}
