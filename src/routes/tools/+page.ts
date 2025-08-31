// src/routes/tools/+page.ts
export async function load() {
    const things = await import.meta.glob("$lib/documents/tools/*.md");
    const tools = await Promise.all(
        Object.entries(things).map(async ([path, resolver]) => {
            const mod: any = await resolver();

            return {
                slug: path.split('/').pop()?.replace(/\.(md)$/, ''),
                ...mod.metadata
            };
        })
    );
    return {tools};
}
