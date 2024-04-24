<script lang="ts">
  import Navbar from "$lib/components/ui/Navbar.svelte";
  import "../styles/index.css";
  import isMobile from "../utils/isMobile";
</script>

<Navbar />

<div class={isMobile() ? "mt-[80px]" : "mt-[150px]"}>
  <slot />
</div>
