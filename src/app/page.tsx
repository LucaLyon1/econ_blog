import Articles from "@/components/Articles";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="w-4/5 md:w-3/4 lg:w-1/2 flex flex-col m-auto">
      <Hero />
      <Articles />
    </div>
  );
}
