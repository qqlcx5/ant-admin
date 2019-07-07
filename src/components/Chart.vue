<template>
  <div class="chart" ref="chartDom"></div>
</template>

<script>
import echarts from "echarts";
import debounce from "lodash/debounce";
import { addListener, removeListener } from "resize-detector";

export default {
  name: "chart",
  props: {
    option: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {};
  },
  watch: {
    option(val) {
      this.myChart.setOption(val);
    }
    // option: {
    //   handle(val) {
    //     this.myChart.setOption(val);
    //   },
    //   deep: true
    // }
  },
  methods: {
    resize() {
      console.log("this.myChart.resize");
      this.myChart.resize();
    },
    renderChart() {
      this.myChart = echarts.init(this.$refs.chartDom);
      this.myChart.setOption(this.option);
    }
  },
  created() {
    this.resize = debounce(this.resize, 300);
  },
  mounted() {
    this.renderChart();
    addListener(this.$refs.chartDom, this.resize);
  },
  beforeDestroy() {
    //防止内存泄漏
    removeListener(this.$refs.chartDom, this.resize);
    this.chart.dispose();
    this.chart = null;
  }
};
</script>
<style lang="scss" scoped></style>
