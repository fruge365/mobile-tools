
import request from "@/utils/request";

// 工具类


// 二维码生成API接口
export const getQr = () => {
    return request({
        url: `/qr`,
        method: "get",
    });
};

// 书摘生成API接口
export const getArtText = () => {
    return request({
        url: `/artText`,
        method: "get",
    });
};

// 天气情况API接口
export const getWeather = () => {
    return request({
        url: `/weather`,
        method: "get",
    });
};

// 获取IP信息
export const getIpInfo = () => {
    return request({
        url: `/ipInfo`,
        method: "get",
    });
};

// IP天气签名档API接口
export const getVisitor = () => {
    return request({
        url: `/visitor.info`,
        method: "get",
    });
};

// 手机号码归属地查询API接口
export const getPhone = () => {
    return request({
        url: `/phone`,
        method: "get",
    });
};
