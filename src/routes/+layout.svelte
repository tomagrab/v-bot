<script lang="ts">
  import AnimatedRoute from "$lib/Components/AnimatedRoute/SlideFromLeft.svelte";
  import Footer from "$lib/Components/Footer/Footer.svelte";
  import Navbar from "$lib/Components/Navbar/Navbar.svelte";
  import "../app.scss";
</script>

<svelte:head>
  <title>V-Bot</title>
  <script>
    window.watsonAssistantChatOptions = {
      integrationID: "1b2fc24b-6498-4197-9aab-3486205e2745", // The ID of this integration.
      region: "us-south", // The region your integration is hosted in.
      serviceInstanceID: "556127cc-df45-4572-920e-7939b3a02a72", // The ID of your service instance.
      onLoad: function (instance) {
        instance.render();
      },
    };
    setTimeout(function () {
      const t = document.createElement("script");
      t.src =
        "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
        (window.watsonAssistantChatOptions.clientVersion || "latest") +
        "/WatsonAssistantChatEntry.js";
      document.head.appendChild(t);
    });
  </script>
</svelte:head>

<div class="drawer">
  <input id="my-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <div class="app min-h-screen flex flex-col">
      <Navbar />
      <div class="flex-grow">
        <AnimatedRoute>
          <div class="flex flex-col items-center pb-4">
            <slot />
          </div>
        </AnimatedRoute>
      </div>
      <Footer />
    </div>
  </div>
  <div class="drawer-side">
    <label for="my-drawer" class="drawer-overlay" />
    <ul class="menu p-4 w-80 h-full bg-base-200 text-base-content">
      <!-- Sidebar content here -->
      <li><a href="/UserGuide">User Guide</a></li>
      <li><a href="/Features">Features</a></li>
      <li><a href="/Information">Information</a></li>
      <li><a href="/FAQs">FAQs</a></li>
      <li><a href="/Privacy">Privacy</a></li>
    </ul>
  </div>
</div>

<style lang="scss">
</style>
