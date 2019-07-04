<template>
  <div class="SettingDrawer">
    <a-drawer
      title="自定义风格"
      placement="right"
      @close="onClose"
      :visible="visible"
      width="300px"
    >
      <!-- 抽屉图标 start handle	设置后抽屉直接挂载到DOM上，你可以通过该handle控制抽屉打开关闭 -->
      <template #handle>
        <div class="handle" @click="visible = !visible">
          <a-icon :type="visible ? 'close' : 'setting'"></a-icon>
        </div>
      </template>
      <!-- 抽屉图标 end-->
      <!-- 抽屉单选框 start -->
      <div>
        <h2>整体风格定制</h2>
        <a-radio-group
          :value="$route.query.navTheme || 'dark'"
          @change="e => handleSettingChange('navTheme', e.target.value)"
        >
          <a-radio value="dark">黑色</a-radio>
          <a-radio value="light">白色</a-radio>
        </a-radio-group>
        <h2>导航模式</h2>
        <a-radio-group
          :value="$route.query.navLayout || 'left'"
          @change="e => handleSettingChange('navLayout', e.target.value)"
        >
          <a-radio value="left">左侧</a-radio>
          <a-radio value="top">顶部</a-radio>
        </a-radio-group>
      </div>
      <!-- 抽屉单选框 end -->
    </a-drawer>
  </div>
</template>

<script>
export default {
  name: "SettingDrawer",
  data() {
    return {
      visible: false // 抽屉打开关闭
    };
  },
  methods: {
    onClose() {
      this.visible = false;
    },
    handleSettingChange(type, value) {
      // ...this.$route.query把之前的路由信息保留下来
      this.$router.push({ query: { ...this.$route.query, [type]: value } });
    }
  }
};
</script>
<style lang="less" scoped>
.handle {
  position: absolute;
  top: 240px;
  right: 300px;
  width: 48px;
  height: 48px;
  background: #1890ff;
  color: #fff;
  font-size: 24px;
  text-align: center;
  line-height: 48px;
  border-radius: 3px 0 0 3px;
}
</style>
