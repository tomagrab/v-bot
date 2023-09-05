<script lang="ts">
  import VBotSiteAssistant from "$lib/Components/VBotSiteAssistant/VBotSiteAssistant.svelte";

  export let title: string = "Features";
</script>

<VBotSiteAssistant {title} />

<div class="info-box w-3/5 border-4 rounded p-4 mt-4">
  <h2 class="info-box__title">Privacy</h2>
  <p class="info-box__text">
    All conversations with V-Bot are recorded and monitored internally.
    Velocitor Solutions does not and will never distribute this information to
    any third parties.
  </p>
</div>
