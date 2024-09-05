import { c as createComponent, r as renderTemplate, f as renderComponent, b as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_4GLQSY0Z.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_C6bMb3Og.mjs';
import { $ as $$BlogPost } from '../../chunks/BlogPost_4OT5nYVb.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const Astro = $$Astro;
async function getStaticPaths() {
  const allPosts = await Astro.glob(/* #__PURE__ */ Object.assign({"../posts/post-1.md": () => import('../../chunks/post-1_79jU8Z4y.mjs').then(n => n._),"../posts/post-2.md": () => import('../../chunks/post-2_DuM8t-HL.mjs').then(n => n._),"../posts/post-3.md": () => import('../../chunks/post-3_CDC4nxNN.mjs').then(n => n._),"../posts/post-4.md": () => import('../../chunks/post-4_DmA2yJcm.mjs').then(n => n._)}), () => "../posts/*.md");
  const uniqueTags = [...new Set(allPosts.map((post) => post.frontmatter.tags).flat())];
  return uniqueTags.map((tag) => {
    const filteredPosts = allPosts.filter((post) => post.frontmatter.tags.includes(tag));
    return {
      params: { tag },
      props: { posts: filteredPosts }
    };
  });
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const { tag } = Astro2.params;
  const { posts } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": tag }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>Posts tagged with ${tag}</p> <ul> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "BlogPost", $$BlogPost, { "url": post.url, "title": post.frontmatter.title })}`)} </ul> ` })}`;
}, "C:/Users/heart/@dev-jer/just-saying/astro-knots/src/pages/tags/[tag].astro", void 0);

const $$file = "C:/Users/heart/@dev-jer/just-saying/astro-knots/src/pages/tags/[tag].astro";
const $$url = "/tags/[tag]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$tag,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
