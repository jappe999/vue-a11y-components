<template>
  <a
    @focus="focussed = true"
    :href="href"
    class="skip-to-content"
    :class="focussed && 'skip-to-content--focussed'"
  >
    <slot>
      Skip to content
    </slot>
  </a>
</template>

<script>
export default {
  data: () => ({
    focussed: false
  }),

  props: {
    href: {
      required: true,
      default: '#content'
    }
  }
}
</script>

<style lang="scss">
.skip-to-content {
  position: absolute;
  top: -1000px;
  left: -1000px;
  height: 1px;
  width: 1px;
  text-align: center;
  visibility: hidden;

  &:focus,
  &:active,
  &:hover
  &--focussed {
    top: 0;
    left: 0;
    width: auto;
    height: auto;
    visibility: visible;
  }
}
</style>
