import type { APIRoute } from 'astro';

const PUBLICATION_AT_URI = 'at://did:plc:o4ij6lejsxv53xlov7rchhoq/site.standard.publication/3mipubkhxip2y';

export const GET: APIRoute = () => {
	return new Response(PUBLICATION_AT_URI, {
		headers: { 'Content-Type': 'text/plain' },
	});
};
