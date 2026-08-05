import { researchAreas } from "@/data/research-areas";
import Link from "next/link";
import Image from "next/image";

export default function ResearchOverview() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
      <div className="max-w-2xl mb-12">
        <div className="uppercase tracking-[3px] text-xs text-accent font-medium mb-3">OUR SCIENCE</div>
        <h1 className="text-5xl tracking-[-2.4px] font-semibold mb-4">Research Areas</h1>
        <p className="text-lg text-muted-foreground text-justify">
          The Alle Lab integrates chemical biology, medicinal chemistry, and structural biology 
          to address challenging problems in drug discovery.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {researchAreas.map((area) => {
          const Icon = area.icon;
          return (
            <Link 
              key={area.slug} 
              href={`/research/${area.slug}`}
              className="group block border border-border rounded-2xl overflow-hidden hover:border-accent/60 transition-colors"
            >
              {area.image && (
                <div className="relative w-full aspect-[16/9]">
                  <Image 
                    src={area.image} 
                    alt={area.title} 
                    fill 
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-3 md:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-muted/40 group-hover:bg-accent/5 transition-colors">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <h2 className="text-2xl font-semibold tracking-tight group-hover:text-accent transition-colors">
                    {area.title}
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  {area.shortDescription}
                </p>
                <div className="mt-6 text-sm font-medium text-accent text-justify">
                  Explore this area →
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
