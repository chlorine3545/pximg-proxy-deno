// 处理来自用户的请求
async function handleRequest(request: Request): Promise<Response> {
    try {
        const url = new URL(request.url);
        url.hostname = "i.pximg.net";

        // 创建修改后的请求
        const modifiedRequest = new Request(url, request);
        const response = await fetch(modifiedRequest, {
            headers: {
                'Referer': 'https://www.pixiv.net',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.3'
            }
        });

        if (!response.ok) {
            return new Response("Error fetching the Pixiv image.", { status: response.status });
        }

        // 添加 CORS 头
        const newHeaders = new Headers(response.headers);
        newHeaders.set('Access-Control-Allow-Origin', '*');

        return new Response(response.body, {
            status: response.status,
            statusText: response.statusText,
            headers: newHeaders
        });
    } catch (error) {
        console.error("Failed to fetch Wikipedia image: ", error);
        return new Response("An error occurred while fetching the Pixiv image.", { status: 500 });
    }
}

// 使用 Deno.serve API 启动服务器
Deno.serve({ port: 4242 }, handleRequest);