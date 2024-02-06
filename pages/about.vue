<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
      laudantium dignissimos, quos eum quas adipisci sequi, dolore error beatae
      cupiditate repellat odit blanditiis quidem fuga ratione fugiat porro
      aliquid assumenda.
    </p>

    <div class="flex gap-4">
      <p>This message comes from api route: testApi</p>
      <p>{{ data.message }}</p>
    </div>
  </div>
</template>

<script setup>
const { data } = useFetch("/api/testApi");
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}

p {
  margin: 20px 0;
}
</style>
