import { serve } from "https://deno.land/std@0.192.0/http/server.ts";

serve(async (req: Request) => {
    try {
        // 用传入请求的 URL 构建 URL 对象，并修改 hostname
        const url = new URL(req.url);
        url.hostname = "i.pximg.net";

        // 基于修改后的 URL 构造新的请求，请求参数使用原请求的配置
        // 注意：使用 url.toString() 构造新的请求 URL
        const modifiedRequest = new Request(url.toString(), req);

        // 假装我们是从 Pixiv 发起的请求
        const response = await fetch(modifiedRequest, {
            headers: {
                "Referer": "https://www.pixiv.net/",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; rv:122.0) Gecko/20100101 Firefox/122.0"
            }
        });

        if (!response.ok) {
            return new Response("Error fetching the resource.", { status: response.status });
        }

        return response;
    } catch (error: any) {
        console.error("Failed to fetch resource: ", error.message);
        return new Response("An error occurred while fetching the resource.", { status: 500 });
    }
});
