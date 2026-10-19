// Approved source: docs/approved-content.txt. No illustrative dataset records.
export const experience = [
  {
    title: "Research Assistant",
    organization: "Department of Meteorology, ITB",
    period: "Feb–Sep 2026",
    description:
      "Conducted research on tropical cyclones and ENSO teleconnections over the Maritime Continent. Processed atmospheric datasets, performed circulation and moisture diagnostics, developed scientific visualizations, and contributed to research manuscripts.",
  },
  {
    title: "Research Project Assistant",
    organization: "Climate Change Center, ITB",
    period: "Mar–Sep 2026",
    description:
      "Analyzed climate projections and extreme precipitation for climate-risk assessments. Applied statistical analysis, quality control, and spatial visualization to support research findings and technical reporting.",
  },
  {
    title: "Industry Research Intern",
    organization: "Indonesia Re",
    period: "Feb–Jun 2026",
    description:
      "Explored parametric flood insurance, catastrophe-risk information, and AI-assisted reporting automation. Worked on translating quantitative analyses into practical insights for insurance applications.",
  },
  {
    title: "Research Intern",
    organization: "National Research and Innovation Agency (BRIN)",
    period: "Jun–Aug 2025",
    description:
      "Investigated ENSO-related atmospheric variability over Papua Island through climatological wind analysis, meteorological data processing, and scientific visualization.",
  },
] as const;
export const subjects = [
  {
    name: "Statistics",
    topics: "Theory, R, Python, exercises",
    icon: "statistics",
  },
  {
    name: "Meteorology",
    topics: "Weather, climate, dynamics",
    icon: "weather",
  },
  {
    name: "Mathematics",
    topics: "Algebra, matrices, calculus",
    icon: "math",
  },
  {
    name: "Programming",
    topics: "Python, R, Fortran",
    icon: "code",
  },
  {
    name: "Science",
    topics: "Chemistry, physics, Earth science",
    icon: "science",
  },
  {
    name: "Exam Preparation",
    topics: "TKA, Olympiad, practice tests",
    icon: "book",
  },
] as const;
export const resources = [
  {
    title: "Indonesian Postal Code Dataset & Crawler",
    metadata: "PUBLIC REPOSITORY · Dataset · Web Scraping · Python · CSV/XLSX",
    description:
      "A Python-based data collection workflow for retrieving Indonesian postal-code information from the official Pos Indonesia website. The project transforms extracted records into structured CSV and Excel datasets, implements validation checks, and documents data provenance. The repository includes raw-response replay, integrity checks, duplicate analysis, and processing scripts. Its coverage is limited to the records returned by the source at collection time, rather than independently verified nationwide completeness.",
    type: "Datasets",
    status: "Public repository",
    url: "https://github.com/rizmaprawira/kodepos_indonesia",
    slug: "indonesian-postal-codes",
  },
  {
    title: "Insurance Financial Reports Dataset",
    metadata: "PLANNED · Financial Data · Data Collection · Excel",
    description:
      "A proposed structured collection of publicly available insurance-company financial reports to support financial comparison, exploratory analysis, and reproducible research. Before publication: confirm reporting periods, company coverage, original sources, and permission to redistribute the collected files.",
    type: "Datasets",
    status: "In preparation",
    url: null,
    slug: "insurance-financial-reports",
  },
  {
    title: "Downloading BMKG Data with Python",
    metadata: "PLANNED GUIDE · Meteorological Data · Python",
    description:
      "A practical guide to accessing meteorological data from supported BMKG sources, organizing downloaded records, and preparing them for analysis with Python. The exact access method and examples need to be documented and checked against BMKG usage requirements.",
    type: "Tutorials & Guides",
    status: "In preparation",
    url: null,
    slug: "bmkg-python",
  },
  {
    title: "Tel-Viz: Atmospheric Teleconnection Visualization",
    metadata: "PROJECT DRAFT · Python · GUI · Climate Analysis",
    description:
      "A Python-based graphical application designed to support atmospheric teleconnection analysis and visualization, making selected climate-data workflows more interactive and accessible. Repository, screenshots, and implementation details to be confirmed.",
    type: "Scripts & Tools",
    status: "Project draft",
    url: null,
    slug: "tel-viz",
  },
  {
    title: "Scientific Data Processing with Python",
    metadata: "PLANNED COLLECTION · Python · xarray · NetCDF · Visualization",
    description:
      "A growing collection of reusable examples for handling multidimensional atmospheric datasets, calculating anomalies, performing statistical analysis, and producing scientific visualizations. Examples will be selected from shareable work and independently documented.",
    type: "Scripts & Tools",
    status: "In preparation",
    url: null,
    slug: "scientific-python",
  },
  {
    title: "AI-Assisted Research & Reporting Workflows",
    metadata: "PLANNED COLLECTION · Automation · Generative AI · Reporting",
    description:
      "Exploration of AI-assisted workflows for collecting information, organizing research, and reducing repetitive reporting tasks while maintaining human verification and quality control. Public examples should be separated from confidential internship materials.",
    type: "Scripts & Tools",
    status: "In preparation",
    url: null,
    slug: "ai-research-workflows",
  },
] as const;
export const workflow = [
  {
    title: "Define the problem",
    description:
      "Identify objectives, requirements, constraints, and expected outcomes.",
  },
  {
    title: "Design the workflow",
    description:
      "Determine how data, processes, and components should work together.",
  },
  {
    title: "Direct AI implementation",
    description:
      "Use iterative prompting and feedback to generate and improve code.",
  },
  {
    title: "Evaluate outputs",
    description:
      "Inspect results, troubleshoot issues, and test whether solutions meet their intended purpose.",
  },
  {
    title: "Apply domain expertise",
    description:
      "Use my background in atmospheric science and quantitative analysis to interpret results and recognize potential errors.",
  },
] as const;
export const aiStatement =
  "I don't code entirely on my own—and I don't pretend to." as const;
