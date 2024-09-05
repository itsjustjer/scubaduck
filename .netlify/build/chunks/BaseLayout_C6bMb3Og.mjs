import { c as createComponent, r as renderTemplate, a as addAttribute, e as renderHead, f as renderComponent, h as renderSlot, b as createAstro } from './astro/server_4GLQSY0Z.mjs';
import 'kleur/colors';
import { $ as $$Header, a as $$Footer } from './Footer_A176NSDg.mjs';
/* empty css                          */

const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { pageTitle } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"><title>${pageTitle}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <h1>${pageTitle}</h1> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})}  </body> </html>`;
}, "C:/Users/heart/@dev-jer/just-saying/astro-knots/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
