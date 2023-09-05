<script lang="ts">
  export let title: string;
</script>

<svelte:head>
  <title>{title}</title>
  <meta
    name="description"
    content="V-Bot is a virtual assistant that can help you with your daily tasks."
  />
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
