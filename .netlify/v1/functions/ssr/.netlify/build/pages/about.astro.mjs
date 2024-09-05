import { c as createComponent, d as defineStyleVars, r as renderTemplate, a as addAttribute, e as renderHead, f as renderComponent, b as createAstro } from '../chunks/astro/server_4GLQSY0Z.mjs';
import { $ as $$Header, a as $$Footer } from '../chunks/Footer_A176NSDg.mjs';
/* empty css                                  */
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const identity = {
    firstName: "jer",
    country: "Tis of Thee.",
    occupation: "godKing Wizard",
    hobbies: ["all I do is win", "dat ass", "music"]
  };
  const skills = ["HTML", "CSS", "JavaScript", "React", "Astro", "Writing", "Piano", "Drums", "Music Production", "Cunning Linguist"];
  const finished = false;
  const skillColor = "navy";
  const fontWeight = "bold";
  const textCase = "uppercase";
  const pageTitle = "About this pupper...";
  const $$definedVars = defineStyleVars([{ skillColor, fontWeight, textCase }]);
  return renderTemplate`<html lang="en" data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Astro</title><title>${pageTitle}</title>${renderHead()}</head> <body data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-kh7btl4r": true })} <h1 data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>${pageTitle}</h1> <h2 data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>... and my new Astro site!</h2> <p data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>I am working through Astro's introductory tutorial. This is the second page on my website, and it's the first one I built myself!</p> <p data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>This site will update as I complete more of the tutorial, so keep checking back and see how my journey is going!</p> <p data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>Here are a few facts about me:</p> <ul data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}> <li data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>My name is ${identity.firstName}.</li> <li data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>I live in ${identity.country} and I work as a ${identity.occupation}.</li> ${identity.hobbies.length >= 2 && renderTemplate`<li data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>Two of my hobbies are: ${identity.hobbies[0]} and ${identity.hobbies[1]}</li>`} </ul> <p data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>My skills are:</p> <ul data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}> ${skills.map((skill) => renderTemplate`<li class="skill" data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>${skill}</li>`)} </ul> ${renderTemplate`<p data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>I am happy to be learning Astro!</p>`} ${finished} ${renderTemplate`<p data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>My goal is to finish in 3 days.</p>` } ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-kh7btl4r": true })}  </body> </html>`;
}, "C:/Users/heart/@dev-jer/just-saying/astro-knots/src/pages/about.astro", void 0);

const $$file = "C:/Users/heart/@dev-jer/just-saying/astro-knots/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
