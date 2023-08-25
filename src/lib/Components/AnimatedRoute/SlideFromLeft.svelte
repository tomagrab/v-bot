<script>
  import { fade, fly } from "svelte/transition";
  import { page } from "$app/stores";
</script>

{#key $page.url}
  <div in:fly={{ x: "-100%", duration: 500 }}>
    <div in:fade={{ duration: 500 }}>
      <slot />
    </div>
  </div>
{/key}
