// src/routes/tools/+page.ts
export async function load() {
    const things = await import.meta.glob("./_tools/*.svx");
    const tools = await Promise.all(
        Object.entries(things).map(async ([path, resolver]) => {
            const mod: any = await resolver();

            return {
                slug: path.split('/').pop()?.replace(/\.(svx)$/, ''),
                ...mod.metadata
            };
        })
    );
    return {tools};
}
