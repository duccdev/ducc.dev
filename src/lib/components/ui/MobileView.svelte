<script lang="ts">
  import isMobile from "$lib/utils/isMobile";
</script>

{#if isMobile()}
  <slot />
{/if}
