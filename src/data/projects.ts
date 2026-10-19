export const projectMedia: Record<
  string,
  {
    image: string;
    alt: string;
    category: string;
    caption: string;
    publication?: number;
  }
> = {
  "enso-rainfall": {
    image: "enso-teleconnection",
    category: "Climate variability",
    alt: "Supplied ENSO figure with two rainfall correlation maps, a difference map, and running correlations.",
    caption:
      "Rainfall correlations for the two labeled periods (P1 and P2), their difference, and running correlations. Refer to the related preprint for methodological context.",
    publication: 0,
  },
  "cyclone-senyar": {
    image: "cyclone-senyar",
    category: "Tropical meteorology",
    alt: "Tropical Cyclone Senyar atmospheric diagnostics and maps of the study regions.",
    caption:
      "Atmospheric diagnostics and study regions from the supplied Senyar figure.",
    publication: 1,
  },
  "papua-enso": {
    image: "papua-enso",
    category: "Atmospheric circulation",
    alt: "Two supplied seasonal maps over Papua, labeled DJF and JJA.",
    caption:
      "Seasonal map panels labeled DJF and JJA, from the supplied Papua research figure.",
  },
  "extreme-precipitation": {
    image: "extreme-rainfall",
    category: "Climate risk",
    alt: "Ensemble-mean extreme rainfall maps for SSP1-2.6 and SSP5-8.5 in two future periods.",
    caption:
      "Ensemble-mean extreme rainfall (RP20); scenarios, periods, and precipitation units are retained as supplied.",
  },
  "parametric-insurance": {
    image: "parametric-insurance",
    category: "Applied climate science",
    alt: "Supplied CLIMADA asset-loss summary and flood-impact map for North Aceh.",
    caption:
      "Catastrophe-loss summary and flood-impact map for North Aceh, as shown in the supplied figure.",
  },
  "water-harvesting": {
    image: "fog-harvesting-team",
    category: "Environmental technology",
    alt: "Group photograph supplied for the fog-harvesting community research project.",
    caption:
      "Project group photograph supplied for the fog-harvesting research. No individuals are identified.",
  },
};
