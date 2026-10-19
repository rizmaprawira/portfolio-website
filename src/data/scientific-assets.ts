/** Add only owner-approved figures. Null means the asset has not been supplied. */
import { href } from "./site";
export interface ApprovedFigure {
  src: string;
  alt: string;
  caption: string;
  sourceLabel: string;
  sourceUrl?: string;
  width: number;
  height: number;
}

export const ensoFigure: ApprovedFigure = {
  src: href("figures/enso-teleconnection.png"),
  alt: "Supplied four-panel ENSO figure: rainfall correlation maps P1 and P2, their difference with station locations, and 15-year running correlations for multiple datasets and station observations.",
  caption:
    "Rainfall correlations, period differences, and 15-year running correlations, as labeled in the supplied figure.",
  sourceLabel: "Owner-supplied research figure",
  width: 5823,
  height: 3961,
};
export const heroFigure: ApprovedFigure | null = ensoFigure;
export const cycloneFigure: ApprovedFigure | null = {
  src: href("figures/senyar-plot.png"),
  alt: "Supplied multi-panel Tropical Cyclone Senyar figure with time series of atmospheric diagnostics and maps marking the analysis regions.",
  caption:
    "Atmospheric diagnostics and analysis regions for the Tropical Cyclone Senyar project.",
  sourceLabel: "Owner-supplied research figure",
  width: 854,
  height: 902,
};
export const climateFigure: ApprovedFigure | null = {
  src: href("figures/extreme-rainfall.png"),
  alt: "Supplied ensemble-mean extreme rainfall RP20 maps showing SSP1-2.6 and SSP5-8.5 for 2020–2039 and 2040–2059, with a precipitation scale in millimeters per day.",
  caption:
    "Ensemble-mean extreme rainfall (RP20): scenarios and periods as labeled in the supplied figure.",
  sourceLabel: "Owner-supplied research figure",
  width: 3630,
  height: 2695,
};
