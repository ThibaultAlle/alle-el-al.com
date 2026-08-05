import { notFound } from "next/navigation";
import { researchAreas } from "@/data/research-areas";
import Link from "next/link";
import Image from "next/image";
import { ZoomableImage } from "@/components/ui/ZoomableImage";

interface ResearchPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ResearchAreaPage({ params }: ResearchPageProps) {
  const { slug } = await params;

  const area = researchAreas.find((a) => a.slug === slug);

  if (!area) {
    notFound();
  }

  const Icon = area.icon;

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
      <Link
        href="/#research"
        className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-flex items-center gap-2"
      >
        ← Back to Research Areas
      </Link>

      {/* Optional Hero Image */}
      {area.image && (
        <div
          className="relative w-full rounded-2xl overflow-hidden mb-10 border border-border bg-card"
          style={{ aspectRatio: area.imageAspect || "21/9" }}
        >
          <Image
            src={area.image}
            alt={area.title}
            fill
            className={
              area.imageFit === "contain" ? "object-contain" : "object-cover"
            }
          />
        </div>
      )}

      <div className="flex items-center gap-4 mb-6">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-border bg-muted/40">
          <Icon className="h-7 w-7 text-accent" />
        </div>
        <h1 className="text-3xl md:text-5xl font-semibold tracking-[-2px]">
          {area.title}
        </h1>
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-none text-base md:text-lg text-muted-foreground text-justify">
        <p className="lead">{area.longDescription}</p>
      </div>

