"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { researchAreas, currentCollaborations, collaborationStatement } from "@/data/research-areas";

export function ResearchAreas() {
  return (
    <section id="research" className="max-w-7xl mx-auto px-6 py-20 md:py-28 border-b border-border/60 relative z-10">
      {/* Research Focus Areas */}
      <div className="max-w-2xl mb-12">
        <div className="uppercase tracking-[3px] text-xs text-accent font-medium mb-3">RESEARCH FOCUS</div>
        <h2 className="section-heading text-3xl md:text-5xl tracking-[-2.4px] font-semibold">Research Areas</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-px bg-border mb-16">
        {researchAreas.map((area) => {
          return (
            <Link 
              key={area.slug}
              href={`/research/${area.slug}`}
              className="research-card group bg-background flex flex-col border border-transparent hover:border-accent/60 hover:bg-muted/30 transition-all cursor-pointer overflow-hidden rounded-xl"
            >
              {/* Optional Illustration Image */}
              {area.image && (
                <div 
                  className="relative w-full bg-card overflow-hidden" 
                  style={{ aspectRatio: area.imageAspect || '16/9' }}
                >
                  <Image 
                    src={area.image} 
                    alt={area.title} 
                    fill 
                    className={area.imageFit === 'contain' ? 'object-contain' : 'object-cover'}
                  />
                </div>
              )}

              {/* Text content - properly wrapped so mt-auto works and cards look good */}
              <div className="p-3 md:p-6 flex flex-col flex-1">
                <h3 className="text-2xl tracking-[-0.6px] font-semibold mb-4 group-hover:text-accent transition-colors">
                  {area.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-[15px] flex-1 mb-4 text-justify">
                  {area.shortDescription}
                </p>
                <div className="mt-auto text-sm font-medium text-accent flex items-center gap-1">
                  Learn more <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Current Collaborations - New sub-category */}
      <div>
        <div className="mb-8">
          <div className="max-w-2xl">
            <div className="uppercase tracking-[3px] text-xs text-accent font-medium mb-3">COLLABORATIONS</div>
            <h3 className="text-2xl md:text-3xl tracking-[-1.5px] font-semibold mb-4">Current Collaborations</h3>
          </div>
          <p className="text-base md:text-lg text-muted-foreground">
            We actively collaborate with academic and industry partners on translational drug discovery projects.
          </p>
        </div>

        {/* Funded work list */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {currentCollaborations.map((collab, index) => (
            <div 
              key={index} 
              className="border border-border rounded-xl p-3 md:p-6 bg-card hover:border-accent/40 transition-colors"
            >
              <h4 className="font-semibold text-lg mb-1">{collab.title}</h4>
              {collab.subtitle && (
                <div className="inline-flex items-center rounded bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground tracking-wide mb-2">
                  {collab.subtitle}
                </div>
              )}
              <p className="text-muted-foreground text-[15px] leading-relaxed text-justify">
                {collab.description}
              </p>

              {/* Partners / Collaboration links */}
              {collab.partners && collab.partners.length > 0 ? (
                <div className="mt-3 text-[15px] text-accent">
                  In collaboration with{" "}
                  {collab.partners.map((p, i) => (
                    <span key={i}>
                      <a 
                        href={p.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="underline hover:text-accent/80 transition-colors"
                      >
                        {p.name}
                      </a>
                      {p.role && (
                        <>
                          {" "}(<span className="text-accent/90">{p.role}</span>
                          {p.affiliation && (
                            <>, <span className="text-accent/90">{p.affiliation}</span></>
                          )})
                        </>
                      )}
                      {i < collab.partners.length - 1 && " and "}
                    </span>
                  ))}
                </div>
              ) : collab.partner && (
                <div className="mt-3 text-[15px] text-accent">
                  In collaboration with{" "}
                  <a 
                    href={collab.partner.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="underline hover:text-accent/80 transition-colors"
                  >
                    {collab.partner.name}
                  </a>
                  {collab.partner.role && (
                    <>
                      {" "}(<span className="text-accent/90">{collab.partner.role}</span>
                      {collab.partner.affiliation && (
                        <>, <span className="text-accent/90">{collab.partner.affiliation}</span></>
                      )})
                    </>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Open to collaboration statement */}
        <div className="max-w-3xl">
          <p className="text-muted-foreground text-[15px] leading-relaxed border-l-2 border-accent pl-4 text-justify">
            {collaborationStatement}
          </p>
        </div>
      </div>
    </section>
  );
}
