<script lang="ts">
  import AnimatedRoute from "$lib/Components/AnimatedRoute/SlideFromLeft.svelte";
  import Footer from "$lib/Components/Footer/Footer.svelte";
  import Navbar from "$lib/Components/Navbar/Navbar.svelte";
  import "../app.scss";
</script>

<svelte:head>
  <title>V-Bot</title>
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
