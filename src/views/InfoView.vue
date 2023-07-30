<template>

  <div class="container penci-breadcrumb" style="margin-top:25px;text-transform: capitalize;">
    <span><a class="crumb" href="/">Home</a></span>
    <i class="penci-faicon fa fa-angle-right"></i>
    <span>Information</span>
  </div>

 <div class="archive-box" style="padding-left:30px; text-align: left;">
    <div class="title-bar">
      <span>Information</span>
    </div>
  </div>

  <div class="container penci_sidebar right-sidebar" style="transform: none;">
    <div id="main" class="penci-layout-list penci-main-sticky-sidebar" style="position: relative; overflow: visible; box-sizing: border-box; min-height: 1px;">
      <div class="theiaStickySidebar" style="padding-top: 0px; padding-bottom: 1px; position: static; top: 80px; left: 77.4025px;">
        <a name="cookies"></a>
        <h3>Cookies</h3>
        <p></p>

        <a name="data"></a>
        <h3>Data Information</h3>
        <p></p>

        <a name="trademarks"></a>
        <h3>Copyrights &amp; Trademarks</h3>
        <p></p>

      </div>
    </div>

    <Sidebar />
  </div>

  <WidgetArea />


</template>

  <script lang="ts">
  import Sidebar from "./Sidebar.vue"
  import Footer from "./Footer.vue"
  import WidgetArea from "./WidgetArea.vue"

  export default {
    name: 'InfoView',
    components: {
      Sidebar,
      Footer,
      WidgetArea
    },
    setup() {

    },
  };
  </script>
