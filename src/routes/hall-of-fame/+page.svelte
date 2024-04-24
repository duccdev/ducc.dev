<script lang="ts">
  import DesktopView from "$lib/components/ui/DesktopView.svelte";
  import MobileView from "$lib/components/ui/MobileView.svelte";

  interface Profile {
    imgSrc: string;
    name: string;
  }

  const profiles: Profile[] = [
    {
      imgSrc:
        "https://cdn.discordapp.com/avatars/1056716195593715724/8ad0d30f549d1314424872b87b1add5d.webp?size=64",
      name: "Autry",
    },
    {
      imgSrc:
        "https://cdn.discordapp.com/avatars/727088968704720937/15652a4c2d34ff48acf8f39bed7a5d46.webp?size=64",
      name: "Xory",
    },
    {
      imgSrc:
        "https://cdn.discordapp.com/avatars/323255313425760259/c3e0f5350b7865344e83d83cb9a71303.webp?size=64",
      name: "satvrn",
    },
    {
      imgSrc:
        "https://cdn.discordapp.com/avatars/1077982815070728223/2545fe70c9c7c47e2e503718ec36f0d3.webp?size=64",
      name: "sqd",
    },
    {
      imgSrc:
        "https://cdn.discordapp.com/avatars/932331066637832273/e4d1da0054d02858b5abc70da4fc496a.webp?size=64",
      name: "balu",
    },
    {
      imgSrc:
        "https://cdn.discordapp.com/avatars/480829648402382849/b06912a5e23c7372c372fc5a7be3b334.webp?size=64",
      name: "Zerenta",
    },
    {
      imgSrc:
        "https://cdn.discordapp.com/avatars/884099213615587338/7195b5f7ab8323b96dba1871232cf262.webp?size=64",
      name: "aelpxy",
    },
    {
      imgSrc:
        "https://cdn.discordapp.com/avatars/592805844089962517/a_14a723c5e54b1774a3c6680922526981.gif?size=64",
      name: "Tradeskill",
    },
    {
      imgSrc:
        "https://cdn.discordapp.com/avatars/418271206198738944/4d5384e7c7215b3a4e0312a563d3070d.webp?size=64",
      name: "Ashley",
    },
    {
      imgSrc:
        "https://cdn.discordapp.com/avatars/628974397268557851/52e1921f96c0a132e8073f3fd293022f.webp?size=64",
      name: "Jess",
    },
    {
      imgSrc:
        "https://cdn.discordapp.com/avatars/447307093947449344/4bed82a7f70c069223581001ea925db2.webp?size=64",
      name: "Hand 🖐️",
    },
    {
      imgSrc:
        "https://cdn.discordapp.com/avatars/942672833895620658/092aae5873ada96c7c28093743313afb.webp?size=64",
      name: "SuperPou",
    },
    {
      imgSrc:
        "https://cdn.discordapp.com/avatars/383614946623225866/44e61e7bf2a49f59d6185258ee8f3196.webp?size=64",
      name: "Younes",
    },
    {
      imgSrc:
        "https://cdn.discordapp.com/avatars/731721433515950080/e2ab73354661250727bfc045eb2adf46.webp?size=64",
      name: "Reyansh",
    },
  ];
</script>

<DesktopView>
  <div class="ml-14">
    {#each profiles as profile}
      <div class="flex items-center mb-2">
        <img
          src={profile.imgSrc}
          alt="{profile.name}'s PFP"
          class="rounded-lg mr-4"
        />

        <p class="text-4xl">
          <strong>
            {profile.name}
          </strong>
        </p>
      </div>
    {/each}
  </div>
</DesktopView>

<MobileView>
  <div class="ml-4">
    {#each profiles as profile}
      <div class="flex items-center mb-2">
        <img
          src={profile.imgSrc}
          alt="{profile.name}'s PFP"
          class="rounded-lg mr-3"
        />

        <p class="text-2xl">
          <strong>
            {profile.name}
          </strong>
        </p>
      </div>
    {/each}
  </div>
</MobileView>
