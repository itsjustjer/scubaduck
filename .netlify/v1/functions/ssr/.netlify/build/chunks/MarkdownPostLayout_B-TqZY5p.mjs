import { c as createComponent, r as renderTemplate, f as renderComponent, b as createAstro, m as maybeRenderHead, a as addAttribute, h as renderSlot } from './astro/server_4GLQSY0Z.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from './BaseLayout_C6bMb3Og.mjs';

const $$Astro = createAstro();
const $$MarkdownPostLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MarkdownPostLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": frontmatter.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<img${addAttribute(frontmatter.image.src, "src")}${addAttribute(frontmatter.image.width, "width")}${addAttribute(frontmatter.image.height, "height")}${addAttribute(frontmatter.image.alt, "alt")}> <p>Written by ${frontmatter.author}</p> <p>Date published ${frontmatter.pubDate}</p> ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "C:/Users/heart/@dev-jer/just-saying/astro-knots/src/layouts/MarkdownPostLayout.astro", void 0);

export { $$MarkdownPostLayout as $ };
