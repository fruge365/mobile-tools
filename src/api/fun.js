import request from "@/utils/request";

// 娱乐类


// 摸鱼人日历API接口
export const getMoyu = () => {
    return request({
        url: `/moyu?type=json`,
        method: "get",
    });
};
