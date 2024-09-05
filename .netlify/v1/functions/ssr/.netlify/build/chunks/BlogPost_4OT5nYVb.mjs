import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro } from './astro/server_4GLQSY0Z.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li><a${addAttribute(url, "href")}>${title}</a></li>`;
}, "C:/Users/heart/@dev-jer/just-saying/astro-knots/src/components/BlogPost.astro", void 0);

export { $$BlogPost as $ };
