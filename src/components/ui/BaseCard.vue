
<template>
<!-- Card component which wil be used in may other components.
Thats why this component will be imported in main.js, so i can access it anywhere.  -->
    <div class="card">
        <slot>

        </slot>
    </div>
</template>

<style scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
}
</style>