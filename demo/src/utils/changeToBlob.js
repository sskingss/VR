// 引用 CDN 图片
export function getImage(url) {
    fetch(url).then((response) => {
        return response.blob();
    });
}