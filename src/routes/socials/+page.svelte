<script lang="ts">
  import Discord from "$lib/components/icons/Discord.svelte";
  import Link from "$lib/components/ui/Link.svelte";
  import Code from "$lib/components/ui/Code.svelte";

  let discordHovered = false;
</script>

<div class="absolute-center">
  <div>
    <div class="flex items-center">
      <div class="border border-ctp-green w-48" />
      <p class="text-ctp-green text-3xl mx-2">Socials</p>
      <div class="border border-ctp-green w-48" />
    </div>

    <div>
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        class="flex items-center"
        on:mouseenter={() => (discordHovered = true)}
        on:mouseleave={() => (discordHovered = false)}
      >
        <Discord class="mr-2.5 size-10" />

        <Link
          href="https://discord.com/channels/@me/842457844724400142"
          class="text-2xl"
        >
          {#if discordHovered}
            <Code>amogustroll69</Code>
          {:else}
            Discord
          {/if}
        </Link>
      </div>
    </div>

    <div class="border border-ctp-green w-full mt-4" />
  </div>
</div>
