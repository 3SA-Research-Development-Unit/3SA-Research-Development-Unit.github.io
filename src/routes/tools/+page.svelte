<script lang="ts">
	export let data;

	let query = '';
	let selectedType = 'All';

	const types = ['All', 'Build Tool', 'Addon', 'Utility', 'Script'];

	// derived filtered list
	$: filteredTools = data.tools.filter((tool) => {
		const matchesQuery =
			tool.title.toLowerCase().includes(query.toLowerCase()) ||
			tool.creator.toLowerCase().includes(query.toLowerCase()) ||
			tool.type.toLowerCase().includes(query.toLowerCase()) ||
			tool.description.toLowerCase().includes(query.toLowerCase());

		const matchesType = selectedType === 'All' ? true : tool.type === selectedType;

		return matchesQuery && matchesType;
	});
</script>

<svelte:head>
	<title>3rd Shock Army - Tools</title>
	<meta
		name="description"
		content="Browse community-built software, addons, scripts and other utilities."
	/>
</svelte:head>
<h1 class="text-center text-2xl font-bold">Community Tools</h1>
<div class="mx-auto mb-3 max-w-[350px] text-center md:max-w-none">
	Here you can find all sorts of tools developed by the Arma 3 community to enhance your modding
	experience.
</div>

<!-- Search and filter controls -->
<div class="mb-4 flex flex-col justify-center gap-3 px-4 md:flex-row">
	<input
		type="text"
		bind:value={query}
		placeholder="Search tools..."
		class="w-full max-w-md rounded-lg border border-gray-300 px-4 py-2"
	/>

	<select
		bind:value={selectedType}
		class="w-full rounded-lg border border-gray-300 px-4 py-2 text-black md:w-auto"
	>
		{#each types as type}
			<option class="text-black" value={type}>{type}</option>
		{/each}
	</select>
</div>

<!-- Tool grid -->
<div class="grid grid-cols-1 gap-6 p-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
	{#each filteredTools as tool}
		<div class="flex flex-col rounded-2xl bg-white p-4 text-black shadow-md">
			<img
				src={tool.image}
				alt={tool.title}
				class="mx-auto max-h-60 w-full rounded-lg border-2 border-black object-contain"
			/>
			<div class="mt-3 text-center text-lg font-semibold">{tool.title}</div>
			<div class="text-center text-sm text-gray-500">{tool.type} — By {tool.creator}</div>
			<div class="mt-2 text-center text-sm text-gray-700">{tool.description}</div>
			<a href={tool.link} aria-label={tool.title} class="mt-4">
				<div
					class="rounded-xl bg-[var(--bg-primary)] p-2 text-center text-white transition hover:opacity-90"
				>
					Download
				</div>
			</a>
		</div>
	{/each}
</div>

{#if filteredTools.length === 0}
	<p class="mt-6 text-center text-gray-500">No tools found.</p>
{/if}
