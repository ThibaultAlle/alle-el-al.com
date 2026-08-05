import { Beaker, Target, Microscope, Atom, LucideIcon } from "lucide-react";

export interface ResearchArea {
  slug: string;
  title: string;
  shortDescription: string;
  icon: LucideIcon;
  longDescription: string;
  image?: string; // Path to image in /public, e.g. "/images/research/microtubule.jpg"
  imageAspect?: string; // e.g. "16/9", "2/1", "21/9"
  imageFit?: 'cover' | 'contain';
  keyApproaches?: string[];
  selectedPublications?: string[]; // IDs from publications.json
}

export const researchAreas: ResearchArea[] = [
  {
    slug: "microtubule-modulating-triazolopyrimidines",
    title: "Microtubule-Modulating Triazolopyrimidines: A Versatile Platform for Therapeutic Discovery",
    shortDescription: "Our laboratory focuses on the rational design and optimization of small-molecule modulators of microtubule dynamics, centered on the 1,2,4-triazolo[1,5-a]pyrimidine (TPD) scaffold. These compounds engage tubulin at distinct binding sites, allowing us to tune cellular phenotypes—from microtubule stabilization to other modulatory effects—through targeted structural modifications. We apply this versatile chemical platform to develop brain-penetrant therapeutics for neurodegenerative tauopathies, including Alzheimer’s disease, as well as for parasitic infections such as human African trypanosomiasis, with emerging applications in oncology.",
    icon: Atom,
    image: "/images/research/TPD-vinca.png",
    imageAspect: "16/9",
    imageFit: "cover",
    longDescription: `Our laboratory focuses on the rational design and optimization of small-molecule modulators of microtubule dynamics, centered on the 1,2,4-triazolo[1,5-a]pyrimidine (TPD) scaffold. These compounds engage tubulin at distinct binding sites, allowing us to tune cellular phenotypes—from microtubule stabilization to other modulatory effects—through targeted structural modifications.

We apply this versatile chemical platform to develop brain-penetrant therapeutics for neurodegenerative tauopathies, including Alzheimer’s disease, as well as for parasitic infections such as human African trypanosomiasis, with emerging applications in oncology.`,
    keyApproaches: [
      "Rational design of TPD analogs with tunable cellular phenotypes",
      "Optimization of brain penetration and pharmacokinetic properties",
      "Structure–activity relationship (SAR) studies around tubulin binding",
      "In vivo evaluation in models of tauopathy and parasitic infection"
    ]
  },
  {
    slug: "bioisosteric-replacement",
    title: "Optimizing Physicochemical Properties Through Bioisosteric Replacement",
    shortDescription: "Our group conducts fundamental studies in bioisosteric design aimed at optimizing the physicochemical and pharmacokinetic properties of drug-like molecules. Through systematic evaluation of matched molecular pairs, we investigate how strategic structural replacements—such as fluorinated alcohols and phenols as carboxylic acid surrogates—influence key parameters including acidity, lipophilicity, and membrane permeability. These foundational insights are then applied to address practical limitations of existing compounds, as demonstrated by our development of deuterated cystamine derivatives. These analogs retain the beneficial anti-inflammatory and anti-fibrotic activities of the parent molecule while markedly reducing the formation of noxious volatile metabolites responsible for halitosis and body odor in the context of metabolic liver disease.",
    icon: Beaker,
    image: "/images/research/bioisosteres.png",
    imageAspect: "16/9",
    imageFit: "contain",
    longDescription: `Our group conducts fundamental studies in bioisosteric design aimed at optimizing the physicochemical and pharmacokinetic properties of drug-like molecules. Through systematic evaluation of matched molecular pairs, we investigate how strategic structural replacements—such as fluorinated alcohols and phenols as carboxylic acid surrogates—influence key parameters including acidity, lipophilicity, and membrane permeability.

These foundational insights are then applied to address practical limitations of existing compounds, as demonstrated by our development of deuterated cystamine derivatives. These analogs retain the beneficial anti-inflammatory and anti-fibrotic activities of the parent molecule while markedly reducing the formation of noxious volatile metabolites responsible for halitosis and body odor in the context of metabolic liver disease.`,
    keyApproaches: [
      "Matched molecular pair analysis for property optimization",
      "Evaluation of fluorinated bioisosteres as carboxylic acid replacements",
      "Systematic profiling of physicochemical properties (pKa, logD, permeability, solubility)",
      "Application of insights to reduce unwanted side effects in drug candidates"
    ]
  }
];

// Current Collaborations - funded work (add more as needed)
export const currentCollaborations = [
  {
    title: "Targeting MSUT2 with small molecules to ameliorate pathological tau",
    subtitle: "NIH RF1 | 2023–2026",           // Type of grant and dates
    description: "We are developing small-molecule inhibitors targeting MSUT2, a novel regulator of neuronal susceptibility to tau toxicity. Using high-throughput screening of over 100,000 compounds, we identified multiple chemotypes that disrupt MSUT2 binding to poly(A) RNA. Our medicinal chemistry efforts are now focused on optimizing these hits into potent, selective, and brain-penetrant inhibitors. These tool compounds will enable target validation and exploration of MSUT2 inhibition as a therapeutic strategy for Alzheimer’s disease and related tauopathies.",
    partners: [
      {
        name: "Prof. Kraemer's group",
        url: "https://sites.google.com/uw.edu/neurodegenerationresearch/home?authuser=0",
        role: "principal investigator",
        affiliation: "UWash"
      },
      {
        name: "Prof. Brunden",
        url: "https://pathology.med.upenn.edu/department/people/377/kurt-r-brunden",
        role: "co-pi",
        affiliation: "UPenn"
      }
    ]
  },
  {
    title: "Small molecule inhibitors of the proton-sensing receptor GPR68 for pancreatic cancer therapy",
    subtitle: "NIH R21 | 2026–2028",
    description: "Drug discovery effort towards the design of selective GPR68 inhibitors and study of their effects on pancreatic cancer (PDAC) progression.",
    partner: {
      name: "Prof. Kufareva's group",
      url: "https://kufareva.ucsd.edu/home",
      role: "principal investigator",
      affiliation: "Skaggs School of Pharmacy, UCSD"
    }
  }
];

export const collaborationStatement = 
  "We are actively seeking new collaborations in medicinal chemistry and chemical biology. If you are interested in partnering on small-molecule drug discovery, chemical probe development, or related projects, we would be happy to explore opportunities together.";
