<script lang="ts">
  import Discord from "$lib/components/icons/Discord.svelte";
  import Link from "$lib/components/ui/Link.svelte";

  let discordHovered = false;
</script>

<div class="absolute-center">
  <div>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      class="flex items-center"
      on:mouseenter={() => (discordHovered = true)}
      on:mouseleave={() => (discordHovered = false)}
    >
      <Discord class="mr-2.5 size-10" />

      <Link class="text-2xl">
        {#if discordHovered}
          <code>amogustroll69</code>
        {:else}
          Discord
        {/if}
      </Link>
    </div>
  </div>
</div>
