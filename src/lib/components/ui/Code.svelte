<script lang="ts">
  let className = "";
  export { className as class };
</script>

<code class="bg-neutral-700 p-1 rounded-lg {className}">
  <slot />
</code>
