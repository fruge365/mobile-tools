<template>
  <div class="index">
    <!-- <h3 class="title">查询类</h3> -->

    {{ VisitData.location }} {{ VisitData.low }} {{ VisitData.tq }}
    {{ VisitData.week }}
    <div class="content">
      <n-card title="查询类">
        <ul>
          <li>网课题库</li>
        </ul>
      </n-card>
    </div>
    <!-- <h3 class="title">娱乐类</h3> -->
    <div class="content">
      <n-card title="娱乐类">
        <ul>
          <li @click="navigate">摸鱼人日历</li>
        </ul>
      </n-card>
    </div>
    <!-- <h3 class="title">实时类</h3> -->
    <div class="content">
      <n-card title="实时类"> 卡片内容 </n-card>
    </div>
    <!-- <h3 class="title">工具类</h3> -->
    <div class="content">
      <n-card title="工具类"> 卡片内容 </n-card>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { NCard } from "naive-ui";
import { useRouter } from "vue-router";
import { getVisitor } from "@/api/tools";
const router = useRouter();
const Data = ref([
  {
    title: "查询类",
    content: "卡片内容",
    route: "",
    children: [{ title: "网课题库", route: "" }],
  },
  {
    title: "娱乐类",
    content: "卡片内容",
    route: "",
    children: [
      { title: "摸鱼人日历", route: "" },
      { title: "Bing每日图片", route: "" },
      { title: "风景图片", route: "" },
      { title: "二次元图片", route: "" },
      { title: "电脑分辨率美图", route: "" },
      { title: "手机分辨率美图", route: "" },
      { title: "推荐头像", route: "" },
      { title: "精选头像", route: "" },
      { title: "动漫头像", route: "" },
      { title: "男生头像", route: "" },
      { title: "女生头像", route: "" },
      { title: "小众头像", route: "" },
      { title: "网易云热歌榜歌曲", route: "" },
      { title: "网易云新歌榜歌曲", route: "" },
      { title: "网易云飙升榜歌曲", route: "" },
      { title: "网易云原创榜歌曲", route: "" },
      { title: "一言句子", route: "" },
      { title: "骚话", route: "" },
      { title: "情话", route: "" },
      { title: "笑话", route: "" },
      { title: "舔狗日记", route: "" },
    ],
  },
  {
    title: "实时类",
    content: "卡片内容",
    route: "",
    children: [
      { title: "星座运势", route: "" },
      { title: "每日一句励志英语", route: "" },
      { title: "热搜热榜聚合", route: "" },
      { title: "微博实时热搜热榜", route: "" },
      { title: "今日头条实时热搜", route: "" },
      { title: "澎湃新闻实时热搜热榜", route: "" },
      { title: "虎扑步行街实时热搜热榜", route: "" },
      { title: "知乎实时热搜热榜", route: "" },
      { title: "知乎每日日报", route: "" },
      { title: "36氪24小时热榜", route: "" },
      { title: "哔哩哔哩全站日榜", route: "" },
      { title: "百度热点热榜", route: "" },
      { title: "抖音热点热榜", route: "" },
      { title: "豆瓣小组精选", route: "" },
      { title: "IT资讯热榜", route: "" },
      { title: "虎嗅网24小时热榜", route: "" },
      { title: "人人都是产品经理热文日榜", route: "" },
      { title: "虫族部落最新热门", route: "" },
    ],
  },
  {
    title: "工具类",
    content: "卡片内容",
    route: "",
    children: [
      { title: "二维码生成", route: "" },
      { title: "书摘生成", route: "" },
    ],
  },
]);

const VisitData = ref({});

const navigate = () => {
  router.push("/moyu");
};

const Visitor = async () => {
  try {
    const res = await getVisitor();
    console.log("🚀 ~ Visitor ~ res:", res);
    VisitData.value = res;
  } catch (error) {
    console.log(error);
  } finally {
  }
};
onMounted(() => {
  Visitor();
});
</script>

<style scoped lang="scss">
.index {
  width: 90%;
  margin: 0 auto;
  padding-top: 20px;
  .n-card {
    margin-top: 20px;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    ul {
      padding: 0;
      margin: 0;
    }
  }
}
</style>
