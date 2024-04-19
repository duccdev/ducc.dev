<script lang="ts">
  import { onMount } from "svelte";
  import Logo from "$lib/components/icons/Logo.svelte";

  interface Page {
    name: string;
    route: string;
    constant?: boolean;
  }

  const pages: Page[] = [
    { name: "Home", route: "/", constant: true },
    { name: "Settings", route: "/settings", constant: true },
    { name: "Projects", route: "/projects" },
    { name: "Blog", route: "/blog" },
    { name: "Random", route: "/random" },
  ];

  let currentPage: Page = { name: "", route: "", constant: false };

  onMount(() => {
    setInterval(() => {
      for (const page of pages) {
        if (page.constant && window.location.pathname === page.route) {
          currentPage = page;
          return;
        }

        if (
          page.route !== "/" &&
          window.location.pathname.startsWith(page.route)
        ) {
          currentPage = page;
          return;
        }
      }
    }, 15);
  });
</script>

<nav
  class="z-50 flex justify-center items-center fixed left-1/2 top-4 transform -translate-x-1/2 w-[95%] rounded-xl border-2 border-[#383838] backdrop-filter backdrop-blur-[8px] bg-ctp-mauve bg-opacity-[5%]"
>
  <div class="flex items-center text-center justify-between w-full my-6 mx-12">
    <div class="flex items-center">
      {#each pages as page}
        {#if page.route === currentPage.route}
          <a href={page.route} class="text-white cursor-pointer text-xl mr-4">
            {page.name}
          </a>
        {:else}
          <a
            href={page.route}
            class="text-ctp-green hover:text-ctp-teal cursor-pointer text-xl mr-4"
          >
            {page.name}
          </a>
        {/if}
      {/each}
    </div>

    <a href="/" class="flex items-center cursor-pointer">
      <Logo class="size-12 mr-3 rounded-lg" />

      <div class="flex items-center text-center">
        <div class="relative mr-4 text-center">
          <p class="text-3xl blur-[10px] select-none text-gradient">
            <strong>duccy baka</strong>
          </p>

          <p class="absolute inset-0 z-10 text-3xl select-none text-gradient">
            <strong>duccy baka</strong>
          </p>
        </div>
      </div>
    </a>
  </div>
</nav>
