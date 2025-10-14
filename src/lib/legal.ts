export const legalPages = {
  terms: {
    footerKey: "footer-link-terms",
    titleKey: "terms-title",
  },
  privacy: {
    footerKey: "footer-link-privacy",
    titleKey: "privacy-title",
  },
} as const;

export type LegalSlug = keyof typeof legalPages;

export const legalSlugs = Object.keys(legalPages) as LegalSlug[];
