<template>
  <label class="toggle">
    <input type="checkbox" />
    <span class="toggle-slider"></span>
  </label>
</template>

<style scoped lang="scss">
.toggle {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 28px;
}

.toggle input {
  display: none;
}

.toggle-slider {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* background-color: #ccc; */
  background-color: #d8d8d8;
  border-radius: 28px;
  transition: 0.4s;
}

.toggle-slider:before {
  content: '';
  position: absolute;
  width: 24px;
  height: 24px;
  background-color: white;
  border-radius: 50%;
  left: 2px;
  top: 2px;
  transition: 0.4s;
}

.toggle input:checked + .toggle-slider {
  /* background-color: #2196f3; */
  background-color: $secondary-400;
}

.toggle input:checked + .toggle-slider:before {
  transform: translateX(22px);
}
</style>
