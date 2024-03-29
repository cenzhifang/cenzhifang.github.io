---
article: false
title: Reader：小说/书籍阅读
order: 11
---

[reader](https://github.com/hectorqin/reader) 是阅读 3 的服务器版，为阅读爱好者提供全面的功能支持。

reader 提供了书源管理、书架布局定制、强大的搜索功能、书海浏览、阅读体验的优化，支持移动端适配、换源、多种翻页方式和手势支持。用户可以自定义主题和样式，进行 WebDAV 同步，实施文字替换过滤，甚至听书功能（部分浏览器支持）。此外，它支持书籍的导入和分组，包括本地 TXT、EPUB、UMD 和 PDF 格式，以及 RSS 订阅。reader 还提供定时书架更新、并发搜书功能，以及本地书仓，同时支持 Kindle 阅读，满足多样化的阅读需求。

## 异常监测

我设置了数千条书源，导致容器经常报错，几乎每隔几天就会出现提示「点击设置后端接口前缀」。这不仅使 reader 无法正常使用，还会导致 NAS 的 CPU 被疯狂占用，必须重启容器才能恢复正常。

因此，我使用 Uptime Kuma 监测 reader 后端 `http://localhost:8080/reader3/getUserInfo` 的运行状态，当异常时就触发 Docker API 执行指定容器的重启命令。值得注意的是，Uptime Kuma 在恢复时也会触发通知，意味着可能会两次重启 reader 容器。如果不希望发生多次重启，可以考虑使用 n8n 来判断状态。

## 部署命令

```yml
# https://github.com/hectorqin/reader/blob/master/docker-compose.yml
version: "3.1"
services:
  # reader 在线阅读
  # 公开服务器(服务器位于日本)：[https://reader.nxnow.top](https://reader.nxnow.top) 测试账号/密码分别为 guest/guest123，也可自行创建账号添加书源，不定期删除长期未登录账号 (2 周)
  # 书源集合 : [https://legado.aoaostar.com/](https://legado.aoaostar.com/) 点击打开连接，添加远程书源即可
  # 公众号汇总 : [https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MjM5MzMyMDgyMA==&action=getalbum&album_id=2397535253763801090#wechat_redirect](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MjM5MzMyMDgyMA==&action=getalbum&album_id=2397535253763801090#wechat_redirect)
  # 手动更新方式 : docker-compose pull && docker-compose up -d
  reader:
    image: hectorqin/reader
    #image: hectorqin/reader:openj9-latest #docker 镜像，arm64 架构或小内存机器优先使用此镜像。启用需删除上一行
    container_name: reader #容器名 可自行修改
    restart: always
    ports:
      - 4396:8080 #4396 端口映射可自行修改
    volumes:
      - /volume1/docker/reader/logs:/logs #log 映射目录 /home/reader/logs 映射目录可自行修改
      - /volume1/docker/reader/storage:/storage #数据映射目录 /home/reader/storage 映射目录可自行修改
    environment:
      - SPRING_PROFILES_ACTIVE=prod
      - READER_APP_USERLIMIT=10 #用户上限，默认 50
      - READER_APP_USERBOOKLIMIT=200 #用户书籍上限，默认 200
      - READER_APP_CACHECHAPTERCONTENT=true #开启缓存章节内容 V2.0
      # READER_APP_REMOTEWEBVIEWAPI=http://readerwebview:8050 #启用 webview(若下方 readerwebview 容器不开启需注释此行
      # ↓多用户模式配置↓
      #- READER_APP_SECURE=true #开启登录鉴权，开启后将支持多用户模式
      #- READER_APP_SECUREKEY=adminpwd  #管理员密码  建议修改
      #- READER_APP_INVITECODE=registercode #注册邀请码 建议修改，如不需要可注释或删除
    # 如需支持 webview 书源，打开 (占用较大，不需要可加 # 注释)
    #  readerwebview:
    #    image: hectorqin/remote-webview
    #    container_name: readerwebview
    #    restart: always
    #    environment:
    #      - TZ=Asia/Shanghai
    # volumes:
    #  reader:
    #  readerwebview:
```

原本我在 compose 命令中添加 healthcheck，希望当容器 unhealth 时自动重启。但实现起来更加复杂，需要另外使用容器，因此改用 Uptime Kuma 方案。

```yml
# ↓健康检查：当书源较多时，可能隔几天就会出现后端崩溃，会提示「点击设置后端接口前缀」↓
# ↓此时可通过健康检查重启后端，以解决此问题，如不需要可注释或删除↓
healthcheck:
  test: [
      "CMD",
      "wget",
      "--spider",
      "-S",
      "http://localhost:8080/reader3/getUserInfo",
    ] # 需要检查的健康状态的 URL
  interval: 10m # 健康检查的间隔时间
  timeout: 30s # 健康检查的超时时间
  retries: 3 # 健康检查失败后的重试次数
```
