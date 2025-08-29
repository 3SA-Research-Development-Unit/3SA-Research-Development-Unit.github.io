<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { Dropdown, DropdownItem, DropdownDivider, DropdownHeader, Button } from 'flowbite-svelte';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100..700;1,100..700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<nav
	class="grid grid-cols-1 items-center bg-white p-5 text-black shadow md:flex md:h-[100px] md:justify-between"
>
	<div class="flex items-center justify-center">
		<img src="/red_star.png" alt="Red Star" class="hidden h-24 w-24 md:block" />
		<h1 class=" ml-6 grid grid-cols-1 text-center text-2xl md:block md:text-2xl">
			<span class="font-bold text-rose-900">3RD SHOCK ARMY</span>
			<span class="hidden md:inline">|</span> <span>RESEARCH & DEVELOPMENT UNIT</span>
		</h1>
	</div>
	<Button class="mx-auto mt-4 bg-[var(--bg-primary)] px-4 py-1 text-center text-xl md:hidden"
		>Menu</Button
	>
	<Dropdown class="list-none space-y-3 bg-[var(--nav-bg)]  p-3 text-white md:hidden">
		<DropdownItem href="/" class="px-4 hover:underline">Home</DropdownItem>
		<DropdownItem href="/projects" class="px-4 hover:underline">Projects</DropdownItem>
		<DropdownItem href="/learn" class="px-4 hover:underline">Learn</DropdownItem>
		<DropdownItem href="/contribute" class="px-4 hover:underline">Contribute</DropdownItem>
		<DropdownItem href="/news" class="px-4 hover:underline">News</DropdownItem>
		<DropdownItem href="/tools" class="px-4 hover:underline">Tools</DropdownItem>
	</Dropdown>

	<div
		class="hidden items-center justify-center divide-x divide-gray-500/50 rounded bg-[var(--nav-bg)] p-2 shadow md:flex"
	>
		<a href="/" class="px-4 text-white hover:underline">Home</a>
		<a href="/projects" class="px-4 text-white hover:underline">Projects</a>
		<a href="/learn" class="px-4 text-white hover:underline">Learn</a>
		<a href="/contribute" class="px-4 text-white hover:underline">Contribute</a>
		<a href="/news" class="px-4 text-white hover:underline">News</a>
		<a href="/tools" class="px-4 text-white hover:underline">Tools</a>
	</div>
</nav>

{@render children?.()}
<footer class="bg-[var(--bg-primary)] py-6">
  <div class="container mx-auto px-6 text-center text-gray-300 text-sm">
    © 2025 3rd Shock Army. All rights reserved.
  </div>
</footer>
