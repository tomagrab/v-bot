<script lang="ts">
  import VBotSiteAssistant from "$lib/Components/VBotSiteAssistant/VBotSiteAssistant.svelte";
  import PageLoadFade from "$lib/Components/AnimatedRoute/PageLoadFade.svelte";
  export let title: string = "Features";
</script>

<VBotSiteAssistant {title} />

<PageLoadFade>
  <div class="flex flex-col items-center">
    <div class="info-box w-2/5 border-4 rounded p-4 mt-4">
      <h3 class="info-box__title">Introduction</h3>

      <p class="info-box__text">
        V-Bot, tailored to cater to queries about V-Track Web, harnesses the
        power of IBM Watson, a leading name in enterprise machine learning. We
        acknowledge the evolutionary nature of AI, and as such, V-Bot is
        continually in the metamorphosis stage, learning and amplifying its
        response efficiency.
      </p>
    </div>

    <style lang="scss">
    </style>
  </div>
</PageLoadFade>
