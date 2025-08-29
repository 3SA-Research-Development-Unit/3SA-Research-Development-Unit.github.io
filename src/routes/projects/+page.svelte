<script lang="ts">
	export let data;

	let query = '';
	let selectedType = 'All';
	//Equalization Addon, Utility Script, Software
	const types = ['All', 'Addon', 'Utility Script', 'Software'];

	// derived filtered list
	$: filteredProjects = data.projects.filter((project) => {
		const matchesQuery =
			project.title.toLowerCase().includes(query.toLowerCase()) ||
			project.creator.toLowerCase().includes(query.toLowerCase()) ||
			project.type.toLowerCase().includes(query.toLowerCase()) ||
			project.description.toLowerCase().includes(query.toLowerCase());

		const matchesType = selectedType === 'All' ? true : project.type === selectedType;

		return matchesQuery && matchesType;
	});
</script>

<h1 class="text-center text-2xl font-bold">Projects</h1>
<div class="mx-auto mb-3 max-w-[350px] text-center md:max-w-none">
	Here you can find all sorts of projects developed by and for 3rd Shock Army to enhanced the
	development experience or player experience.
</div>

<!-- Search and filter controls -->
<div class="mb-4 flex flex-col justify-center gap-3 px-4 md:flex-row">
	<input
		type="text"
		bind:value={query}
		placeholder="Search projects..."
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

<!-- project grid -->
<div class="grid grid-cols-1 gap-6 p-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
	{#each filteredProjects as project}
		<div class="flex flex-col  bg-white p-4 text-black shadow-md">
			<img
				src={project.thumbnail}
				alt={project.title}
				class="mx-auto max-h-60 w-full  border-2 border-black object-contain"
			/>
			<div class="mt-3 text-center text-lg font-semibold">{project.title}</div>
			<div class="text-center text-sm text-gray-500">{project.type} — By {project.creator}</div>
			<div class="mt-2 text-center text-sm text-gray-700">{project.description}</div>

			{#if project.github_link !== 'none'}
				<a href={project.github_link} aria-label={project.title} class="mt-4">
					<div
						class="flex items-center justify-center gap-2 rounded bg-[var(--bg-primary)] p-2 text-center text-white transition hover:opacity-90"
					>
						<!-- GitHub icon (Octicon style) -->
						<img src="/icons/github.png" alt="GitHub Icon" class="w-12 h-12" />

						<span>View on GitHub</span>
					</div>
				</a>
			{/if}
			{#if project.dedicated_page !== 'none'}
				<a href={project.dedicated_page} aria-label={project.title} class="mt-4">
					<div
						class="flex items-center justify-center gap-2 rounded bg-[var(--bg-primary)] p-2 text-center text-white transition hover:opacity-90"
					>
						<!-- Generic web / page icon -->
						<img src="/icons/web.png" alt="Web Icon" class="w-12 h-12" />

						<span>View Project Page</span>
					</div>
				</a>
			{/if}
			{#if project.workshop_link !== 'none'}
				<a href={project.workshop_link} aria-label={project.title} class="mt-4">
					<div
						class="flex items-center justify-center gap-2 rounded bg-[var(--bg-primary)] p-2 text-center text-white transition hover:opacity-90"
					>
						<!-- Steam-like icon: simplified mark with circles/arm -->
						<img src="/icons/steam.png" alt="Steam Icon" class="h-12 w-12" />
						<span>View on Workshop</span>
					</div>
				</a>
			{/if}
		</div>
	{/each}
</div>

{#if filteredProjects.length === 0}
	<p class="mt-6 text-center text-gray-500">No projects found.</p>
{/if}
