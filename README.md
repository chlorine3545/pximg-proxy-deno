# Pixiv Img Deno

This is a Pixiv Img acceleration project that can be deployed on [Deno Playground](https://deno.dev). The backend source code comes from [PixivFE Image Proxy Cloudflare Workers](https://pixivfe-docs.pages.dev/hosting/image-proxy-server/#cloudflare-workers).

> [!Warning]
>
> **Important Disclaimer**
>
> Please respect the legal rights of Pixiv creators! Do not use this project for any illegal purposes. The project and its authors bear no responsibility for any consequences resulting from misuse!

## Purpose

This project primarily serves as an image proxy for [PixivFE](https://pixivfe-docs.pages.dev/), enabling users to browse Pixiv safely and privately. Of course, you can also use it as a regular Pixiv Img proxy.

## Why Deno?

Just because. I don't have much knowledge of or interest in Deno - I just wanted to deploy this project on a service other than Cloudflare Workers, and happened to remember that Deno exists.

## Deployment Method

- Login to [Deno Dev](https://deno.dev) platform using GitHub.
- Click the New Playground button (**Note: not New Project**) to create a new Playground.
- Copy the `main.ts` from this project, paste it into the Playground editor, and click deploy.

## Acknowledgments

- Thanks to Deno Dev for providing the free tier.
- Thanks to the original PixivFE project.

## License

MIT.