<template>
  <div>
    <h2>Product {{ id }}</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem neque,
      minus amet iusto beatae obcaecati cumque voluptatibus cupiditate ut
      laudantium ratione! Ad exercitationem id aliquid distinctio neque tenetur
      similique ab.
    </p>
  </div>
</template>

<script setup>
const { id } = useRoute().params;

definePageMeta({
  layout: "products",
});
</script>

<style lang="scss" scoped></style>
