export const locale = "en" as const;
export const ui = {
  en: {
    home: "Home",
    about: "About / Experience",
    research: "Research",
    teaching: "Teaching",
    code: "Code, Data & AI",
    blog: "Blog",
    skip: "Skip to content",
    menu: "Menu",
  },
};
export const base = import.meta.env.BASE_URL.replace(/\/$/, "");
export const href = (path = "") => `${base}/${path.replace(/^\//, "")}`;
export const contact = {
  email: "rizmaprawira@gmail.com",
  github: "https://github.com/rizmaprawira",
  linkedin: "https://www.linkedin.com/in/rizmaprawira/",
};
export const categories = [
  {
    name: "Science & Research",
    description:
      "Research experiences, atmospheric science, methodologies, and reflections on academic life.",
  },
  {
    name: "Technology & AI",
    description:
      "AI-assisted programming, automation, useful digital tools, and building experiments.",
  },
  {
    name: "Education & Learning",
    description:
      "Thoughts on teaching, study strategies, educational resources, and explaining ideas.",
  },
  {
    name: "Life & Reflections",
    description:
      "Personal experiences, career exploration, university life, opinions, and lessons learned.",
  },
];

// English is the only released locale. Add actual translations before exposing another locale.
export const navigation = [
  { key: "home", label: ui[locale].home, path: "", icon: "home" },
  { key: "about", label: "About", path: "experience/", icon: "user" },
  {
    key: "research",
    label: ui[locale].research,
    path: "research/",
    icon: "weather",
  },
  {
    key: "teaching",
    label: ui[locale].teaching,
    path: "teaching/",
    icon: "book",
  },
  { key: "code", label: "Code & AI", path: "code-data-ai/", icon: "code" },
  { key: "blog", label: ui[locale].blog, path: "blog/", icon: "pen" },
];
