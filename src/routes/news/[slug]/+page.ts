export async function load(context: { params: { slug: string; }; }) {
    let slug = context.params.slug;

    const modules = import.meta.glob('$lib/documents/news/*.md');
    const match = modules[`$lib/documents/guides/${slug}.md`];

    if (!match) {
        return {
            content: "404",
            metadata: {},
        }
    }

    const post = await match();

    return {
        //@ts-expect-error
        content: post.default,
        //@ts-expect-error
        metadata: post.metadata, 
        slug: slug
    };
}


export const prerender = true;
