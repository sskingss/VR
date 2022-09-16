// 引用 CDN 图片
export async function getImage(url) {
    const res = await fetch(url, {
        mode: 'no-cors', // no-cors, *cors, same-origin
        credentials: 'omit', // 不需要发送 cookie
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    });
    return res.url();
}