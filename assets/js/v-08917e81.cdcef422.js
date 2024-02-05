"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[6765],{35903:(e,n,a)=>{a.r(n),a.d(n,{default:()=>i});var t=a(64304);const s={href:"https://github.com/louislam/uptime-kuma",target:"_blank",rel:"noopener noreferrer"},p=(0,t.uE)('<p>虽然 Uptime Kuma 不能执行后续的自动化，但可以通过 webhook 触发其他操作。</p><h2 id="部署命令" tabindex="-1"><a class="header-anchor" href="#部署命令"><span>部署命令</span></a></h2><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.8&quot;</span>\n\n<span class="token key atrule">services</span><span class="token punctuation">:</span>\n  <span class="token key atrule">uptime-kuma</span><span class="token punctuation">:</span>\n    <span class="token key atrule">image</span><span class="token punctuation">:</span> louislam/uptime<span class="token punctuation">-</span>kuma<span class="token punctuation">:</span><span class="token number">1</span>\n    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> uptime<span class="token punctuation">-</span>kuma\n    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> /volume1/docker/uptime<span class="token punctuation">-</span>kuma/data<span class="token punctuation">:</span>/app/data\n      <span class="token comment"># 用于 Docker 容器监控</span>\n      <span class="token punctuation">-</span> /var/run/docker.sock<span class="token punctuation">:</span>/var/run/docker.sock\n    <span class="token key atrule">ports</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;3001:3001&quot;</span> <span class="token comment"># &lt;Host Port&gt;:&lt;Container Port&gt;</span>\n    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',3),o={},i=(0,a(86683).Z)(o,[["render",function(e,n){const a=(0,t.up)("ExternalLinkIcon");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t._)("p",null,[(0,t._)("a",s,[(0,t.Uk)("Uptime Kuma"),(0,t.Wm)(a)]),(0,t.Uk)(" 是一款轻量级自动化运维监控工具，支持监控 HTTP(s)、TCP、Ping、DNS 记录、推送以及 Steam 游戏服务器的正常运行时间。对于检查特定关键词是否存在于网页中等轻量级监控是足够了。相对于 Check 酱，它的设置更为简单，非常适合用于网页监测服务。")]),p])}]])},86683:(e,n)=>{n.Z=(e,n)=>{const a=e.__vccOpts||e;for(const[e,t]of n)a[e]=t;return a}},13538:(e,n,a)=>{a.r(n),a.d(n,{data:()=>t});const t=JSON.parse('{"key":"v-08917e81","path":"/services/dockers-on-nas/uptime-kuma.html","title":"Uptime Kuma：轻量运维监控","lang":"zh-CN","frontmatter":{"article":false,"title":"Uptime Kuma：轻量运维监控","order":82,"description":"Uptime Kuma 是一款轻量级自动化运维监控工具，支持监控 HTTP(s)、TCP、Ping、DNS 记录、推送以及 Steam 游戏服务器的正常运行时间。对于检查特定关键词是否存在于网页中等轻量级监控是足够了。相对于 Check 酱，它的设置更为简单，非常适合用于网页监测服务。 虽然 Uptime Kuma 不能执行后续的自动化，但可以通过 webhook 触发其他操作。","head":[["meta",{"property":"og:url","content":"https://newzone.top/services/dockers-on-nas/uptime-kuma.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"Uptime Kuma：轻量运维监控"}],["meta",{"property":"og:description","content":"Uptime Kuma 是一款轻量级自动化运维监控工具，支持监控 HTTP(s)、TCP、Ping、DNS 记录、推送以及 Steam 游戏服务器的正常运行时间。对于检查特定关键词是否存在于网页中等轻量级监控是足够了。相对于 Check 酱，它的设置更为简单，非常适合用于网页监测服务。 虽然 Uptime Kuma 不能执行后续的自动化，但可以通过 webhook 触发其他操作。"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-05T11:04:08.000Z"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:modified_time","content":"2024-02-05T11:04:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Uptime Kuma：轻量运维监控\\",\\"description\\":\\"Uptime Kuma 是一款轻量级自动化运维监控工具，支持监控 HTTP(s)、TCP、Ping、DNS 记录、推送以及 Steam 游戏服务器的正常运行时间。对于检查特定关键词是否存在于网页中等轻量级监控是足够了。相对于 Check 酱，它的设置更为简单，非常适合用于网页监测服务。 虽然 Uptime Kuma 不能执行后续的自动化，但可以通过 webhook 触发其他操作。\\"}"]]},"headers":[{"level":2,"title":"部署命令","slug":"部署命令","link":"#部署命令","children":[]}],"git":{"createdTime":1707131048000,"updatedTime":1707131048000,"contributors":[{"name":"cenzhifang","email":"105171265+cenzhifang@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":0.59,"words":178},"filePathRelative":"services/dockers-on-nas/uptime-kuma.md","localizedDate":"2024年2月5日","excerpt":"<p><a href=\\"https://github.com/louislam/uptime-kuma\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Uptime Kuma</a> 是一款轻量级自动化运维监控工具，支持监控 HTTP(s)、TCP、Ping、DNS 记录、推送以及 Steam 游戏服务器的正常运行时间。对于检查特定关键词是否存在于网页中等轻量级监控是足够了。相对于 Check 酱，它的设置更为简单，非常适合用于网页监测服务。</p>\\n<p>虽然 Uptime Kuma 不能执行后续的自动化，但可以通过 webhook 触发其他操作。</p>","autoDesc":true}')}}]);