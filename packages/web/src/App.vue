<!-- App.vue -->
<script setup lang="ts">
import {onBeforeMount, ref, watch} from "vue";
import zhCN from "ant-design-vue/es/locale/zh_CN";
import enGB from "ant-design-vue/es/locale/en_GB";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import {useI18n} from "vue-i18n";
import {useTheme} from '@/store/hooks'

const {theme, initTheme} = useTheme()
const {locale} = useI18n();

const localeRef = ref(zhCN);


onBeforeMount(() => {
  initTheme()
})

watch(
  () => locale.value,
  (val) => {
    if (val === "en") {
      dayjs.locale("en");
      localeRef.value = enGB;
    } else {
      dayjs.locale("zh-cn");
      localeRef.value = zhCN;
    }
  }
);
</script>

<template>
  <a-config-provider :theme="theme" :locale="localeRef">
    <router-view/>
  </a-config-provider>
</template>
