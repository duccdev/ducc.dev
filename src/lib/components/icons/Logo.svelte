<script lang="ts">
	let className = "";
	let draggable = true;
	export { className as class, draggable };
</script>

<img src="/logo.png" class={className || "w-6 h-6"} alt="Logo" {draggable} />
