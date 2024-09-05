import { c as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent } from '../chunks/astro/server_4GLQSY0Z.mjs';
import 'kleur/colors';
import { $ as $$Header, a as $$Footer } from '../chunks/Footer_A176NSDg.mjs';
/* empty css                                  */
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Links = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Malone Wolf!!";
  return renderTemplate`${maybeRenderHead()}<body data-astro-cid-au7rboj5>  ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-au7rboj5": true })} <h1 data-astro-cid-au7rboj5>${pageTitle}</h1> <div class="posts-box" data-astro-cid-au7rboj5> <h2 data-astro-cid-au7rboj5> these links cray, ma...</h2> <a href="https://realfavicongenerator.net/" data-astro-cid-au7rboj5>Real Favicon Generator</a> </div> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-au7rboj5": true })}  </body> `;
}, "C:/Users/heart/@dev-jer/just-saying/astro-knots/src/pages/links.astro", void 0);

const $$file = "C:/Users/heart/@dev-jer/just-saying/astro-knots/src/pages/links.astro";
const $$url = "/links";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Links,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
