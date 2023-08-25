<script lang="ts">
  import { fly } from "svelte/transition";
</script>

<div in:fly={{ y: "-100%", duration: 500 }}>
  <slot />
</div>
