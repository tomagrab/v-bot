<script lang="ts">
  import "../app.css";
</script>

<div class=" flex min-h-screen">
  <aside class="basis-1/4 flex flex-col items-center">Some content</aside>
  <main class="flex flex-col items-center">
    <slot />
  </main>
</div>
