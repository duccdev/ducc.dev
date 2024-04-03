<script lang="ts">
  import "../styles/index.css";
  import { onMount } from "svelte";

  const baseClasses = "duration-150 bg-ctp-base";

  onMount(() =>
    setInterval(() => {
      if (localStorage.getItem("theme") !== null) {
        document.documentElement.className =
          baseClasses + " " + localStorage.getItem("theme")!;
      } else {
        document.documentElement.className = baseClasses + " mocha";
      }
    }, 100),
  );
</script>

<slot />
