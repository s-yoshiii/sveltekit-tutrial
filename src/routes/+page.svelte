<script>
  export let data;
</script>
<section class="w-full md:w-2/3 flex flex-col items-center px-3">
  {#each data.contents as content}
    <article class="flex flex-col shadow my-4">
      <!-- Article Image -->
      <a href="{content.id}" class="hover:opacity-75">
        <img src="{content.eyecatch?.url}" alt="" />
      </a>
      <div class="bg-white flex flex-col justify-start p-6">
        <a
          href={content.id}
          class="text-blue-700 text-sm font-bold uppercase pb-4"
          >{content.category.name}</a
        >
        <a href={content.id} class="text-3xl font-bold hover:text-gray-700 pb-4"
          >{content.title}</a
        >
        <a href={content.id} class="pb-6"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis
          porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis
          dui porta volutpat. In sit amet posuere magna..</a
        >
        <a href={content.id} class="uppercase text-gray-800 hover:text-black"
          >Continue Reading <i class="fas fa-arrow-right" /></a
        >
      </div>
    </article>
  {/each}
  <!-- Pagination -->
  <div class="flex items-center py-8">
    <a
      href="#"
      class="h-10 w-10 bg-blue-800 hover:bg-blue-600 font-semibold text-white text-sm flex items-center justify-center"
      >1</a
    >
    <a
      href="#"
      class="h-10 w-10 font-semibold text-gray-800 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center"
      >2</a
    >
    <a
      href="#"
      class="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3"
      >Next <i class="fas fa-arrow-right ml-2" /></a
    >
  </div>
</section>
