<template>
  <div>
    <nav>
      <NuxtLink to="/products">Logo with products</NuxtLink>
    </nav>
    <!-- output the page content -->
    <div>
      <slot />
    </div>

    <footer>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/products">Products</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
      </ul>
    </footer>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>
