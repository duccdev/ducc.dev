<script lang="ts">
  import Discord from "$lib/components/icons/Discord.svelte";
  import YouTube from "$lib/components/icons/YouTube.svelte";
  import GitHub from "$lib/components/icons/GitHub.svelte";
  import Link from "$lib/components/ui/Link.svelte";
  import Code from "$lib/components/ui/Code.svelte";

  let discordHovered = false;
  let youtubeHovered = false;
  let githubHovered = false;
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
        class="flex items-center mb-1"
        on:mouseenter={() => (discordHovered = true)}
        on:mouseleave={() => (discordHovered = false)}
      >
        <Discord class="mr-2.5 size-8" />

        <Link
          href="https://discord.com/channels/@me/842457844724400142"
          class="text-xl"
        >
          {#if discordHovered}
            <Code>amogustroll69</Code>
          {:else}
            Discord
          {/if}
        </Link>
      </div>
    </div>

    <div>
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        class="flex items-center mb-1"
        on:mouseenter={() => (youtubeHovered = true)}
        on:mouseleave={() => (youtubeHovered = false)}
      >
        <YouTube class="mr-2.5 size-8" />

        <Link href="https://github.com/amogustroll69" class="text-xl">
          {#if youtubeHovered}
            <div class="flex items-center">
              <Code class="mr-1">amogustroll69</Code>
              <p class="text-lg">(i almost never post there)</p>
            </div>
          {:else}
            YouTube
          {/if}
        </Link>
      </div>
    </div>

    <div>
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        class="flex items-center"
        on:mouseenter={() => (githubHovered = true)}
        on:mouseleave={() => (githubHovered = false)}
      >
        <GitHub class="mr-2.5 size-8" />

        <Link
          href="https://www.youtube.com/channel/UCxHXCBqIsIpb28kzg7oajDg"
          class="text-xl"
        >
          {#if githubHovered}
            <Code>amogustroll69</Code>
          {:else}
            GitHub
          {/if}
        </Link>
      </div>
    </div>

    <div class="border border-ctp-green w-full mt-4 mb-2" />
    <p class="text-sm">yeah there isn't much here :/</p>
  </div>
</div>
