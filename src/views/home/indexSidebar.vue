<template>
  <van-config-provider :theme-vars="themeVars">
    <van-popup
      v-model:show="show"
      position="left"
      :style="{ height: '100%', width: '85%', backgroundColor: '#f7f7f7' }"
    >
      <!-- 登录 -->
      <div class="top">
        <div class="user"></div>
        <div class="login">立即登录<van-icon name="arrow" /></div>
        <van-icon name="scan" class="scan" />
      </div>

      <!-- 会员 -->
      <div class="vip">
        <div class="vip-top">
          <div class="vip-top__wrap">
            <div class="title">开通黑胶VIP</div>
            <div class="tip">立享超21项专属特权></div>
          </div>
          <div class="button">会员中心</div>
        </div>
        <van-divider :style="{ borderColor: '#fee3de', margin: '13px 0', opacity: '.3' }" />
        <div class="vip-bottom">
          <div class="text">受邀专享，黑胶VIP首月仅3元！</div>
          <div class="photo"></div>
        </div>
      </div>

      <!-- 消息 -->
      <van-cell-group inset>
        <van-cell title="消息中心" icon="envelop-o" is-link />
        <van-cell title="云贝中心" icon="cash-back-record" value="做任务赚云贝" is-link />
      </van-cell-group>

      <!-- 音乐服务 -->
      <van-cell-group inset>
        <van-cell value="音乐服务" />
        <van-cell title="云村有票" icon="coupon-o" value="热门演出" is-link />
        <van-cell title="商城" icon="cart-o" value="0元抢耳机" is-link />
        <van-cell title="Beat专区" icon="gift-o" is-link />
        <van-cell title="口袋彩铃" icon="music-o" value="浪漫铃音来袭" is-link />
        <van-cell title="游戏专区" icon="bag-o" is-link />
      </van-cell-group>

      <!-- 其他 -->
      <van-cell-group inset>
        <van-cell value="其他" />
        <van-cell title="设置" icon="setting-o" is-link />
        <van-cell title="深色模式" icon="exchange" is-link>
          <template #right-icon>
            <van-switch v-model="checked" active-color="#ee0a24" size="24" />
          </template>
        </van-cell>
        <van-cell title="定时关闭" icon="clock-o" is-link />
        <van-cell title="我的客服" icon="service-o" is-link />
      </van-cell-group>
    </van-popup>
  </van-config-provider>
</template>

<script setup>
import { ref, computed } from 'vue'
// props - emit
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['update:modelValue'])

// show
const show = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})

// 深色模式
const checked = ref(false)

// 自定义样式
const themeVars = {
  cellFontSize: '17px',
  cellVerticalPadding: '15px',
  cellIiconSize: '17px',
  cellGroupInsetPadding: '18px',
  cellGroupInsetBorderRadius: '16px',
  cellRightIconColor: '#cacaca'
}
</script>

<style lang="scss" scoped>
:deep(.van-cell__left-icon) {
  margin-right: 12px;
}
:deep(.van-cell__value) {
  font-size: 12px;
}
:deep(.van-cell__value--alone) {
  color: #969799;
}
.top {
  @include flex;
  margin: 16px;
  .user {
    margin-right: 8px;
    @include circle(32px);
    background-color: #f8f2f1;
  }
  .login {
    margin-left: 4px;
    font-size: 16px;
    font-weight: 600;
  }
  .scan {
    margin-left: auto;
    font-size: 24px;
    font-weight: 900;
  }
}
.vip {
  margin: 18px;
  padding: 16px 16px 14px;
  background: linear-gradient(#2e2e2e, #3f3f3f);
  border-radius: 16px;
  .vip-top {
    @include flex(top);
    &__wrap {
      .title {
        color: #fee3de;
        font-size: 16px;
        font-weight: bold;
      }
      .tip {
        margin-top: 4px;
        color: rgba($color: #fee3de, $alpha: 0.5);
        font-size: 12px;
        letter-spacing: 1px;
      }
    }
    .button {
      width: 64px;
      height: 22px;
      font-size: 11px;
      text-align: center;
      line-height: 22px;
      color: #fee3de;
      border: 1px solid rgba($color: #fee3de, $alpha: 0.5);
      border-radius: 22px;
    }
  }
  .vip-bottom {
    .text {
      color: rgba($color: #fee3de, $alpha: 0.5);
      font-size: 12px;
      letter-spacing: 1px;
    }
  }
}
</style>
