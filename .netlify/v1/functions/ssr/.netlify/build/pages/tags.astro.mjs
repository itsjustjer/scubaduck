import { c as createComponent, r as renderTemplate, f as renderComponent, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_4GLQSY0Z.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_C6bMb3Og.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../posts/post-1.md": () => import('../chunks/post-1_79jU8Z4y.mjs').then(n => n._),"../posts/post-2.md": () => import('../chunks/post-2_DuM8t-HL.mjs').then(n => n._),"../posts/post-3.md": () => import('../chunks/post-3_CDC4nxNN.mjs').then(n => n._),"../posts/post-4.md": () => import('../chunks/post-4_DmA2yJcm.mjs').then(n => n._)}), () => "../posts/*.md");
  const tags = [...new Set(allPosts.map((post) => post.frontmatter.tags).flat())];
  const pageTitle = "Tag Index";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle, "data-astro-cid-os4i7owy": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="tags" data-astro-cid-os4i7owy> ${tags.map((tag) => renderTemplate`<p class="tag" data-astro-cid-os4i7owy><a href="/tags" data-astro-cid-os4i7owy>${tag}</a></p>`)} </div> ` })} `;
}, "C:/Users/heart/@dev-jer/just-saying/astro-knots/src/pages/tags/index.astro", void 0);

const $$file = "C:/Users/heart/@dev-jer/just-saying/astro-knots/src/pages/tags/index.astro";
const $$url = "/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
