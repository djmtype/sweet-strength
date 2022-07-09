<template>
  <div>
    <a
      v-if="href && externalTarget"
      :href="href"
      :class="className"
      target="_blank"
      rel="noopener"
      ><slot
    /></a>

    <a v-else-if="href" :href="href" :class="className"><slot /></a>
    <button v-else :class="className"><slot /></button>
  </div>
</template>

<script setup>
const props = defineProps({
  className: {
    type: String,
    default: "button",
  },
  href: {
    type: String,
    default: null,
  },
  externalTarget: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.button {
  display: inline-flex;
  margin: 0.5em 0;
  padding: 1em 2em;
  background: #fff;
  border: 2px solid var(--color-primary);
  border-radius: 5px;
  color: var(--color-primary);
  font-size: 1em;
  text-decoration: none;
  cursor: pointer;
  transition: 0.3s;
  font-weight: 600;
}

.button:hover {
  background: tomato;
  color: #fff;
}
</style>
