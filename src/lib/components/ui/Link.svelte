<script lang="ts">
	let className = "";
	let href = "";
	export { className as class, href };
</script>

<a {href} class="text-ctp-sapphire hover:text-ctp-sky {className}">
	<slot />
</a>
