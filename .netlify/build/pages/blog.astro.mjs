import { c as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent, b as createAstro } from '../chunks/astro/server_4GLQSY0Z.mjs';
import 'kleur/colors';
import { $ as $$Header, a as $$Footer } from '../chunks/Footer_A176NSDg.mjs';
/* empty css                                  */
import { $ as $$BlogPost } from '../chunks/BlogPost_4OT5nYVb.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  const pageTitle = "Bloooooog!";
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"./posts/post-1.md": () => import('../chunks/post-1_79jU8Z4y.mjs').then(n => n._),"./posts/post-2.md": () => import('../chunks/post-2_DuM8t-HL.mjs').then(n => n._),"./posts/post-3.md": () => import('../chunks/post-3_CDC4nxNN.mjs').then(n => n._),"./posts/post-4.md": () => import('../chunks/post-4_DmA2yJcm.mjs').then(n => n._)}), () => "./posts/*.md");
  return renderTemplate`${maybeRenderHead()}<body> ${renderComponent($$result, "Header", $$Header, {})} <h1>${pageTitle}</h1> <p>This is where I will post about my journey learning Astro.</p> <ul> ${allPosts.map((post) => renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, { "url": post.url, "title": post.frontmatter.title })}`)} </ul> ${renderComponent($$result, "Footer", $$Footer, {})}  </body>`;
}, "C:/Users/heart/@dev-jer/just-saying/astro-knots/src/pages/blog.astro", void 0);

const $$file = "C:/Users/heart/@dev-jer/just-saying/astro-knots/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
