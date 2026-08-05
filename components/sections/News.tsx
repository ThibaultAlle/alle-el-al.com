"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Calendar, ChevronDown, ChevronUp } from "lucide-react";

const newsItems = [
  
  {
    date: "June 2026",
    title: "Editorial Accepted: Microtubule Stabilization as a Therapeutic Strategy for Alzheimer’s Disease and Tauopathies",
    summary: "The editorial co-authored by Darius J. Yohannan, Kurt R. Brunden, and Thibault Alle on microtubule stabilization as a therapeutic approach for Alzheimer’s disease and neurodegenerative tauopathies has been accepted for publication in *Current Topics in Medicinal Chemistry*.",
    fullText: "We are pleased to announce that our editorial, “Microtubule Stabilization as a Therapeutic Strategy: Updated Perspectives on Alzheimer’s Disease and Neurodegenerative Tauopathies,” has been accepted for publication in *Current Topics in Medicinal Chemistry*. This invited piece provides an updated perspective on the therapeutic potential of microtubule-stabilizing agents for tauopathies, including Alzheimer’s disease, highlighting key preclinical and clinical advances in the field.\n\nThis work builds directly on the foundational contributions of the late Prof. Carlo Ballatore, whose visionary leadership and pioneering research on microtubule-stabilizing triazolopyrimidines and related scaffolds have profoundly shaped our understanding of MT dysfunction in neurodegeneration. His scientific legacy, mentorship, and commitment to developing disease-modifying therapies continue to inspire and guide ongoing efforts in the lab and beyond. We remain deeply grateful for his enduring impact.\n\nRead the full editorial here: https://www.benthamscience.com/article/156309"
  },
  {
    date: "May 2026",
    title: "New Collaboration & Funding: GPR68 Inhibitors for Pancreatic Cancer (NCI R21)",
    summary: "In May 2025, the Alle Laboratory was awarded an NCI R21 grant focused on the development of small-molecule inhibitors of the proton-sensing receptor GPR68 as a potential therapeutic approach for pancreatic cancer. ",
    fullText: "The Alle Laboratory was awarded an NCI R21 grant in collaboration with Principal Investigator Dr. Irina Kufareva (Skaggs School of Pharmacy, UC San Diego). The project focuses on developing small-molecule inhibitors of the proton-sensing G protein-coupled receptor GPR68 as a novel therapeutic strategy for pancreatic ductal adenocarcinoma (PDAC). Dr. Thibault Alle serves as Co-Investigator, contributing his expertise in medicinal chemistry and structure-based drug design. This award marks an important expansion of the lab’s oncology portfolio and strengthens interdisciplinary collaborations within the UC San Diego research community.",
  },
  {
    date: "September 2025",
    title: "From Continuity to New Horizons: The Alle Lab Begins at UC San Diego",
    summary: "Assistant Adjunct Professor Thibault Alle establishes a new medicinal chemistry laboratory at the Skaggs School of Pharmacy and Pharmaceutical Sciences, continuing and expanding research on microtubule-stabilizing agents for neurodegenerative diseases and antiparasitic drug discovery.",
    fullText: "In September 2025, Dr. Thibault Alle officially launched his independent research program as Assistant Adjunct Professor at the UC San Diego Skaggs School of Pharmacy and Pharmaceutical Sciences. The new Alle Laboratory continues and expands upon research themes developed during his time in the Ballatore lab, with a strong emphasis on the design of brain-penetrant microtubule-stabilizing agents for neurodegenerative tauopathies such as Alzheimer’s disease, as well as the discovery of antiparasitic agents. The lab also maintains active collaborations in oncology drug discovery. This new chapter represents both continuity of high-quality science and the beginning of exciting new directions in medicinal chemistry at UC San Diego.",
    image: "/images/Team_June26_2.jpg",
  },
];

export function News() {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  const renderWithLinks = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.split(urlRegex).map((part, index) => {
      if (/^https?:\/\//.test(part)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline hover:text-foreground transition-colors break-all max-w-full"
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  const toggleItem = (index: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <section id="news" className="max-w-7xl mx-auto px-6 py-20 md:py-28 border-b border-border/60">
      <div className="flex items-end justify-between mb-12">
        <div>
          <div className="uppercase tracking-[3px] text-xs text-accent font-medium mb-3">UPDATES</div>
          <h2 className="section-heading text-3xl md:text-5x1 tracking-[-2.4px] font-semibold">News</h2>
        </div>
      </div>

      <div className="space-y-px bg-border">
        {newsItems.map((item, index) => {
          const isExpanded = expandedItems.has(index);

          return (
            <div 
              key={index} 
              onClick={() => toggleItem(index)}
              className="news-item group cursor-pointer bg-background px-3 md:px-8 py-6 md:py-8 border border-transparent hover:border-accent/40 flex flex-col gap-y-2 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-x-12 gap-y-2">
                <div className="md:w-36 shrink-0 flex items-center gap-2 text-sm text-muted-foreground font-mono tracking-wider">
                  <Calendar className="h-3.5 w-3.5" /> {item.date}
                </div>
                <div className="w-full md:flex-1 min-w-0">
                  <h3 className="font-semibold text-lg tracking-tight md:pr-4 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mt-1.5 text-[15px] leading-snug md:line-clamp-2">
                    {item.summary}
                  </p>
                </div>
                <div className="hidden md:flex items-center text-muted-foreground group-hover:text-accent transition-colors">
                  {isExpanded ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </div>
              </div>

              {/* Expanded full text */}
              {isExpanded && item.fullText && (
                <div className="mt-4 pl-0 md:pl-[calc(9rem+3rem)] pr-3 md:pr-4">
                  <div className="pt-4 border-t border-border/50">
                    <p className="text-[15px] leading-relaxed text-muted-foreground whitespace-pre-line break-words">
                      {renderWithLinks(item.fullText)}
                    </p>
                    {item.image && (
                      <div className="mt-4">
                        <Image
                          src={item.image}
                          alt="Alle et al. team photo, June 2026"
                          width={800}
                          height={450}
                          className="rounded-lg border border-border max-w-[600px] w-full h-auto mx-auto"
                        />
                      </div>
                    )}
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleItem(index);
                      }}
                      className="mt-4 text-sm text-accent hover:underline flex items-center gap-1"
                    >
                      Read less <ChevronUp className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* Read more indicator when collapsed */}
              {!isExpanded && item.fullText && (
                <div className="flex items-center gap-1 text-xs text-accent pl-0 md:pl-[calc(9rem+3rem)] mt-1">
                  Read more <ChevronDown className="h-3 w-3" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