      {area.keyApproaches && area.keyApproaches.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight mb-6">
            Key Approaches
          </h2>
          <ul className="grid md:grid-cols-2 gap-3">
            {area.keyApproaches.map((approach, index) => (
              <li
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg border border-border bg-card"
              >
                <span className="text-accent mt-1">→</span>
                <span>{approach}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ========== BIOISOSTERIC REPLACEMENT ========== */}
      {slug === "bioisosteric-replacement" && (
        <div className="mt-16 space-y-12">
          <div className="prose prose-neutral dark:prose-invert max-w-none text-[15px] text-muted-foreground text-justify">
            <p>
              Our laboratory maintains a strong interest in fundamental aspects
              of medicinal chemistry, particularly the design of carboxylic acid
              bioisosteres. This line of research was initiated by Prof. Carlo
              Ballatore and focuses on identifying fluorine-containing motifs
              that can effectively replace the carboxylic acid functional group
              while modulating key physicochemical properties such as acidity
              (pKa), lipophilicity, and membrane permeability.
            </p>
          </div>

          {/* Figure 1: fluorinated isosteres */}
          <div className="mt-8 bg-muted/30 border border-border rounded-2xl p-2">
            <ZoomableImage
              src="/images/research/bioisosteres/fluorinated-isosteres.png"
              alt="Fluorinated isosteres as carboxylic acid bioisosteres"
              className="rounded-2xl border border-border bg-card"
              aspectClassName="aspect-video"
            />
            <div className="px-4 pt-3 pb-1 text-sm text-muted-foreground text-justify">
              <p>
                <strong>Figure 1.</strong> Design of new fluorinated carboxylic
                acid bioisosteres and Structure-property relationship study
                (acidity, lipophilicity, permeability)
              </p>
              <p className="mt-1">
                <a
                  href="https://doi.org/10.1016/j.bmcl.2023.129363"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline text-xs"
                >
                  Bioorg. Med. Chem. Lett., 2023
                </a>
              </p>
            </div>
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-none text-[15px] text-muted-foreground text-justify">
            <p>
              Building on our expertise in property-driven compound design, we
              have also explored deuterium incorporation as a strategy to
              improve the metabolic stability and therapeutic profile of known
              bioactive molecules. In a recent study published in{" "}
              <a
                href="https://doi.org/10.1021/acsptsci.4c00738"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                ACS Pharmacology & Translational Science (2025)
              </a>
              , we designed and evaluated deuterated cystamine derivatives.
            </p>
          </div>

          {/* Figure 2: cystamine bioisostere */}
          <div className="mt-8 bg-muted/30 border border-border rounded-2xl p-2">
            <ZoomableImage
              src="/images/research/bioisosteres/cystamine-bioisostere.png"
              alt="Cystamine bioisostere with deuterium incorporation"
              className="rounded-2xl border border-border bg-card"
              aspectClassName="aspect-video"
            />
            <div className="px-4 pt-3 pb-1 text-sm text-muted-foreground text-justify">
              <p>
                <strong>Figure 2.</strong> Deuterium dependent reduction of
                biomarkers of liver inflammation and fibrosis
              </p>
              <p className="mt-1">
                <a
                  href="https://doi.org/10.1021/acsptsci.4c00738"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline text-xs"
                >
                  ACS Pharmacol. Transl. Sci., 2025
                </a>
              </p>
            </div>
          </div>

          {/* Key Publications */}
          <div className="pt-8 border-t border-border">
            <h4 className="font-semibold text-sm tracking-widest text-muted-foreground mb-4">
              KEY PUBLICATIONS
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-sm">
              <div>
                <a
                  href="https://doi.org/10.1016/j.bmcl.2023.129363"
                  target="_blank"
                  className="text-accent hover:underline font-medium"
                >
                  Alle et al.
                </a>{" "}
                — Structure–property relationships of fluorinated carboxylic
                acid bioisosteres.{" "}
                <span className="text-muted-foreground">
                  Bioorg. Med. Chem. Lett., 2023
                </span>
              </div>
              <div>
                <a
                  href="https://doi.org/10.1021/acsptsci.4c00738"
                  target="_blank"
                  className="text-accent hover:underline font-medium"
                >
                  Leszczynska et al.
                </a>{" "}
                — d₄-Cystamine: A Deuterated Cystamine Derivative...{" "}
                <span className="text-muted-foreground">
                  ACS Pharmacol. Transl. Sci., 2025
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========== MT-STABILIZERS ========== */}
      {slug === "microtubule-modulating-triazolopyrimidines" && (
        <div className="mt-16 space-y-12">
          {/* Rationale + Fig 1 */}
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-6">
              Why Microtubule Stabilization for Tauopathies?
            </h2>
            <div className="prose prose-neutral dark:prose-invert max-w-none text-[15px] text-muted-foreground text-justify">
              <p className="mb-4">
                Neurodegenerative tauopathies, including Alzheimer’s disease
                (AD) and frontotemporal lobar degeneration, are characterized by
                the accumulation of hyperphosphorylated tau protein that
                detaches from microtubules. This loss of tau’s normal
                microtubule-stabilizing function disrupts axonal transport,
                promotes axonal dystrophy, and contributes to synaptic
                dysfunction and neuronal death.
              </p>
              <p>
                While recent Aβ immunotherapies have advanced the field, there
                remains a critical need for therapies that directly address tau
                pathology and microtubule dysfunction. The concept of{" "}
                <strong>microtubule stabilization</strong> as a therapeutic
                strategy for tauopathies was pioneered approximately 15 years
                ago by Professors Carlo Ballatore, Kurt Brunden, Virginia Lee,
                and the late John Trojanowski. Our laboratory continues to build
                on this foundation, developing brain-penetrant
                microtubule-stabilizing agents to compensate for the loss of
                endogenous tau function and restore neuronal integrity.
              </p>
            </div>

            {/* CTMC Figure 1 - regular img to avoid Invalid source image */}
            <div className="mt-8 bg-muted/30 border border-border rounded-2xl p-2 max-md:p-1">
              <img
                src="/images/research/MT-stabilizers/ctmc-graphical-abstract.png"
                alt="CTMC Graphical Abstract for Microtubule Stabilization"
                className="w-full rounded-2xl border border-border bg-card"
              />
              <div className="px-4 pt-3 pb-1 text-sm text-muted-foreground text-justify">
                <p>
                  <strong>Figure 1.</strong> Different mode of action between
                  taxane site binding MT-stabilizers (Epothilone D, TPI-287) and
                  TPDs
                </p>
                <p className="mt-1">
                  <a
                    href="https://www.benthamscience.com/article/156309"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline text-xs"
                  >
                    Yohannan, Brunden & Alle, Current Topics in Medicinal
                    Chemistry, 2026
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* CNDR-51997 */}
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-6">
              CNDR-51997: An Optimized Brain-Penetrant Candidate
            </h2>
            <div className="prose prose-neutral dark:prose-invert max-w-none text-[15px] text-muted-foreground text-justify">
              <p className="mb-4">
                Building on the TPD platform, we identified and extensively
                characterized <strong>CNDR-51997</strong>, an optimized
                microtubule-stabilizing candidate with excellent brain
                penetration and a favorable safety profile.
              </p>
            </div>

            <div className="mt-6 bg-muted/30 border border-border rounded-2xl p-2 max-md:p-1">
              <ZoomableImage
                src="/images/research/MT-stabilizers/CNDR-51997-cropped.png"
                alt="CNDR-51997 Structure and Cellular Activity"
                className="bg-card rounded-xl border border-border"
                aspectClassName="aspect-video max-md:aspect-[4/3]"
              />
              <div className="px-4 pt-3 pb-1 text-sm text-muted-foreground text-justify">
                <p>
                  <strong>Figure 3.</strong> CNDR-51997 increased the stable
                  microtubule marker acetylated-tubulin in cells and primary
                  neurons.
                </p>
                <p className="mt-1">
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/38884283/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline text-xs"
                  >
                    Yao et al., Alzheimer’s & Dementia, 2024
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Key Publications */}
          <div className="pt-8 border-t border-border">
            <h4 className="font-semibold text-sm tracking-widest text-muted-foreground mb-4">
              KEY PUBLICATIONS
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-sm">
              <div>
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/38884283/"
                  target="_blank"
                  className="text-accent hover:underline font-medium"
                >
                  Yao et al.
                </a>{" "}
                — A small-molecule microtubule-stabilizing agent safely reduces
                Aβ plaque and tau pathology...{" "}
                <span className="text-muted-foreground">
                  Alzheimer’s & Dementia, 2024
                </span>
              </div>
              <div>
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/33411523/"
                  target="_blank"
                  className="text-accent hover:underline font-medium"
                >
                  Oukoloff et al.
                </a>{" "}
                — Evaluation of the Structure–Activity Relationship of
                Microtubule-Targeting 1,2,4-Triazolo[1,5-α]pyrimidines.{" "}
                <span className="text-muted-foreground">
                  J. Med. Chem., 2021
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mt-16 pt-8 border-t border-border text-sm text-muted-foreground">
        Interested in this area?{" "}
        <a
          href="mailto:talle@health.ucsd.edu"
          className="underline hover:text-foreground"
        >
          Contact the lab
        </a>{" "}
        to learn more about ongoing projects.
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return researchAreas.map((area) => ({
    slug: area.slug,
  }));
}