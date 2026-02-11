import { Hero } from "@/components/home/Hero";
import { CategoryGrid } from "@/components/home/CategoryGrid";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <CategoryGrid />
    </div>
  );
}
