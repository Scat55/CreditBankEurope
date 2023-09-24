<template>
  <div>
    <div class="select">
      <p
        class="select__text"
        v-if="selected === ''"
      >Гражданство</p>
      <p v-else>{{ selected }}</p>
      <img
        src="../assets/images/arrow.svg"
        alt="Arrow"
        class="select__arrow"
        :class="{ rotate: rotate }"
        @click="showOptions()"
      >
    </div>
    <div
      class="options"
      v-if="isActive"
    >
      <span
        class="options__item"
        v-for="option in options"
        :key="option.id"
        @click="selectOptions(option)"
      >
        {{ option.value }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rotate: false,
      isActive: false
    }
  },
  props: {
    options: {
      type: Array,
      default() {
        return []
      }
    },
    selected: {
      type: String,
      default() {
        return ''
      }
    }
  },
  methods: {
    showOptions() {
      this.rotate = !this.rotate
      this.isActive = !this.isActive
    },
    selectOptions(option) {
      this.$emit('select', option)
      this.isActive = false
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/vars.scss';

.select {
  display: flex;
  justify-content: space-between;
  width: 42.5rem;
  border-radius: 0.625rem;
  background: rgb(39, 39, 39);
  padding: 1.875rem;
  color: $textColor;
  font-family: Geometria;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  border: none;
  outline: none;
  transition: all .3s;

  &__text {
    color: #6C6C6C;
    font-family: Geometria;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: 113.22%;
  }

  &__arrow {
    transition: all .3s;
  }

}

.options {
  display: flex;
  flex-direction: column;
  gap: 1.938rem;
  width: 42.5rem;
  border-radius: 0.625rem;
  background: rgb(39, 39, 39);
  padding: 1.875rem;
  color: $textColor;
  margin-top: 0.313rem;
  font-family: Geometria;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  border: none;
  outline: none;
  transition: all .3s;

  &__item {
    cursor: pointer;
  }

}

.rotate {
  transform: rotate(180deg);
}
</style>