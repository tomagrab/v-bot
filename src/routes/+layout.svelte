<script lang="ts">
  import AnimatedRoute from "$lib/AnimatedRoute/AnimatedRoute.svelte";
  import Navbar from "$lib/Navbar/Navbar.svelte";
  import "../app.scss";
</script>

<svelte:head>
  <title>V-Bot</title>
</svelte:head>

<div class="app min-h-screen flex flex-col">
  <Navbar />

  <div class="flex-grow flex">
    <aside class="sidebar basis-1/3 flex flex-col items-center px-4">
      <ul>
        <li><a href="/UserGuide">User Guide</a></li>
        <li><a href="/Features">Features</a></li>
        <li><a href="/Information">Information</a></li>
        <li><a href="/FAQs">FAQs</a></li>
      </ul>
    </aside>
    <main class="main basis-2/3 px-4">
      <AnimatedRoute>
        <div class="flex flex-col items-center pb-4">
          <slot />
        </div>
      </AnimatedRoute>
    </main>
  </div>
</div>

<style lang="scss">
  @import "../app.scss";
  .sidebar__title {
    border-bottom: 1px solid $light;
  }
</style>
