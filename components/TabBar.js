import Link from "next/link";
import { useRouter } from "next/router";

export default function TabBar({ entries }) {
  const router = useRouter();
  const { categorySlug } = router.query;

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
