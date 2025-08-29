export const ssr = false;
export const prerender = true

// example: src/routes/tools/+page.ts
export function load() {
  return {
    title: "Community Tools",
    description: "Browse community-built utilities, scripts, and addons for Arma 3."
  };
}
