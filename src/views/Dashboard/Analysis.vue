<template>
  <div class="Analysis">
    <chart :option="chartOption" style=" height:400px;" />
  </div>
</template>

<script>
import Chart from "@/components/Chart";
// mock数据
// import random from "lodash/random";
import axios from "axios";
export default {
  name: "Analysis",
  components: {
    Chart
  },
  data() {
    return {
      chartOption: {}
    };
  },
  methods: {
    getChartData() {
      axios.get("/api/dashboard/chart", { params: { ID: 12345 } }).then(() => {
        this.chartOption = {
          title: {
            text: "ECharts 入门示例"
          },
          tooltip: {},
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
          },
          yAxis: {},
          series: [
            {
              name: "销量",
              type: "bar",
              // data: response.data
              data: [1, 43, 21, 56, 88, 66]
            }
          ]
        };
      });
    }
  },
  mounted() {
    this.getChartData();
    this.interval = setInterval(() => {
      this.chartOption.series[0].data = this.chartOption.series[0].data.map(
        () => Math.random(500)
      );
      this.chartOption = { ...this.chartOption };
    }, 3000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  }
};
</script>
<style lang="less" scoped></style>
