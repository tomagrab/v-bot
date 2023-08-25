<script lang="ts">
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  let ready = false;

  onMount(() => {
    ready = true;
  });
</script>

{#if ready}
  <div in:fade={{ duration: 500 }}>
    <slot />
  </div>
{/if}
