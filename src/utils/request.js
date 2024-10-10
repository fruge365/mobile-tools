// 一、导入模块：切记cnpm i axios -S
import axios from "axios";
import router from "@/router";
//request.js
import { createDiscreteApi } from "naive-ui";
const { message } = createDiscreteApi(["message"]);

// 二、创建axios实例
const request = axios.create({
    // baseURL: "/api",
    // .env 全局默认配置文件，不论什么环境都会加载合并
    // .env.development 开发环境下的配置文件  cnpm run serve
    // .env.production 生产环境下的配置文件   cnpm run build
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 5000,
    // headers: {
    //   // 意味着：后期post请求 body: '参数名=数据&...&参数名=数据
    //   "content-type": "application/x-www-form-urlencoded",
    // },
});

// 三、拦截器
let ajax = {};
request.interceptors.request.use(
    (config) => {
        // token
        let token =
            localStorage.getItem("token") || "9201591ba0eb36c8abaea2854274f5082";
        config.headers.token = token;
        // cancelToken
        // if (ajax[config.url]) {
        //   ajax[config.url].cancel("Operation canceled by the user.");
        //   delete ajax[config.url];
        // }
        ajax[config.url] = axios.CancelToken.source();
        config.cancelToken = ajax[config.url].token;

        return config;
    },
    (error) => Promise.reject(error)
);
request.interceptors.response.use(
    (response) => {

        // 403
        // if (response.code == 200) {
        //     message.error("无权访问，跳转中...");
        //     // router.push("/login");
        //     return;
        // }
        // //  登录过期
        // if (response.data.meta.msg.includes("TOKEN过期")) {
        //     message.error("TOKEN过期，请重新登录...");
        //     // TODO. 调用store去清除登录数据
        //     return;
        // }
        // 过滤.data.data
        return response.data;
    },
    (error) => {
        // 失败响应
        let errorObj = JSON.parse(JSON.stringify(error));
        // 关闭Loading
        // if (loadingInstance) loadingInstance.close();
        // 判断失败原因
        if (errorObj.message.includes("timeout")) {
            message.error(`${errorObj.config.url} 网请求超时，请稍后重试`);
        } else if (errorObj.message.includes("404")) {
            message.error(`${errorObj.config.url} 接口地址请求错误 404`);
        } else if (errorObj.message.includes("Network Error")) {
            message.error(`${errorObj.config.url} 网络错误`);
        } else {
            message.error(`${errorObj.config.url} ${errorObj.message}`);
        }
        return Promise.reject(error);
    }
);

// 四、导出
export default request;