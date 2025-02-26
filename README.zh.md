# Pixiv Img Deno

这是一个 Pixiv Img 的加速项目，可部署于 [Deno Playground](https://deno.dev) 上。项目后端的源代码来自 [PixivFE Image Proxy Cloudflare Workers](https://pixivfe-docs.pages.dev/hosting/image-proxy-server/#cloudflare-workers)。


> [!Warning]
>
> **严正声明**
>
> 请尊重 Pixiv 的创作者的合法权利！请勿将本项目用于任何违法用途，否则引起的任何后果与本项目及项目作者无关！

## 用途

本项目主要是配合 [PixivFE](https://pixivfe-docs.pages.dev/) 使用的图片代理，便于用户安全、隐私地浏览 Pixiv。当然，你也可以将其当作普通的 Pixiv Img 代理。

## 为什么用 Deno？

不为什么。我对 Deno 没什么了解和兴趣，只是想用用 Cloudflare Workers 之外的服务部署这个项目，又恰好想起来有这么个东西而已。

## 部署方法

- 使用 GitHub 登录 [Deno Dev](https://deno.dev) 平台。
- 点击 New Playground（**注意不是 New Project**）按钮，创建一个新的 Playground。
- 将本项目的 `main.ts` 复制下来，粘贴到 Playground 编辑器中，点击部署即可。

## Acknowledgments

- 感谢 Deno Dev 提供的免费额度。
- 感谢 PixivFE 的原始项目。

## License

MIT。