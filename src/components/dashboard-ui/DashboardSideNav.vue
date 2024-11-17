<script setup>
import MainButton from '../shared/MainButton.vue'
import LogoBox from './sidebar/LogoBox.vue'
import NavList from './sidebar/NavList.vue'

function triggerAlert() {
  alert('This is to contact support')
}
</script>

<template>
  <div class="dashboard_side_nav p-3 md:pt-5 md:p-8 flex gap-3 md:flex-col md:justify-between">
    <div class="flex-grow">
      <LogoBox />
      <NavList />
    </div>
    <div>
      <div class="bg-secondary-500 h-full md:min-h-[100px] rounded-[10px] md:pt-7 md:pb-5 relative">
        <div class="md:absolute md:-top-7 w-full">
          <button
            @click="() => triggerAlert()"
            class="size-12 rounded-full md:border-[2px] md:border-primary-0 mx-auto bg-secondary-500 grid place-content-center"
          >
            <span class="text-primary-0 text-[20px] font-bold">?</span>
          </button>
        </div>

        <div class="max-w-[90%] mx-auto text-primary-0 text-center hidden md:block">
          <h5 class="font-bold text-[14px] mb-2">Help Center</h5>
          <p class="text-[12px]">
            Having trouble in learning. Please contact us for more questions.
          </p>
          <div class="mt-8">
            <MainButton
              buttonText="Go to help center"
              extraClass="!bg-primary-0 !text-secondary-500 !text-[12px] !px-5"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dashboard_side_nav {
  width: $dashboard-side-nav-width;
  background-color: $primary-0;
  position: relative;
  overflow-y: auto;

  @media (max-width: 768px) {
    position: fixed;
    width: 100%;
    bottom: 0;
  }
}
</style>
