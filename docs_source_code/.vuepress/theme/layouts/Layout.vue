<template>
  <ParentLayout>
    <template #page-bottom>
      <!-- <footer class="font-sans bg-black text-white py-8 px-4">
          <div class="text-grey-darker text-center">©2019 Yours truely. All rights reserved.</div>
      </footer> -->
      <div class='my-footer'>
        HCI Lab, Department of Computer Science</br>
        196 Boston Ave., Tufts University, Medford, MA, 02155</br>
        Copyright © Tufts University School of Engineering. All Rights Reserved.
      </div>
    </template>
  </ParentLayout>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'

export default {
  name: 'Layout',
  components: {
    ParentLayout
  }
}
</script>

<style>
.my-footer {
  /* position: fixed; */
  /* left: 0; */
  bottom: 0;
  /* width: 100%; */
  /* background-color: red; */
  /* color: black; */
  text-align: center;
  font-size:smaller;
}
</style>