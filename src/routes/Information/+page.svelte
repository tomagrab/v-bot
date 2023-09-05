<script lang="ts">
  import VBotSiteAssistant from "$lib/Components/VBotSiteAssistant/VBotSiteAssistant.svelte";

  export let title: string = "Information";
</script>

<VBotSiteAssistant {title} />

<div class="info-box w-2/5 mb-4 border-4 rounded p-4 mt-4">
  <h3 class="info-box__title">Information</h3>
  <p class="info-box__text">
    V-Bot is a virtual assistant that is designed to answer questions related to
    V-Track. V-Bot is built on the IBM Watson Assistant platform and is trained
    to answer questions related to V-Track. V-Bot is designed to provide users
    with a seamless, efficient, and enriched experience when navigating V-Track
    Web.
  </p>
</div>

<div class="grid md:grid-cols-2 sm:grid-cols-1">
  <div class="flex flex-col px-8 md:border-r md:border-neutral-50">
    <div class="info-box w-full border-4 rounded p-4 mt-4">
      <h2 class="info-box__title">Continuous Evolution</h2>
      <h3 class="info-box__subtitle">Integration Dynamic</h3>
      <p class="info-box__text">
        The foundation of V-Bot on the Watson Assistant ecosystem implies
        collaborative enrichment. With every interaction, V-Bot learns.
        Conversations are meticulously recorded, serving as a resource for our
        dedicated team to enhance V-Bot's comprehension and response mechanisms.
        Should V-Bot falter, rest assured, our team scrutinizes such instances,
        updating its knowledge reservoir.
      </p>
      <h3 class="info-box__subtitle">Deployment Strategy</h3>
      <p class="info-box__text">
        The beauty of V-Bot lies in its fluidity. Infusions to its knowledge
        epicenter are instantaneous. A dynamic change management process ensures
        that any modifications resonate in real-time across all user interfaces.
      </p>
    </div>

    <div class="info-box w-full border-4 rounded p-4 mt-4">
      <h2 class="info-box__title">Walkthroughs and Tutorials</h2>
      <p class="info-box__text">
        For user questions, V-Bot can provide walkthroughs and tutorials. The
        walkthroughs and tutorials will be presented to the user in a
        step-by-step format. Additionally, V-Bot can provide links to V-Track's
        comprehensive learning center tutorial videos.
      </p>
    </div>
  </div>
  <div class="flex flex-col px-8">
    <div class="info-box w-full border-4 rounded p-4 mt-4">
      <h2 class="info-box__title">Continuous Delivery / Deployment</h2>
      <p class="info-box__text">
        V-Bot can be developed "on the fly". Any updates to V-Bots core
        knowledge base are immediately available to all users. Information can
        be altered and / or updated at any time and the changes will be
        reflected immediately.
      </p>
    </div>

    <div class="info-box w-full border-4 rounded p-4 mt-4">
      <h2 class="info-box__title">Continuous Integration</h2>
      <p class="info-box__text">
        V-Bot is built on the Watson Assistant platform, which can be accessed
        by a team of contributors. All conversations are recorded and can be
        referenced by our team to improve the bot's ability to answer questions.
        For any questions that V-Bot cannot answer, our team will review the
        conversation and add the question and answer to V-Bot's knowledge base.
      </p>
    </div>

    <div class="info-box w-full border-4 rounded p-4 mt-4">
      <h2 class="info-box__title">Live Agent Support</h2>
      <p class="info-box__text">
        At any point if V-Bot is unable to answer a question, the user can
        request a live agent to assist them. The live agent will be able to see
        the conversation between the user and V-Bot and will be able to assist
        the user with their question.
      </p>
    </div>
  </div>
</div>

<style lang="scss">
</style>
