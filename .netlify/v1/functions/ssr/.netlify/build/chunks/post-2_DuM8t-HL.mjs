import { c as createComponent, r as renderTemplate, f as renderComponent, u as unescapeHTML } from './astro/server_4GLQSY0Z.mjs';
import 'kleur/colors';
import { $ as $$MarkdownPostLayout } from './MarkdownPostLayout_B-TqZY5p.mjs';

const html = "<p>Choo choo!</p>";

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"My Second Blog Post","author":"justjer","description":"After learning some Astro, I couldn't stop!","image":{"url":"cobalt.jpg","alt":"The Astro logo on a dark background with a purple gradient arc."},"pubDate":"2024-09-04","tags":["astro","blogging","learning in public","successes"]};
				const file = "C:/Users/heart/@dev-jer/just-saying/astro-knots/src/pages/posts/post-2.md";
				const url = "/posts/post-2";
				function rawContent() {
					return "Choo choo!";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$MarkdownPostLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
