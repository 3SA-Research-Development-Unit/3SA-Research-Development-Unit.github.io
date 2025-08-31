export async function load(context: { params: { slug: string; }; }) {
    let slug = context.params.slug;
    return { slug };
}

