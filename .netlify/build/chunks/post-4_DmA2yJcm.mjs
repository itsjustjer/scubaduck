import { c as createComponent, r as renderTemplate, f as renderComponent, u as unescapeHTML } from './astro/server_4GLQSY0Z.mjs';
import 'kleur/colors';
import { $ as $$MarkdownPostLayout } from './MarkdownPostLayout_B-TqZY5p.mjs';

const html = "<p>This post should show up with my other blog posts, because <code>Astro.glob()</code> is returning a list of all my posts in order to create my list.</p>";

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"My Fourth Blog Post","author":"Astro Learner","description":"This post will show up on its own!","image":{"url":"https://docs.astro.build/default-og-image.png","alt":"The word astro against an illustration of planets and stars."},"pubDate":"2024-09-04","tags":["astro","successes"]};
				const file = "C:/Users/heart/@dev-jer/just-saying/astro-knots/src/pages/posts/post-4.md";
				const url = "/posts/post-4";
				function rawContent() {
					return "This post should show up with my other blog posts, because `Astro.glob()` is returning a list of all my posts in order to create my list.";
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
