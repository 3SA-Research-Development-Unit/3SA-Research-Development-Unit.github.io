<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>3rd Shock Army - Home</title>
	<meta
		name="description"
		content="3rd Shock Army is a relaxed Arma 3 OpFor unit focused on research and development of tools, addons, and guides."
	/>
</svelte:head>

<section class="relative bg-rose-800 py-16 text-white md:py-24">
	<div
		class="absolute inset-0 bg-gradient-to-b from-[var(--nav-bg)]/80 to-[var(--bg-primary)]"
	></div>

	<div class="relative z-10 container mx-auto px-6 text-center">
		<h1 class="mb-6 text-3xl font-extrabold md:text-5xl">
			Welcome to 3rd Shock Army's Development and Research
		</h1>
		<p class="mx-auto mb-8 max-w-2xl text-lg text-gray-200 md:text-xl">
			3SA is committed to creating guides, developing tools, and teaching others how to create
			addons in Arma 3.
		</p>
		<a
			href="/projects"
			class="inline-block rounded-2xl bg-[var(--nav-bg)] px-6 py-3 text-lg font-semibold shadow-md transition hover:bg-red-900"
		>
			See Our Projects
		</a>
	</div>
</section>
<section class="bg-[var(--bg-primary)] py-12">
	<div class="container mx-auto grid grid-cols-1 gap-6 px-6 sm:grid-cols-2 md:grid-cols-3">
		<!-- Learn -->
		<a
			href="/learn"
			class="group flex flex-col items-center rounded-2xl bg-[var(--nav-bg)] p-8 text-center text-white shadow-md transition hover:bg-red-900"
		>
			<div class="mb-3 text-3xl">📘</div>
			<h2 class="mb-2 text-xl font-bold">Learn</h2>
			<p class="text-sm text-gray-200">
				Read guides and tutorials on various arma 3 modding aspects.
			</p>
		</a>

		<!-- Contribute -->
		<a
			href="https://github.com/3SA-Research-Development-Unit/3sa-research-development-unit.github.io"
			class="group flex flex-col items-center rounded-2xl bg-[var(--nav-bg)] p-8 text-center text-white shadow-md transition hover:bg-red-900"
		>
			<div class="mb-3 text-3xl">🤝</div>
			<h2 class="mb-2 text-xl font-bold">Contribute</h2>
			<p class="text-sm text-gray-200">Join and help develop tools, addons, and guides.</p>
		</a>

		<!-- Explore Tools -->
		<a
			href="/tools"
			class="group flex flex-col items-center rounded-2xl bg-[var(--nav-bg)] p-8 text-center text-white shadow-md transition hover:bg-red-900"
		>
			<div class="mb-3 text-3xl">🛠️</div>
			<h2 class="mb-2 text-xl font-bold">Explore Tools</h2>
			<p class="text-sm text-gray-200">
				Browse community-built software, addons, scripts and other utilities.
			</p>
		</a>
	</div>
</section>
<section class="bg-[#3a0a0a] py-16">
	<div class="container mx-auto px-6">
		<h2 class="mb-10 text-center text-3xl font-bold text-white md:text-4xl">Recent News</h2>

		<div
			class="flex flex-col overflow-hidden rounded-2xl bg-white text-black shadow-lg md:flex-row"
		>
			<!-- Thumbnail -->
			<img
				src="https://i0.wp.com/codeariv.com/wp-content/uploads/2019/09/lorem-ipsum.jpg?w=1280&ssl=1"
				alt="News Thumbnail"
				class="max-h-[400px] w-full object-cover md:w-1/2"
			/>

			<!-- Content -->
			<div class="flex flex-col justify-center p-8">
				<h3 class="mb-4 text-2xl font-bold md:text-3xl">Lorem Ipsum Dolor Sit Amet</h3>
				<p class="mb-4 line-clamp-4 text-lg text-gray-700">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus
					tristique bibendum. Donec rutrum sed sem quis venenatis. Proin viverra risus a eros
					volutpat tempor. In quis arcu et eros porta lobortis sit amet at nunc...
				</p>
				<a href="/news" class="self-start font-semibold text-[var(--nav-bg)] hover:underline">
					Read More →
				</a>
			</div>
		</div>
	</div>
</section>
<section class="bg-[var(--bg-primary)] py-16">
	<div class="container mx-auto px-6">
		<h2 class="mb-10 text-center text-3xl font-bold text-white md:text-4xl">Contributors</h2>

		<div class="grid grid-cols-3 gap-4 sm:grid-cols-6">
			{#each data.contributors as c}
				<div class="group flex flex-col items-center">
					<!-- Profile pic -->
					<div class="aspect-square w-full overflow-hidden rounded-lg shadow-md">
						<img
							src={c.image}
							alt={c.name}
							class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
						/>
					</div>
					<!-- Name + Role (hidden until hover) -->
					<div class="mt-2 text-center opacity-0 transition group-hover:opacity-100">
						<p class="text-sm font-semibold text-white">{c.name}</p>
						<p class="text-xs text-gray-300">{c.role}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
<section class="bg-[#3a0a0a] py-16">
	<div class="container mx-auto px-6">
		<h2 class="mb-10 text-center text-3xl font-bold text-white md:text-4xl">Want to join us?</h2>

		<div
			class="flex flex-col items-center gap-8 overflow-hidden rounded-2xl bg-white shadow-lg md:flex-row"
		>
			<!-- Thumbnail -->
			<div class="ml-3 w-full md:w-1/2">
				<img src="unit.jpg" alt="3rd Shock Army" class="mx-auto h-full w-full object-cover" />
			</div>

			<!-- Content -->
			<div class="flex w-full flex-col justify-center p-8 text-center md:w-1/2 md:text-left">
				<h2 class="mb-4 text-3xl font-bold text-[var(--bg-primary)] md:text-4xl">
					Join 3rd Shock Army
				</h2>
				<p class="mb-6 text-justify text-lg text-gray-700">
					3rd Shock Army is a relaxed OpFor unit.<br />
					What is OpFor? OpFor is any non-NATO factions - the "opposing force". <br /><br />We
					mostly do Cold War, but have done modern campaigns too. If you are tired of using the same
					old ACOG to snipe an insurgent from 500 meters away in a desert, we are what you are
					looking for. We offer a challenge and change. We fight enemies who are equal if not more
					powerful than us.
				</p>
				<a
					href="https://discord.gg/Jwr7jdx"
					class="inline-block rounded-xl bg-[#7289da] px-6 py-3 text-lg font-semibold text-white shadow-md transition hover:bg-[#424549]"
				>
					Join Our Discord
				</a>
			</div>
		</div>
	</div>
</section>
