"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Mail, Linkedin } from "lucide-react";
import teamData from "@/data/team.json";
import alumniData from "@/data/alumni.json";

interface Person {
  id: string;
  name: string;
  role: string;
  title: string;
  bio: string;
  email?: string;
  scholar?: string;
  linkedin?: string;
  orcid?: string;
  x?: string;
  image: string;
  imagePosition?: string;
  imageZoom?: number;
  highlights?: Array<{
    text: string;
    url?: string;
  }>;
}

interface Alumni {
  id: string;
  name: string;
  role: string;
  title: string;
  years: string;
  current: string;
  bio: string;
  image: string;
  linkedin?: string;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function TeamPhoto({ person, className = "", imageClassName = "" }: { person: Person; className?: string; imageClassName?: string }) {
  const [imgError, setImgError] = useState(false);
  const initials = getInitials(person.name);

  const imageClass = `aspect-[4/3] w-full rounded-xl overflow-hidden bg-muted relative ring-1 ring-border/50 ${className}`;

  if (!imgError) {
    // imagePosition: "X% Y%" — X = horizontal (left/right), Y = vertical from top.
    //   Higher Y% (e.g. 60-70%) = crops more from the top of the photo → less space above head.
    //   Lower Y% = shows more from the top.
    // imageZoom > 1 zooms in (tighter on the focal point), < 1 zooms out.
    // Both only affect the PI featured photo and regular team cards that have the fields in JSON.
    const objectPosition = person.imagePosition || "50% 30%";
    const zoom = person.imageZoom || 1;
    const imageStyle: React.CSSProperties = {
      ...(zoom !== 1 && {
        transform: `scale(${zoom})`,
        transformOrigin: objectPosition,
      }),
    };

    // Only set objectPosition in style if no overriding class is provided (so mobile override for PI wins)
    if (!imageClassName.includes('object-')) {
      imageStyle.objectPosition = objectPosition;
    }

    return (
      <div className={imageClass}>
        <Image
          src={person.image}
          alt={person.name}
          fill
          className={`object-cover ${imageClassName}`}
          style={imageStyle}
          onError={() => setImgError(true)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    );
  }

  // Elegant placeholder (shown until real photo is added)
  return (
    <div className={`${imageClass} mb-6 bg-gradient-to-br from-muted via-muted/80 to-background flex items-center justify-center relative`}>
      <div className="absolute inset-0 bg-[radial-gradient(#00000008_0.8px,transparent_1px)] bg-[length:3px_3px] dark:bg-[radial-gradient(#ffffff0a_0.8px,transparent_1px)]" />
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center ring-1 ring-accent/30">
          <span className="text-2xl font-semibold tracking-[-1px] text-accent/80">
            {initials}
          </span>
        </div>
        <div className="mt-3 text-[10px] uppercase tracking-[2px] text-muted-foreground/60 font-mono">
          Photo coming soon
        </div>
      </div>
    </div>
  );
}

function PersonCard({ person }: { person: Person }) {
  return (
    <div className="person-card group border border-border rounded-2xl p-3 md:p-7 bg-card flex flex-col h-full">
      <TeamPhoto person={person} className="mb-6" />

      <div className="flex-1">
        <div className="font-semibold text-2xl tracking-tight">{person.name}</div>
        <div className="text-accent mt-1 text-base font-medium">{person.role}</div>
        <div className="text-muted-foreground mt-0.5">{person.title}</div>

        <p className="text-[15px] leading-relaxed text-muted-foreground mt-4 text-justify">
          {person.bio}
        </p>
      </div>

      {/* Contact links - icons next to email (LinkedIn, Google Scholar, ORCID when present) */}
      <div className="mt-6 pt-4 border-t border-border flex items-center gap-4 text-sm">
        {person.email && (
          <a 
            href={`mailto:${person.email}`} 
            className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition"
            title="Email"
          >
            <Mail className="h-3.5 w-3.5" />
          </a>
        )}
        {person.scholar && (
          <a 
            href={person.scholar} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition"
            title="Google Scholar"
          >
            <span className="font-mono text-[10px] font-semibold tracking-tighter">GS</span>
          </a>
        )}
        {person.linkedin && (
          <a 
            href={person.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition"
            title="LinkedIn"
          >
            <Linkedin className="h-3.5 w-3.5" />
          </a>
        )}
        {person.orcid && (
          <a 
            href={person.orcid.startsWith('http') ? person.orcid : `https://orcid.org/${person.orcid}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition"
            title="ORCID"
          >
            <span className="font-mono text-[10px] font-semibold tracking-tighter" style={{color: '#A6CE39'}}>iD</span>
          </a>
        )}
      </div>
    </div>
  );
}

function AlumniPhoto({ alum }: { alum: Alumni }) {
  const [imgError, setImgError] = useState(false);
  const initials = getInitials(alum.name);

  if (!imgError) {
    return (
      <div className="w-14 h-14 rounded-full overflow-hidden bg-muted ring-1 ring-border/50 shrink-0 relative">
        <Image
          src={alum.image}
          alt={alum.name}
          fill
          className="object-cover"
          style={{ objectPosition: "50% 25%" }}
          onError={() => setImgError(true)}
        />
      </div>
    );
  }

  return (
    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-muted to-background ring-1 ring-border/50 flex items-center justify-center shrink-0">
      <span className="text-lg font-semibold tracking-[-0.5px] text-accent/70">
        {initials}
      </span>
    </div>
  );
}

function AlumniCard({ alum }: { alum: Alumni }) {
  return (
    <div className="group border border-border/70 rounded-xl p-3 md:p-6 bg-card/60 hover:bg-card transition-colors flex gap-4">
      <AlumniPhoto alum={alum} />

      <div className="flex-1 min-w-0">
        {alum.linkedin ? (
          <a
            href={alum.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold tracking-tight leading-tight hover:text-accent transition-colors underline decoration-accent/50 hover:decoration-accent cursor-pointer"
            title="LinkedIn"
          >
            {alum.name}
          </a>
        ) : (
          <div className="font-semibold tracking-tight leading-tight">{alum.name}</div>
        )}
        <div className="text-sm text-accent mt-0.5">{alum.role} • {alum.years}</div>

        <div className="mt-2.5 text-[15px] text-muted-foreground leading-snug line-clamp-3 text-justify">
          {alum.bio}
        </div>

        <div className="mt-3 text-sm font-medium text-foreground/90">
          {alum.current}
        </div>
      </div>
    </div>
  );
}

function FeaturedPersonCard({ person }: { person: Person }) {
  return (
    <div className="person-card group border border-border rounded-2xl p-3 md:p-8 bg-card">
      <div className="flex flex-col lg:flex-row gap-8 lg:items-stretch">
        {/* Image - enlarged to fill more of the vertical space (100% height of the card) and given more width */}
        <div className="flex-shrink-0 lg:w-[48%] xl:w-[45%] flex justify-center lg:justify-start">
          <div className="w-full lg:h-full max-w-[480px]">
            <TeamPhoto person={person} className="lg:h-full lg:aspect-auto" imageClassName="max-lg:!object-[50%_30%]" />
          </div>
        </div>

        {/* Text content - more space for the PI */}
        <div className="flex-1">
          <div className="font-semibold text-2xl tracking-tight">{person.name}</div>
          <div className="text-accent mt-1 text-base font-medium">{person.role}</div>
          <div className="text-muted-foreground mt-0.5">{person.title}</div>

          <p className="text-[15px] leading-relaxed text-muted-foreground mt-4 text-justify">
            {person.bio}
          </p>

          {/* Highlights / Bullet points */}
          {person.highlights && person.highlights.length > 0 && (
            <ul className="mt-4 space-y-1.5 text-[14.5px] text-muted-foreground text-justify">
              {person.highlights.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 mt-1 text-accent">•</span>
                  {item.url ? (
                    <a 
                      href={item.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-foreground underline decoration-accent/30 hover:decoration-accent"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          )}

          {/* Contact links - icons next to email (LinkedIn, Google Scholar, X when present) */}
          <div className="mt-6 pt-4 border-t border-border flex items-center gap-4 text-sm">
            {person.email && (
              <a 
                href={`mailto:${person.email}`} 
                className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition"
                title="Email"
              >
                <Mail className="h-3.5 w-3.5" />
              </a>
            )}
            {person.scholar && (
              <a 
                href={person.scholar} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-muted-foreground hover:text-foreground transition"
                title="Google Scholar"
              >
                <span className="font-mono text-[10px] font-semibold tracking-tighter">GS</span>
              </a>
            )}
            {person.linkedin && (
              <a 
                href={person.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition"
                title="LinkedIn"
              >
                <Linkedin className="h-3.5 w-3.5" />
              </a>
            )}
            {person.x && (
              <a 
                href={person.x} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition"
                title="X"
              >
                {/* Official X logo (inline SVG — no image upload needed) */}
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.53 3.5h3.47l-7.57 8.64 8.9 11.36h-6.98l-5.47-7.02-6.25 7.02H1.5l8.07-9.07L1.5 3.5h7.1l5.05 6.5 5.88-6.5zm-1.62 15.07h1.93L6.13 5.43H4.2l11.71 13.14z" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Team() {
  const people = teamData as Person[];
  const alumni = alumniData as Alumni[];

  // Separate the PI (first person) from the rest
  const [pi, ...restOfTeam] = people;

  return (
    <section id="team" className="relative py-20 md:py-28 border-b border-border/60 overflow-hidden">
      {/* Full-page-width background (like hero video), using object-contain so the group photo is not distorted/cropped */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-screen">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/Alle-et-al-group%20picture.jpeg"
          alt="Alle et al. group"
          className="w-full h-full object-contain opacity-[0.12] pointer-events-none"
        />
      </div>
      {/* Overlay for readability (content stays on top) */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-screen bg-background/50 pointer-events-none" />

      {/* Content - constrained width, above background */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Current Team */}
        <div className="mb-12">
        <div className="max-w-2xl">
        <div className="uppercase tracking-[3px] text-xs text-accent font-medium mb-3">THE PEOPLE</div>
        <h2 className="section-heading text-3xl md:text-5x1 tracking-[-2.4px] font-semibold">Our Team</h2>
        </div>
        <p className="mt-4 text-base md:text-lg text-muted-foreground">
          We are a collaborative group of scientists passionate about using chemistry to solve important problems in human health.
        </p>
      </div>

      {/* Featured PI - spans full width (3 columns) */}
      <div className="mb-6">
        <FeaturedPersonCard person={pi} />
      </div>

      {/* Rest of the team in normal grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {restOfTeam.map((person) => (
          <PersonCard key={person.id} person={person} />
        ))}
      </div>

      {/* Team group photo - sized to the full width of the card grid */}
      <div className="mt-8">
        <Image
          src="/images/Team_June26.jpg"
          alt="Alle et al. team photo, June 2026"
          width={1200}
          height={675}
          className="w-full rounded-2xl border border-border"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
        />
      </div>

      {/* Recruiting note */}
      <div className="mt-12 text-center text-[15px] border-t border-border pt-8 text-muted-foreground text-justify">
        We are not actively recruiting students or postdocs at this time. However, we are always happy to hear from exceptional candidates — especially those with their own funding — and welcome you to reach out with your CV and research interests.{" "}
        <a href="mailto:talle@health.ucsd.edu" className="underline hover:text-foreground">Reach out</a> to learn more about joining the lab.
      </div>

      {/* Alumni Section */}
      <div className="mt-20 pt-12 border-t border-border/60">
        <div className="max-w-2xl mb-8">
          <div className="uppercase tracking-[3px] text-xs text-accent font-medium mb-3">WHERE THEY ARE NOW</div>
          <h3 className="text-4xl tracking-[-1.8px] font-semibold">Alumni</h3>
          <p className="mt-3 text-muted-foreground text-justify">
            Former lab members who have gone on to impactful positions in academia and industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {alumni.map((alum) => (
            <AlumniCard key={alum.id} alum={alum} />
          ))}
        </div>
      </div>
      </div> {/* close content div */}
    </section>
  );
}
