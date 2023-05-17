<template>
  <div class="h-screen w-screen bg-[#232323] flex justify-center">
    <div class="self-center relative">
      <transition name="big" appear>
        <svg
          class="absolute top-[-60px] left-[30px] origin-bottom"
          width="53"
          height="53"
          viewBox="0 0 53 53"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M52.29 26.14C52.29 27 51.61 27.68 50.77 27.68C38.01 27.68 27.7 38.01 27.7 50.75C27.7 51.6 27 52.29 26.16 52.29C25.31 52.29 24.62 51.6 24.62 50.75C24.62 38.01 14.29 27.68 1.55 27.68C0.69 27.68 0 27 0 26.14C0 25.3 0.69 24.6 1.54 24.6C14.28 24.6 24.61 14.28 24.61 1.53C24.61 0.68 25.31 0 26.15 0C26.99 0 27.69 0.68 27.69 1.53C27.69 14.28 38.01 24.6 50.76 24.6C51.61 24.6 52.29 25.3 52.29 26.14Z"
            fill="white"
          />
        </svg>
      </transition>
      <p class="text-white text-[64px] tracking-[.24em] font-[700] self-center">მადლობა</p>
      <transition name="small" appear>
        <svg
          class="absolute right-[35px] origin-bottom"
          width="33"
          height="33"
          viewBox="0 0 33 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M33 16.4937C33 17.0363 32.5709 17.4654 32.0407 17.4654C23.988 17.4654 17.4814 23.9834 17.4814 32.022C17.4814 32.5583 17.0396 32.9937 16.5095 32.9937C15.973 32.9937 15.5376 32.5583 15.5376 32.022C15.5376 23.9834 9.01836 17.4654 0.978199 17.4654C0.435456 17.4654 0 17.0363 0 16.4937C0 15.9637 0.435456 15.522 0.971888 15.522C9.01205 15.522 15.5313 9.01032 15.5313 0.965392C15.5313 0.429063 15.973 0 16.5032 0C17.0333 0 17.475 0.429063 17.475 0.965392C17.475 9.01032 23.988 15.522 32.0344 15.522C32.5709 15.522 33 15.9637 33 16.4937Z"
            fill="white"
          />
        </svg>
      </transition>
    </div>
  </div>
</template>


<style scoped>
.big-enter-active,
.big-leave-active {
  transition: all 1s ease-out;
}
.big-enter-from,
.big-leave-to {
  transform: translate(50%, 50%);
  opacity: 0;
}
.big-enter-to,
.big-leave-from {
  transform: translate(0, 0);
  opacity: 1;
}

.small-enter-active,
.small-leave-active {
  transition: all 1s ease-out;
}
.small-enter-from,
.small-leave-to {
  transform: translate(-50%, -50%);
  opacity: 0;
}
.small-enter-to,
.small-leave-from {
  transform: translate(0, 0);
  opacity: 1;
}
</style>