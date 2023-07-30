
<template>
  <div class="container penci_sidebar right-sidebar" style="transform: none;">
    <div id="main" class="penci-main-sticky-sidebar" style="position: relative; overflow: visible; box-sizing: border-box; min-height: 1px;">
      <div class="theiaStickySidebar" style="padding-top: 0px; padding-bottom: 1px; position: static; top: 80px; left: 77.4025px;">
        <CategorySection className="style-7" :tag="selectedTag" :showLoadMore="true" />
        <Share tag="selectedTag" />
        <Related />
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
  import CategorySection from "./CategorySection.vue"
  import Share from "./Share.vue"
  import Pagination from "./Pagination.vue"
  import Related from "./Related.vue"

  export default {
    name: 'Tag',
    components: {
      Sidebar,
      Footer,
      WidgetArea,
      CategorySection,
      Share,
      Pagination,
      Related
    },
    setup() {

    },
    data() {
      return {
        selectedTag: ''
      }
    },
    methods: {
      fecthContent: function() {
        this.selectedTag = this.$route.params.tag as string
      },
    },
    beforeMount() {
      this.fecthContent()
    },
  };
  </script>
