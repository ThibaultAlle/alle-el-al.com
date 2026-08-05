"use client";

import React, { useState, useMemo } from "react";
import { Search, ExternalLink, Download, Filter } from "lucide-react";
import publicationsData from "@/data/publications.json";

interface Publication {
  id: string;
  year: number;
  title: string;
  authors: string;
  journal: string;
  volume: string;
  pages: string;
  doi: string;
  link: string;
  pdf?: string;           // Local PDF path, e.g. "/publications/2025-paper.pdf"
  type: "research" | "review";
  highlight?: boolean;
}

export function Publications() {
  const [searchQuery, setSearchQuery] = useState("");
  const [yearFilter, setYearFilter] = useState<number | "all">("all");
  const [typeFilter, setTypeFilter] = useState<"all" | "research" | "review">("all");

  const publications = publicationsData as Publication[];

  const years = useMemo(() => {
    const uniqueYears = Array.from(new Set(publications.map(p => p.year))).sort((a, b) => b - a);
    return uniqueYears;
  }, [publications]);

  const filteredPublications = useMemo(() => {
    return publications
      .filter((pub) => {
        const matchesSearch = 
          pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          pub.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
          pub.journal.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesYear = yearFilter === "all" || pub.year === yearFilter;
        const matchesType = typeFilter === "all" || pub.type === typeFilter;

        return matchesSearch && matchesYear && matchesType;
      })
      .sort((a, b) => b.year - a.year);
  }, [publications, searchQuery, yearFilter, typeFilter]);

  // Split into two sections
  const recentPublications = useMemo(
    () => filteredPublications.filter((p) => p.year >= 2026),
    [filteredPublications]
  );

  const priorPublications = useMemo(
    () => filteredPublications.filter((p) => p.year < 2026),
    [filteredPublications]
  );

  return (
    <section id="publications" className="max-w-7xl mx-auto px-6 py-20 md:py-28 border-b border-border/60">
      <div className="max-w-2xl mb-10">
        <div className="uppercase tracking-[3px] text-xs text-accent font-medium mb-3">OUR WORK</div>
        <h2 className="section-heading text-3xl md:text-5x1 tracking-[-2.4px] font-semibold mb-3 flex items-center gap-3">
          Publications
          <span className="rounded-full bg-muted px-3 py-1 text-sm font-medium text-muted-foreground align-middle">
            {filteredPublications.length}
          </span>
        </h2>
        <p className="text-base md:text-lg text-muted-foreground">
          Peer-reviewed work from the laboratory. Publications are organized by recency.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-3 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-3.5 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search titles, authors, or journals..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input w-full bg-background border border-input pl-11 h-11 rounded-md text-sm placeholder:text-muted-foreground focus-visible-ring"
          />
        </div>

        <div className="flex gap-3">
          <div className="relative">
            <select
              value={yearFilter}
              onChange={(e) => setYearFilter(e.target.value === "all" ? "all" : parseInt(e.target.value))}
              className="h-11 border border-input bg-background rounded-md px-4 pr-9 text-sm appearance-none focus-visible-ring"
            >
              <option value="all">All Years</option>
              {years.map((y) => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
            <Filter className="absolute right-3 top-3.5 h-4 w-4 text-muted-foreground pointer-events-none" />
          </div>

          <div className="relative">
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value as "all" | "research" | "review")}
              className="h-11 border border-input bg-background rounded-md px-4 pr-9 text-sm appearance-none focus-visible-ring"
            >
              <option value="all">All Types</option>
              <option value="research">Research Articles</option>
              <option value="review">Reviews</option>
            </select>
          </div>
        </div>
      </div>

      {/* Publications List - Split into sections */}

      {/* Recent Publications (2026 and later) */}
      {recentPublications.length > 0 && (
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <h3 className="flex items-center gap-2 text-xl font-semibold tracking-tight">
              Recent Publications
              <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                {recentPublications.length}
              </span>
            </h3>
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs text-muted-foreground font-mono tracking-widest">2026 – PRESENT</span>
          </div>

          <div className="space-y-3">
            {recentPublications.map((pub) => {
              const handleCardClick = () => {
                window.open(pub.link, "_blank", "noopener,noreferrer");
              };

              return (
                <div
                  key={pub.id}
                  onClick={handleCardClick}
                  className="publication-card group cursor-pointer border border-border rounded-xl p-6 md:p-7 hover:border-accent/70 bg-card transition-colors"
                >
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                    <span className="font-mono text-xs tracking-widest text-muted-foreground">{pub.year}</span>
                    <span className="text-xs px-2.5 py-px rounded bg-muted text-muted-foreground">{pub.journal}</span>
                    {pub.highlight && (
                      <span className="text-xs px-2.5 py-px rounded bg-accent/10 text-accent">Highlighted</span>
                    )}
                  </div>

                  <h3 className="font-semibold tracking-[-0.3px] text-[17px] leading-snug pr-8 group-hover:text-accent transition-colors">
                    {pub.title}
                  </h3>

                  <div className="mt-3 text-sm text-muted-foreground">
                    {pub.authors}
                  </div>

                  <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <div className="text-xs text-muted-foreground">
                      {pub.volume || pub.pages ? `${pub.volume || ''}${pub.pages ? `:${pub.pages}` : ''} • ` : ''}DOI: {pub.doi}
                    </div>

                    <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        View on Journal <ExternalLink className="h-3.5 w-3.5" />
                      </a>

                      {pub.pdf && (
                        <a
                          href={pub.pdf}
                          download
                          className="inline-flex items-center gap-1.5 rounded-md bg-accent px-3 py-1.5 text-xs font-medium text-accent-foreground hover:bg-accent/90 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Download PDF <Download className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Prior to 2026 */}
      {priorPublications.length > 0 && (
        <div>
          <div className="flex items-center gap-3 mb-4 mt-8">
            <h3 className="flex items-center gap-2 text-xl font-semibold tracking-tight text-muted-foreground">
              Prior to 2026
              <span className="rounded-full bg-muted/70 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                {priorPublications.length}
              </span>
            </h3>
            <div className="flex-1 h-px bg-border/60" />
            <span className="text-xs text-muted-foreground font-mono tracking-widest">EARLIER WORK</span>
          </div>

          <div className="space-y-3">
            {priorPublications.map((pub) => {
              const handleCardClick = () => {
                window.open(pub.link, "_blank", "noopener,noreferrer");
              };

              return (
                <div
                  key={pub.id}
                  onClick={handleCardClick}
                  className="publication-card group cursor-pointer border border-border/70 rounded-xl p-5 md:p-6 hover:border-accent/60 bg-card/80 transition-colors"
                >
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1.5">
                    <span className="font-mono text-xs tracking-widest text-muted-foreground">{pub.year}</span>
                    <span className="text-xs px-2 py-px rounded bg-muted/70 text-muted-foreground">{pub.journal}</span>
                    {pub.highlight && (
                      <span className="text-xs px-2 py-px rounded bg-accent/10 text-accent">Highlighted</span>
                    )}
                  </div>

                  <h3 className="font-semibold tracking-[-0.2px] text-[15.5px] leading-snug pr-6 group-hover:text-accent transition-colors">
                    {pub.title}
                  </h3>

                  <div className="mt-2 text-sm text-muted-foreground">
                    {pub.authors}
                  </div>

                  <div className="mt-3 flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-xs">
                    <div className="text-muted-foreground">
                      {pub.volume || pub.pages ? `${pub.volume || ''}${pub.pages ? `:${pub.pages}` : ''} • ` : ''}DOI: {pub.doi}
                    </div>

                    <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-md border border-border/70 bg-background/60 px-2.5 py-1 text-xs hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        View <ExternalLink className="h-3 w-3" />
                      </a>

                      {pub.pdf && (
                        <a
                          href={pub.pdf}
                          download
                          className="inline-flex items-center gap-1 rounded-md bg-accent/90 px-2.5 py-1 text-xs text-accent-foreground hover:bg-accent transition-colors"
                        >
                          PDF <Download className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Empty state */}
      {filteredPublications.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          No publications match your current filters.
        </div>
      )}

      <div className="mt-8 text-center text-[15px] text-muted-foreground">
        Full publication list available on <a href="https://scholar.google.com/citations?user=_sCWScIAAAAJ&hl=en" target="_blank" className="underline hover:text-foreground">Google Scholar</a>.
      </div>
    </section>
  );
}
