<script>
  export let data;
</script>

<svelte:head>
  <title>{data.title} | Blog Article</title>
</svelte:head>

<!-- Post Section -->
<section class="w-full md:w-2/3 flex flex-col items-center px-3">
  <article class="flex flex-col shadow my-4">
    <!-- Article Image -->
    <img src={data.eyecatch?.url} alt="" />
    <div class="bg-white flex flex-col justify-start p-6">
      <p class="text-blue-700 text-sm font-bold uppercase pb-4">
        {data.category.name}
      </p>
      <p class="text-3xl font-bold hover:text-gray-700 pb-4">{data.title}</p>
      {@html data.content}
    </div>
  </article>

  <div class="w-full flex pt-6">
    <a href="#" class="w-1/2 bg-white shadow hover:shadow-md text-left p-6">
      <p class="text-lg text-blue-800 font-bold flex items-center">
        <i class="fas fa-arrow-left pr-1" /> Previous
      </p>
      <p class="pt-2">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</p>
    </a>
    <a href="#" class="w-1/2 bg-white shadow hover:shadow-md text-right p-6">
      <p class="text-lg text-blue-800 font-bold flex items-center justify-end">
        Next <i class="fas fa-arrow-right pl-1" />
      </p>
      <p class="pt-2">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</p>
    </a>
  </div>

  <div
    class="w-full flex flex-col text-center md:text-left md:flex-row shadow bg-white mt-10 mb-10 p-6"
  >
    <div class="w-full md:w-1/5 flex justify-center md:justify-start pb-4">
      <img
        src="https://source.unsplash.com/collection/1346951/150x150?sig=1"
        class="rounded-full shadow h-32 w-32"
      />
    </div>
    <div class="flex-1 flex flex-col justify-center md:justify-start">
      <p class="font-semibold text-2xl">David</p>
      <p class="pt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel
        neque non libero suscipit suscipit eu eu urna.
      </p>
      <div
        class="flex items-center justify-center md:justify-start text-2xl no-underline text-blue-800 pt-4"
      >
        <a class="" href="#">
          <i class="fab fa-facebook" />
        </a>
        <a class="pl-4" href="#">
          <i class="fab fa-instagram" />
        </a>
        <a class="pl-4" href="#">
          <i class="fab fa-twitter" />
        </a>
        <a class="pl-4" href="#">
          <i class="fab fa-linkedin" />
        </a>
      </div>
    </div>
  </div>
</section>
