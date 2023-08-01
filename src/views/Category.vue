
<template>

  <div class="container penci-breadcrumb" style="margin-top:25px;text-transform: capitalize;">
    <span><a class="crumb" href="/">Home</a></span>
    <i class="penci-faicon fa fa-angle-right"></i>
    <span>{{selectedCategory}}</span>
  </div>

  <div class="archive-box" style="padding-left:30px; text-align: left;">
    <div class="title-bar">
      <span>Category:</span>
      <h1>{{ selectedCategory }}</h1>
    </div>
  </div>

  <div class="container penci_sidebar right-sidebar" style="transform: none;">
    <div id="main" class="penci-layout-list penci-main-sticky-sidebar" style="position: relative; overflow: visible; box-sizing: border-box; min-height: 1px;">
      <div class="theiaStickySidebar" style="padding-top: 0px; padding-bottom: 1px; position: static; top: 80px; left: 77.4025px;">
        <CategorySection v-if="selectedCategory != 'video'" :category="selectedCategory" :showLoadMore="true"  />
        <CategorySection v-if="selectedCategory == 'video'" :category="selectedCategory" :showLoadMore="true"  />
      </div>
    </div>

    <Sidebar />
  </div>

  <WidgetArea />
  </template>

  <script lang="ts">
  import Sidebar from "./Sidebar.vue"
  import WidgetArea from "./WidgetArea.vue"
  import CategorySection from "./CategorySection.vue"


  export default {
    name: 'Category',
    components: {
      Sidebar,
      WidgetArea,
      CategorySection
    },
    setup() {

    },
    data() {
      return {
        selectedCategory: ''
      }
    },
    methods: {
      fecthContent: function() {
        this.selectedCategory = this.$route.params.category as string
      },
    },
    beforeMount() {
      this.fecthContent()
    },
  };
  </script>
