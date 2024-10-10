import layout from "@/layout/index.vue"
import path from "path"
// 导出 routes
const routes = [
    {
        path: "/",
        redirect: "/home",

    },
    {
        path: '/',
        meta: {
            title: "首页"
        },

        name: "layout",
        component: layout,
        children: [
            {
                path: "/home",
                name: "home",
                component: () => import("@/views/home/index.vue")
            },
            // 摸鱼人日历
            {
                path: "/moyu",
                name: "moyu",
                component: () => import("@/views/fun/moyu.vue")
            }
        ]
    }
]
export default routes