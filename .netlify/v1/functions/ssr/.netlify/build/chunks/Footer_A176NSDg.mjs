import { c as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent, a as addAttribute, b as createAstro } from './astro/server_4GLQSY0Z.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="nav-links menu"> <a class="menuItem" href="/">Home</a> <a class="menuItem" href="/about">About</a> <a class="menuItem" href="/blog">Blog</a> <a class="menuItem" href="/links">Links</a> <a class="menuItem" href="/tags/">Tags</a> </div>`;
}, "C:/Users/heart/@dev-jer/just-saying/astro-knots/src/components/Navigation.astro", void 0);

const $$Hamburger = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="hamburger"> <span class="line"></span> <span class="line"></span> <span class="line"></span> </div>`;
}, "C:/Users/heart/@dev-jer/just-saying/astro-knots/src/components/Hamburger.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header> <nav> ${renderComponent($$result, "Hamburger", $$Hamburger, {})} ${renderComponent($$result, "Navigation", $$Navigation, {})} </nav> </header>`;
}, "C:/Users/heart/@dev-jer/just-saying/astro-knots/src/components/Header.astro", void 0);

const $$Astro = createAstro();
const $$Social = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Social;
  const { platform, username } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`https://www.${platform}.com/${username}`, "href")} data-astro-cid-yxtifmrq>${platform}</a> `;
}, "C:/Users/heart/@dev-jer/just-saying/astro-knots/src/components/Social.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte> ${renderComponent($$result, "Social", $$Social, { "platform": "twitter", "username": "not yet available", "data-astro-cid-sz7xmlte": true })} ${renderComponent($$result, "Social", $$Social, { "platform": "github", "username": "justjer", "data-astro-cid-sz7xmlte": true })} ${renderComponent($$result, "Social", $$Social, { "platform": "youtube", "username": "not yet avail", "data-astro-cid-sz7xmlte": true })} </footer>`;
}, "C:/Users/heart/@dev-jer/just-saying/astro-knots/src/components/Footer.astro", void 0);

export { $$Header as $, $$Footer as a };
