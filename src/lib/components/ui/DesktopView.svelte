<script lang="ts">
  import isMobile from "../../../utils/isMobile";
</script>

{#if !isMobile()}
  <slot />
{/if}
