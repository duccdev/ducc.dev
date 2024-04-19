<script lang="ts">
  import { onMount } from "svelte";

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
    for (const page of pages) {
      if (page.constant) {
        if (window.location.pathname === page.route) {
          currentPage = page;
          return;
        }

        if (window.location.pathname.startsWith(page.route)) {
          currentPage = page;
          return;
        }
      }
    }
  });
</script>

<nav
  class="z-50 fixed left-1/2 top-4 transform -translate-x-1/2 w-[95%] rounded-xl border-2 border-[#383838] backdrop-filter backdrop-blur-[8px] bg-ctp-mauve bg-opacity-[5%]"
>
  <div class="flex items-center text-center justify-between w-full my-6 ml-8">
    <p class="text-xl text-white">hai</p>
  </div>
</nav>
