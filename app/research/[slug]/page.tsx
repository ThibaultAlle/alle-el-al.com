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
          style={{ aspectRatio: area.imageAspect || '21/9' }}
        >
          <Image 
            src={area.image} 
            alt={area.title} 
            fill 
            className={area.imageFit === 'contain' ? 'object-contain' : 'object-cover'}
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
          <h2 className="text-2xl font-semibold tracking-tight mb-6">Key Approaches</h2>
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

      {/* Bioisosteric replacement detailed content (after Key Approaches) */}
      {slug === "bioisosteric-replacement" && (
        <div className="mt-16 space-y-12">
          <div className="prose prose-neutral dark:prose-invert max-w-none text-[15px] text-muted-foreground text-justify">
            <p>
              Our laboratory maintains a strong interest in fundamental aspects of medicinal chemistry, particularly the design of carboxylic acid bioisosteres. This line of research was initiated by Prof. Carlo Ballatore and focuses on identifying fluorine-containing motifs that can effectively replace the carboxylic acid functional group while modulating key physicochemical properties such as acidity (pKa), lipophilicity, and membrane permeability. In our <a href="https://doi.org/10.1016/j.bmcl.2023.129363" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">2023 Bioorganic &amp; Medicinal Chemistry Letters study</a>, we systematically evaluated a series of fluorinated alcohols and phenols as carboxylic acid surrogates using matched molecular pair analysis. This work provided clear structure–property relationships that help guide the rational selection of bioisosteres during lead optimization (see Figure 1).
            </p>
          </div>

          {/* Figure 1: fluorinated isosteres */}
          <div className="mt-8 bg-muted/30 border border-border rounded-2xl p-2">
            <ZoomableImage
              src="/images/research/bioisosteres/fluorinated isosteres.png"
              alt="Fluorinated isosteres as carboxylic acid bioisosteres"
              className="rounded-2xl border border-border bg-card"
              aspectClassName="aspect-video"
            />
            <div className="px-4 pt-3 pb-1 text-sm text-muted-foreground text-justify">
              <p><strong>Figure 1.</strong> Design of new fluorinated carboxylic acid bioisosteres and Structure-property relationship study (acidity, lipophilicity, permeability)</p>
              <p className="mt-1">
                <a href="https://doi.org/10.1016/j.bmcl.2023.129363" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline text-xs">
                  Bioorg. Med. Chem. Lett., 2023
                </a>
              </p>
            </div>
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-none text-[15px] text-muted-foreground text-justify">
            <p>
              Building on our expertise in property-driven compound design, we have also explored deuterium incorporation as a strategy to improve the metabolic stability and therapeutic profile of known bioactive molecules. In a recent study published in <a href="https://doi.org/10.1021/acsptsci.4c00738" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">ACS Pharmacology &amp; Translational Science (2025)</a>, we designed and evaluated deuterated cystamine derivatives with the initial goal of reducing the formation of noxious volatile sulfur metabolites responsible for the halitosis and body odor side effects associated with cysteamine. Unexpectedly, the deuterated analog d₄-cystamine not only improved metabolic stability but also demonstrated significantly enhanced anti-inflammatory and anti-fibrotic activity in a murine model of metabolic dysfunction-associated steatohepatitis (MASH). These findings suggest that strategic deuteration can unlock improved pharmacological properties beyond simple metabolic protection and support further development of this chemotype for liver diseases.
            </p>
          </div>

          {/* Figure 2: cystamine bioisostere */}
          <div className="mt-8 bg-muted/30 border border-border rounded-2xl p-2">
            <ZoomableImage
              src="/images/research/bioisosteres/cystamine bioisostere.png"
              alt="Cystamine bioisostere with deuterium incorporation"
              className="rounded-2xl border border-border bg-card"
              aspectClassName="aspect-video"
            />
            <div className="px-4 pt-3 pb-1 text-sm text-muted-foreground text-justify">
              <p><strong>Figure 2.</strong> Deuterium dependent reduction of biomarkers of liver inflammation and fibrosis</p>
              <p className="mt-1">
                <a href="https://doi.org/10.1021/acsptsci.4c00738" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline text-xs">
                  ACS Pharmacol. Transl. Sci., 2025
                </a>
              </p>
            </div>
          </div>

          {/* Key Publications */}
          <div className="pt-8 border-t border-border">
            <h4 className="font-semibold text-sm tracking-widest text-muted-foreground mb-4">KEY PUBLICATIONS</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-sm">
              <div>
                <a href="https://doi.org/10.1016/j.bmcl.2023.129363" target="_blank" className="text-accent hover:underline font-medium">Alle et al.</a> — Structure–property relationships of fluorinated carboxylic acid bioisosteres. <span className="text-muted-foreground">Bioorg. Med. Chem. Lett., 2023</span>
              </div>
              <div>
                <a href="https://doi.org/10.1021/acsptsci.4c00738" target="_blank" className="text-accent hover:underline font-medium">Leszczynska et al.</a> — d₄-Cystamine: A Deuterated Cystamine Derivative with Improved Anti-Inflammatory and Anti-Fibrotic Activities... <span className="text-muted-foreground">ACS Pharmacol. Transl. Sci., 2025</span>
              </div>
              <div>
                <a href="https://doi.org/10.1002/cmdc.201200585" target="_blank" className="text-accent hover:underline font-medium">Ballatore et al.</a> — Carboxylic Acid (Bio)Isosteres in Drug Design. <span className="text-muted-foreground">ChemMedChem, 2013, 8, 385–395</span>
              </div>
              <div>
                <a href="https://doi.org/10.1021/acs.jmedchem.5b01963" target="_blank" className="text-accent hover:underline font-medium">Lassalas et al.</a> — Structure–Property Relationships of Carboxylic Acid Isosteres. <span className="text-muted-foreground">J. Med. Chem., 2016, 59 (7), 3183–3203</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MT-Stabilizers detailed content (injected after Key Approaches for MT-stab page) */}
      {slug === "microtubule-modulating-triazolopyrimidines" && (
        <div className="mt-16 space-y-12">
          {/* Rationale */}
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-6">Why Microtubule Stabilization for Tauopathies?</h2>
            <div className="prose prose-neutral dark:prose-invert max-w-none text-[15px] text-muted-foreground text-justify">
              <p className="mb-4">
                Neurodegenerative tauopathies, including Alzheimer’s disease (AD) and frontotemporal lobar degeneration, 
                are characterized by the accumulation of hyperphosphorylated tau protein that detaches from microtubules. 
                This loss of tau’s normal microtubule-stabilizing function disrupts axonal transport, promotes axonal dystrophy, 
                and contributes to synaptic dysfunction and neuronal death.
              </p>
              <p>
                While recent Aβ immunotherapies have advanced the field, there remains a critical need for therapies that directly address tau pathology and microtubule dysfunction. The concept of 
                 <strong> microtubule stabilization</strong> as a therapeutic strategy for tauopathies was pioneered approximately 15 years ago by Professors Carlo Ballatore, Kurt Brunden, Virginia Lee, and the late John Trojanowski. Our laboratory continues to build on this foundation, developing brain-penetrant microtubule-stabilizing agents to compensate for the loss of endogenous tau function and restore neuronal integrity.
              </p>
            </div>

            <div className="mt-8 bg-muted/30 border border-border rounded-2xl p-2 max-md:p-1">
              <ZoomableImage
                src="/images/research/MT-stabilizers/CTMC_graphical_abstract.jpg"
                alt="CTMC Graphical Abstract for Microtubule Stabilization"
                className="rounded-2xl border border-border bg-card"
                aspectClassName="aspect-video max-md:aspect-[4/3]"
              />
              <div className="px-4 pt-3 pb-1 text-sm text-muted-foreground text-justify">
                <p><strong>Figure 1.</strong> Different mode of action between taxane site binding MT-stabilizers (Epothilone D, TPI-287) and TPDs </p>
                <p className="mt-1">
                  <a href="https://www.benthamscience.com/article/156309" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline text-xs">
                    Yohannan, Brunden &amp; Alle, Current Topics in Medicinal Chemistry, 2026
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* TPD Design */}
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-6">Development of Triazolopyrimidine (TPD) MT-Stabilizers</h2>
            
            <div className="prose prose-neutral dark:prose-invert max-w-none text-[15px] text-muted-foreground text-justify mb-6">
              <p className="mb-4">
                We have focused on the 1,2,4-triazolo[1,5-a]pyrimidine (TPD) scaffold as a synthetically accessible, 
                brain-penetrant platform for microtubule stabilization. These compounds interact with the vinca site on 
                β-tubulin yet promote microtubule stabilization in cells — a mechanism distinct from classical taxane-site binders.
              </p>
              <p>
                Extensive structure–activity relationship (SAR) studies systematically explored modifications at the C6 and C7 
                positions of the TPD core. These efforts, reported in 
                <a href="https://pubmed.ncbi.nlm.nih.gov/33411523/" target="_blank" className="text-accent hover:underline"> Oukoloff et al., J. Med. Chem. 2021</a> 
                and further refined through matched molecular pair analyses and computational studies 
                (<a href="https://pubmed.ncbi.nlm.nih.gov/36537765/" target="_blank" className="text-accent hover:underline">Alle et al., J. Med. Chem. 2022</a>), 
                enabled the identification of TPDs with favorable drug-like properties, potent microtubule-stabilizing activity, 
                good brain exposure, and oral bioavailability.
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-2xl p-2 max-md:p-1">
              <ZoomableImage
                src="/images/research/MT-stabilizers/SAR_summary.png"
                alt="SAR Summary: Comparison of selected compounds"
                className="bg-card rounded-xl border border-border"
                aspectClassName="aspect-video max-md:aspect-[4/3]"
              />
              <div className="px-4 pt-3 pb-1 text-sm text-muted-foreground text-justify">
                <p><strong>Figure 2.</strong> Comparison of selected compounds based on experimental log D7.4 values (triangles) and MT-stabilizing activity (squares) expressed as the average activity in the AcTub assay at 1 and 10 μM normalized to positive control (i.e., 100 nM 5). log D7.4 values were determined via the shake flask method (experiments run by Analiza, Inc.).</p>
                <p className="mt-1">
                  <a href="https://pubmed.ncbi.nlm.nih.gov/33411523/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline text-xs">
                    Oukoloff et al., J. Med. Chem., 2021
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* CNDR-51997 */}
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-6">CNDR-51997: An Optimized Brain-Penetrant Candidate</h2>
            
            <div className="prose prose-neutral dark:prose-invert max-w-none text-[15px] text-muted-foreground text-justify">
              <p className="mb-4">
                Building on the TPD platform, we identified and extensively characterized <strong>CNDR-51997</strong>, 
                an optimized microtubule-stabilizing candidate with excellent brain penetration and a favorable safety profile.
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
                <p><strong>Figure 3.</strong> CNDR-51997 increased the stable microtubule (MT) marker acetylated-tubulin (AcTub) in QBI293 cells and in okadaic acid (OA)-treated primary mouse cortical neurons with MT deficits. (A) Structure of CNDR-51997. (B) CNDR-51997 at 0.3 and 1 μM increased AcTub levels relative to vehicle treatment in QBI293 cells, whereas the compound did not alter total α-tubulin. (C) A volcano plot representing tandem mass tag (TMT)-based quantitative proteomics analysis of QBI293 cells treated with vehicle compared to 10 μM CNDR-51997 shows that compound treatment resulted in a significant &gt;2-fold increase in expression of only the axonemal dynein light chain domain-containing protein 1 (gene name: AXDND1), as indicated by the arrow. Green shading indicates increased and rose shading decreased expression after CNDR-51997 treatment. (D) Primary mouse cortical neurons treated with OA in vehicle only (+OA + Veh) show reduced MT (α-tubulin) staining compared to cultures without OA (−OA). The combined addition of OA and CNDR-51997 at either 1 μM (+OA + 1 μM 51997) or 10 μM (+OA + 10 μM 51997) increased MT staining, more closely resembling neurons cultured in the absence of OA. (E) Quantification of triplicate analyses of primary neuron cultures in the absence or presence of OA, with or without CNDR-51997 addition, as depicted in (D). Error bars represent standard error of the mean (SEM), with p values from one-way ANOVA with Tukey’s multiple comparisons test.</p>
                <p className="mt-1">
                  <a href="https://pubmed.ncbi.nlm.nih.gov/38884283/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline text-xs">
                    Yao et al., Alzheimer’s &amp; Dementia, 2024
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Efficacy in AD Models */}
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-6">Preclinical Efficacy in Alzheimer’s Disease Models</h2>
            
            <div className="prose prose-neutral dark:prose-invert max-w-none text-[15px] text-muted-foreground text-justify mb-6">
              <p className="mb-4">
                In detailed studies published in <a href="https://pubmed.ncbi.nlm.nih.gov/38884283/" target="_blank" className="text-accent hover:underline">Yao et al., Alzheimer’s &amp; Dementia 2024</a>, 
                CNDR-51997 demonstrated robust efficacy in two complementary transgenic mouse models:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose">
                <div className="bg-card border border-border rounded-2xl p-5">
                  <div className="flex items-center gap-x-2 mb-3">
                    <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">5XFAD Model</span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground text-justify">
                    Twice-weekly low-dose administration significantly reduced soluble and insoluble Aβ42, 
                    decreased plaque burden, and lowered APP and BACE1 levels — suggesting interruption of a 
                    feed-forward cycle between plaques and microtubule disruption.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-2xl p-5">
                  <div className="flex items-center gap-x-2 mb-3">
                    <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">PS19 Tauopathy Model</span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground text-justify">
                    Three-month intermittent dosing reduced tau pathology, attenuated axonal dystrophy 
                    (electron microscopy), decreased neuroinflammation (microgliosis &amp; astrogliosis), 
                    and showed a trend toward preserved hippocampal neurons.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-muted/30 border border-border rounded-2xl p-2 max-md:p-1">
                <ZoomableImage
                  src="/images/research/MT-stabilizers/Yao_2024_fig4.png"
                  alt="Aβ42 Reduction in 5XFAD Mice"
                  className="bg-card rounded-xl border border-border"
                  aspectClassName="aspect-video max-md:aspect-[4/3]"
                />
                <div className="px-4 pt-3 pb-1 text-sm text-muted-foreground text-justify">
                  <p><strong>Figure 4.</strong> A twice-weekly dose of CNDR-51997 as low as 1 mg/kg significantly reduced insoluble and soluble Aβ42 in 5XFAD mice. Male and female 5XFAD mice (1.5 months old) were treated with vehicle or CNDR-51997 at 1, 2, 3, or 5 mg/kg twice-weekly for 4 weeks, followed by ELISA analysis of cortical and hippocampal insoluble and soluble Aβ42 levels. (A) Insoluble cortical Aβ42, (B) insoluble hippocampal Aβ42, (C) soluble cortical Aβ42, and (D) soluble hippocampal Aβ42. Error bars represent standard error of the mean (SEM) with p values determined by comparison of vehicle and CNDR-51997 at each dose using a two-tailed t test.</p>
                  <p className="mt-1">
                    <a href="https://pubmed.ncbi.nlm.nih.gov/38884283/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline text-xs">
                      Yao et al., Alzheimer’s &amp; Dementia, 2024
                    </a>
                  </p>
                </div>
              </div>

              <div className="bg-muted/30 border border-border rounded-2xl p-2 max-md:p-1">
                <ZoomableImage
                  src="/images/research/MT-stabilizers/Yao_2024_fig6.png"
                  alt="Tau Pathology in PS19 Mice"
                  className="bg-card rounded-xl border border-border"
                  aspectClassName="aspect-video max-md:aspect-[4/3]"
                />
                <div className="px-4 pt-3 pb-1 text-sm text-muted-foreground text-justify">
                  <p><strong>Figure 5.</strong> Treatment of PS19 mice with CNDR-51997 significantly reduced tau pathology. The amount of insoluble total tau (A), AT8-positive phospho-tau (B), and acetylated K280 (AcK280) tau (C) in the brains of PS19 mice after treatment with vehicle or 3 mg/kg CNDR-51997 twice-weekly for 3 months was quantified by immunoblot analyses (also see, Figure S6). The amount of insoluble (D) and soluble (E) brain tau in the PS19 mice was also determined by ELISA. Finally, the amount of tau pathology was assessed by immunohistochemical staining of PS19 mouse brain sections with the MC1 antibody that binds misfolded tau (F), with six bregma levels analyzed for each study mouse and the mean values plotted for each mouse relative to the mean of vehicle-treated mice. The mean percentage area occupied by MC1-positive pathology in PS19 mice varied with bregma level, with mean values in the vehicle group ranging from 47% to 71%. Error bars represent standard error of the mean (SEM) with p values determined by comparison of vehicle and CNDR-51997 treatment using a two-tailed t test.</p>
                  <p className="mt-1">
                    <a href="https://pubmed.ncbi.nlm.nih.gov/38884283/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline text-xs">
                      Yao et al., Alzheimer’s &amp; Dementia, 2024
                    </a>
                  </p>
                </div>
              </div>

              <div className="prose prose-neutral dark:prose-invert max-w-none text-[15px] text-muted-foreground text-justify mt-8">
                <p>Our lead candidate is currently advancing through NIH-funded IND-enabling studies, scheduled for completion in July 2027. These studies include multi-kilogram scale-up synthesis, stability and formulation development, as well as comprehensive toxicology and safety pharmacology evaluations.</p>
              </div>
            </div>
          </div>

          {/* Repurposing */}
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-6">Expanding the Platform: Repurposing for Parasitic Diseases</h2>
            
            <div className="prose prose-neutral dark:prose-invert max-w-none text-[15px] text-muted-foreground text-justify mb-6">
              <p>
                Because microtubules are essential in all eukaryotes, we have explored whether our TPDs library developed for 
                central nervous system indications could be repurposed against neglected tropical diseases (work in collaboration with the <a href="https://pharmacy.ucsd.edu/faculty/caffrey" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Caffrey lab</a>, Skaggs School of Pharmacy, UCSD).
              </p>
            </div>

            <div className="space-y-6">
              <div className="border border-border rounded-2xl p-6 bg-card">
                <div className="flex items-center gap-x-3 mb-4">
                  <div className="w-9 h-9 bg-orange-500/10 text-orange-500 rounded-xl flex items-center justify-center">
                    <span className="text-xl">🦠</span>
                  </div>
                  <h3 className="font-semibold text-xl tracking-tight">Human African Trypanosomiasis (HAT)</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Screening of 123 TPD congeners enabled a robust QSAR model. Prioritized compounds rapidly reduced 
                  parasitemia in <em>Trypanosoma brucei</em>-infected mice. Once-weekly dosing significantly extended survival, 
                  highlighting potential for stage 2 HAT (CNS involvement).
                </p>
                <div className="text-sm">
                  <a href="https://pubmed.ncbi.nlm.nih.gov/" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline font-medium">Monti et al., ChemMedChem, 2023</a>
                </div>
                
                <ZoomableImage
                  src="/images/research/MT-stabilizers/Monti 2023 T_Brucei.jpg"
                  alt="Monti et al. 2023 - Trypanosoma brucei parasitemia and survival curves with TPD compounds"
                  className="mt-5 bg-card rounded-xl border border-orange-200"
                  aspectClassName="aspect-video max-md:aspect-[4/3]"
                />

                <div className="px-4 pt-3 pb-1 text-sm text-muted-foreground text-justify">
                  <p><strong>Figure 6.</strong> Kaplan–Meier curves for survival of T. brucei-infected mice treated with TPDs. Female BALB/C mice were infected i. p. with 1×105 T. b. brucei Lister 427 parasites. On day 2 post-infection, when parasitemia was established, mice were divided into groups of five and treated with an i. p. injection of (A) 4 mg/kg pentamidine (green), or 5 mg/kg (orange), 7.5 mg/kg (red) or 10 mg/kg (blue) of 3 (B) or 4 (C). Black lines in each panel indicate the survival of infected mice treated with vehicle alone. An additional dose of TPD 3 or 4, as indicated in the text, was administered on day 9 post-infection (▾) when parasitemia was detected. Asterisks (*) indicate the presence of blood parasitemia at the end of the study (days 15 and 16 post-infection for 3 and 4, respectively)</p>
                  <p className="mt-1">
                    <a href="https://pubmed.ncbi.nlm.nih.gov/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline text-xs">
                      Monti et al., ChemMedChem, 2023
                    </a>
                  </p>
                </div>
              </div>

              <div className="border border-border rounded-2xl p-6 bg-card">
                <div className="flex items-center gap-x-3 mb-4">
                  <div className="w-9 h-9 bg-rose-500/10 text-rose-500 rounded-xl flex items-center justify-center">
                    <span className="text-xl">🐛</span>
                  </div>
                  <h3 className="font-semibold text-xl tracking-tight">Schistosomiasis</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Phenotypic screening within our MT-active library identified potent activity against 
                  <em> Schistosoma mansoni</em>. Optimized congeners produce rapid, long-lasting paralysis of adult worms 
                  and larvae with substantially improved selectivity over mammalian cells.
                </p>
                <div className="text-sm">
                  <a href="https://pubmed.ncbi.nlm.nih.gov/" target="_blank" rel="noopener noreferrer" className="text-rose-500 hover:underline font-medium">Monti et al., ACS Infectious Diseases, 2021</a>
                </div>
                
                <ZoomableImage
                  src="/images/research/MT-stabilizers/Schisto.png"
                  alt="Schistosoma mansoni paralysis and motility with phenylpyrimidine compounds"
                  className="mt-5 bg-card rounded-xl border border-rose-200"
                  aspectClassName="aspect-video max-md:aspect-[4/3]"
                />

                <div className="px-4 pt-3 pb-1 text-sm text-muted-foreground text-justify">
                  <p><strong>Figure 7.</strong> (A) Concentration-dependent paralysis of adult S. mansoni after a 5 h exposure to phenylpyrimidine compounds 25, 28, and 29 at concentrations ranging from 0.31 to 10 μM. (B) S. mansoni adult worm motility remains suppressed even after removal of 25, 28, or 29. Parasites were preincubated with 0.5% DMSO or 2 μM of test compound for 5 h. Just prior to exchanging the incubation volume six times (Time 0), worm motility was measured by WormAssay and then again at 24 and 48 h after the exchange</p>
                  <p className="mt-1">
                    <a href="https://pubmed.ncbi.nlm.nih.gov/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline text-xs">
                      Monti et al., ACS Infectious Diseases, 2021
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Publications */}
          <div className="pt-8 border-t border-border">
            <h4 className="font-semibold text-sm tracking-widest text-muted-foreground mb-4">KEY PUBLICATIONS</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-sm">
              <div>
                <a href="https://pubmed.ncbi.nlm.nih.gov/38884283/" target="_blank" className="text-accent hover:underline font-medium">Yao et al.</a> — A small-molecule microtubule-stabilizing agent safely reduces Aβ plaque and tau pathology in transgenic mouse models of Alzheimer’s disease. <span className="text-muted-foreground">Alzheimer’s &amp; Dementia, 2024</span>
              </div>
              <div>
                <a href="https://pubmed.ncbi.nlm.nih.gov/33411523/" target="_blank" className="text-accent hover:underline font-medium">Oukoloff et al.</a> — Evaluation of the Structure–Activity Relationship of Microtubule-Targeting 1,2,4-Triazolo[1,5-α]pyrimidines. <span className="text-muted-foreground">J. Med. Chem., 2021</span>
              </div>
              <div>
                <a href="https://pubmed.ncbi.nlm.nih.gov/36537765/" target="_blank" className="text-accent hover:underline font-medium">Alle et al.</a> — Microtubule-Stabilizing 1,2,4-Triazolo[1,5-a]pyrimidines... Matched Molecular Pair Analyses. <span className="text-muted-foreground">J. Med. Chem., 2022</span>
              </div>
              <div>
                <a href="#" target="_blank" className="text-accent hover:underline font-medium">Monti et al.</a> — Structure-Activity Relationships... for Human African Trypanosomiasis. <span className="text-muted-foreground">ChemMedChem, 2023</span><br />
                <a href="#" target="_blank" className="text-accent hover:underline font-medium">Monti et al.</a> — Congeners Derived from Microtubule-Active Phenylpyrimidines... Schistosoma mansoni. <span className="text-muted-foreground">ACS Infect. Dis., 2021</span>
              </div>
            </div>
            
            <div className="mt-8 text-xs text-muted-foreground">
              Research led by <strong>Thibault Alle, Ph.D.</strong> in close collaboration with Kurt R. Brunden (University of Pennsylvania), 
              the late Carlo Ballatore, and colleagues at UC San Diego Skaggs School of Pharmacy and Pharmaceutical Sciences.
            </div>
          </div>
        </div>
      )}

      <div className="mt-16 pt-8 border-t border-border text-sm text-muted-foreground">
        Interested in this area?{" "}
        <a href="mailto:talle@health.ucsd.edu" className="underline hover:text-foreground">
          Contact the lab
        </a>{" "}
        to learn more about ongoing projects.
      </div>
    </div>
  );
}

// Generate static params for better performance
export async function generateStaticParams() {
  return researchAreas.map((area) => ({
    slug: area.slug,
  }));
}
