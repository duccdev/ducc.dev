<script lang="ts">
  import Navbar from "$lib/components/ui/Navbar.svelte";
  import "../styles/index.css";
</script>

<Navbar />

<div class="mt-[150px]">
  <slot />
</div>
