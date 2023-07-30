<template>
  <div class="container penci_sidebar right-sidebar" style="transform: none;">
    <div id="main" class="penci-main-sticky-sidebar" style="position: relative; overflow: visible; box-sizing: border-box; min-height: 1px;">
      <div class="theiaStickySidebar" style="padding-top: 0px; padding-bottom: 1px; position: static; top: 80px; left: 77.4025px;">

      </div>
    </div>

    <Sidebar />

    <div class="clear-footer"></div>

    <WidgetArea />

  </div>

  <Footer />

  </template>

  <script lang="ts">
  import Sidebar from "./Sidebar.vue"
  import Footer from "./Footer.vue"
  import WidgetArea from "./WidgetArea.vue"

  export default {
    name: 'ShopView',
    components: {
      Sidebar,
      Footer,
      WidgetArea
    },
    setup() {

    },
  };
  </script>
