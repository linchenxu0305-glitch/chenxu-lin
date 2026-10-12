import React, { useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles.css";

gsap.registerPlugin(ScrollTrigger);

const engineer = {
  name: "林晨旭",
  displayName: {
    zh: "林晨旭",
    en: "Lin Chenxu",
  },
  email: "linchenxu0305@gmail.com",
  wechat: "ws90ws000",
};

const i18n = {
  zh: {
    navItems: [
      { label: "首页", href: "#home" },
      { label: "服务", href: "#services" },
      { label: "作品集", href: "#portfolio" },
      { label: "现场案例", href: "#live" },
      { label: "关于", href: "#about" },
      { label: "联系", href: "#contact" },
    ],
    menuLabel: "打开导航菜单",
    navAria: "主导航",
    hero: {
      eyebrow: "Mixing / Mastering",
      role: "混音与母带工程师",
      intro:
        "林晨旭，中英两地执业的混音与母带工程师，英国约克大学音频与音乐技术硕士。",
      detail:
        "深耕立体声全流程制作，覆盖流行、电子、管弦乐等多元风格，作品累计播放量超千万，曾获丹尼奖国际混音赛事全球金奖。",
      actionAria: "个人链接与合作入口",
      consult: "咨询合作",
      scrollAria: "滚动到服务项目",
    },
    filters: {
      all: "全部",
      mixing: "混音作品",
      mastering: "母带作品",
      pop: "流行",
      rap: "说唱",
      electronic: "电子",
      rock: "摇滚",
      commercialVideo: "商业广告视频混音制作",
    },
    portfolio: {
      eyebrow: "Mixing Cases",
      title: "混音制作案例",
      folder: "Works Folder",
      expand: (count) => `展开全部 ${count} 个作品`,
      collapse: "收起作品夹",
      coverAlt: (title) => `${title} 封面`,
      videoCoverTitle: "商业广告视频",
      videoCoverMeta: "微信视频号展示",
    },
    liveCases: {
      eyebrow: "Live Recording / FOH",
      title: "同期录音与现场扩声案例",
      intro:
        "与录音棚混音作品分开呈现，这里收录现场演出、音乐节与巡演项目中的同期录音、现场扩声和音乐现场声音制作案例。",
      imageAlt: (title) => `${title} 项目海报`,
    },
    modal: {
      closeBackdrop: "关闭弹窗",
      close: "关闭",
      netease: "在网易云收听完整版本",
      watchVideo: "打开微信视频号观看",
      videoNote: "微信视频号页面可能限制站内嵌入，按钮可在新标签页打开完整视频。",
    },
    services: {
      eyebrow: "Services",
      title: "服务项目",
      consult: "咨询合作",
      items: [
        {
          title: "音频编辑",
          intro:
            "面向人声、乐器与分轨素材做节奏、音准、呼吸、噪声和片段衔接整理，让进入混音前的素材更干净、更稳定。",
          features: ["人声与乐器对齐", "修音与音高校正", "噪声与口水音处理", "分轨整理与交付"],
          price: "¥150 / 轨道",
        },
        {
          title: "专业混音",
          intro:
            "围绕声像、动态、频段和空间层次完成混音，让人声、节奏组与主要旋律在不同播放系统中保持稳定表达。",
          features: ["人声精修与动态控制", "空间层次与频段平衡"],
          price: "¥1,500 - ¥2,500 / 首",
        },
        {
          title: "母带处理",
          intro:
            "为发行平台、实体介质和现场播放进行响度、频谱、动态与曲间一致性处理，保留音乐情绪与质感。",
          features: ["流媒体响度版本", "专辑曲序匹配", "高解析交付文件"],
          price: "¥300 / 首",
        },
      ],
    },
    process: {
      eyebrow: "Workflow",
      title: "合作流程",
      steps: ["需求沟通", "素材提交", "工程制作", "反馈修改", "成品交付"],
    },
    about: {
      eyebrow: "About",
      title: "关于我",
      portraitNote: "混音工作现场",
      body:
        "林晨旭是中英两地执业的混音与母带工程师，英国约克大学音频与音乐技术硕士。深耕立体声全流程制作，作品覆盖流行、电子、管弦乐等多元风格，累计播放量超千万。",
      styleTitle: "擅长风格",
      styleText: "Pop / Hip-Hop / Electronic / Rock / R&B",
      identityTitle: "专业身份",
      identityText: "中国录音师协会会员、中国电影电视技术协会声音委员组会员。",
      awardTitle: "获奖经历",
      awardText: "第六届丹尼奖国际电子音乐比赛 D3 混音组全球金奖。",
    },
    contact: {
      eyebrow: "Booking",
      title: "联系咨询",
      wechat: "微信",
      hours: "工作时间",
      hoursValue: "周一至周六 10:00 - 20:00",
      name: "姓名",
      namePlaceholder: "你的姓名",
      contact: "联系方式",
      contactPlaceholder: "邮箱 / 微信 / 电话",
      projectType: "项目类型",
      projectOptions: ["混音", "母带", "音频编辑", "商业广告视频混音", "其他合作"],
      description: "项目描述",
      descriptionPlaceholder: "请简单说明风格、数量、时间节点与参考作品",
      submit: "提交咨询",
      socialAria: "社交媒体链接",
    },
  },
  en: {
    navItems: [
      { label: "Home", href: "#home" },
      { label: "Services", href: "#services" },
      { label: "Works", href: "#portfolio" },
      { label: "Live", href: "#live" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
    menuLabel: "Open navigation menu",
    navAria: "Primary navigation",
    hero: {
      eyebrow: "Mixing / Mastering",
      role: "Mixing and Mastering Engineer",
      intro:
        "Lin Chenxu is a mixing and mastering engineer working between China and the UK, with an MSc in Audio and Music Technology from the University of York.",
      detail:
        "His work spans stereo production across pop, electronic, orchestral and more, with over ten million total streams and a global gold award at the Denny Awards international mixing competition.",
      actionAria: "Profile links and booking entry",
      consult: "Book a Project",
      scrollAria: "Scroll to services",
    },
    filters: {
      all: "All",
      mixing: "Mixing",
      mastering: "Mastering",
      pop: "Pop",
      rap: "Rap",
      electronic: "Electronic",
      rock: "Rock",
      commercialVideo: "Commercial Video Mixing",
    },
    portfolio: {
      eyebrow: "Mixing Cases",
      title: "Mixing Case Studies",
      folder: "Works Folder",
      expand: (count) => `Show all ${count} works`,
      collapse: "Collapse folder",
      coverAlt: (title) => `${title} cover`,
      videoCoverTitle: "Commercial Video",
      videoCoverMeta: "WeChat Channels showcase",
    },
    liveCases: {
      eyebrow: "Live Recording / FOH",
      title: "Live Recording and FOH Cases",
      intro:
        "Separate from the mixing portfolio, this section collects live recording, front-of-house and on-site music production projects across concerts, festivals and tours.",
      imageAlt: (title) => `${title} project poster`,
    },
    modal: {
      closeBackdrop: "Close modal",
      close: "Close",
      netease: "Listen on NetEase Cloud Music",
      watchVideo: "Watch on WeChat Channels",
      videoNote:
        "WeChat may block embedded playback on external sites. Use the button to open the full video in a new tab.",
    },
    services: {
      eyebrow: "Services",
      title: "Services",
      consult: "Book a Project",
      items: [
        {
          title: "Audio Editing",
          intro:
            "Timing, pitch, breaths, noise and arrangement cleanup for vocals, instruments and multitracks before mixing begins.",
          features: [
            "Vocal and instrument alignment",
            "Pitch correction and tuning",
            "Noise and mouth-click cleanup",
            "Session organization and delivery",
          ],
          price: "¥150 / track",
        },
        {
          title: "Professional Mixing",
          intro:
            "A full mix focused on imaging, dynamics, frequency balance and depth so the vocal, rhythm section and lead elements translate across playback systems.",
          features: ["Vocal polish and dynamic control", "Space, depth and tonal balance"],
          price: "¥1,500 - ¥2,500 / song",
        },
        {
          title: "Mastering",
          intro:
            "Loudness, spectrum, dynamics and sequencing work for streaming platforms, physical releases and live playback while preserving the emotional tone.",
          features: ["Streaming-ready loudness", "Album sequence matching", "High-resolution deliverables"],
          price: "¥300 / song",
        },
      ],
    },
    process: {
      eyebrow: "Workflow",
      title: "Workflow",
      steps: ["Brief", "Files", "Production", "Revision", "Delivery"],
    },
    about: {
      eyebrow: "About",
      title: "About",
      portraitNote: "Mixing room session",
      body:
        "Lin Chenxu is a mixing and mastering engineer working between China and the UK, with an MSc in Audio and Music Technology from the University of York. His work covers stereo production across pop, electronic, orchestral and other styles, with over ten million total streams.",
      styleTitle: "Styles",
      styleText: "Pop / Hip-Hop / Electronic / Rock / R&B",
      identityTitle: "Memberships",
      identityText:
        "Member of the China Recording Engineers Association and the Sound Committee of the China Society of Motion Picture and Television Engineers.",
      awardTitle: "Award",
      awardText:
        "Global Gold Award, D3 Mixing Category, 6th Denny Awards International Electronic Music Competition.",
    },
    contact: {
      eyebrow: "Booking",
      title: "Contact",
      wechat: "WeChat",
      hours: "Working hours",
      hoursValue: "Mon - Sat 10:00 - 20:00",
      name: "Name",
      namePlaceholder: "Your name",
      contact: "Contact",
      contactPlaceholder: "Email / WeChat / phone",
      projectType: "Project type",
      projectOptions: ["Mixing", "Mastering", "Audio Editing", "Commercial Video Mixing", "Other"],
      description: "Project description",
      descriptionPlaceholder: "Style, track count, timeline and references",
      submit: "Submit",
      socialAria: "Social links",
    },
  },
};

const filterConfig = [
  { key: "all" },
  { key: "mixing", match: "混音作品" },
  { key: "mastering", match: "母带作品" },
  { key: "pop", match: "流行" },
  { key: "rap", match: "说唱" },
  { key: "electronic", match: "电子" },
  { key: "rock", match: "摇滚" },
  { key: "commercialVideo", match: "商业广告视频混音制作" },
];

const portfolioPreviewLimit = 9;

// 网易云歌曲详情链接由 songId 生成；每首歌的【歌曲ID】替换位都在对应注释中标明。
const works = [
  {
    id: 1,
    // 【歌曲ID替换位】一点(2026) - Muyoi：3404940564
    songId: "3404940564",
    title: "一点(2026)",
    artist: "Muyoi",
    type: "混音 / 母带",
    workTypes: ["混音作品", "母带作品"],
    genres: ["流行"],
    coverSrc: "https://p2.music.126.net/OSBQcAfqXT28I9cBrmo0Qg==/109951173564201795.jpg?param=600y600",
    credits: "混音：林晨旭 / 母带：林晨旭",
    creditSource: "歌词署名已确认",
  },
  {
    id: 2,
    // 【歌曲ID替换位】万物爱语 - 小蓝背心：2629106048
    songId: "2629106048",
    title: "万物爱语",
    artist: "小蓝背心",
    type: "混音 / 母带",
    workTypes: ["混音作品", "母带作品"],
    genres: ["流行"],
    coverSrc: "https://p2.music.126.net/RU2dkEAHhISNdvb9SZocYg==/109951169977051234.jpg?param=600y600",
    credits: "混音：林晨旭 / 母带：林晨旭",
    creditSource: "歌词署名已确认",
  },
  {
    id: 3,
    // 【歌曲ID替换位】星星降临 - 小蓝背心：2638956368
    songId: "2638956368",
    title: "星星降临",
    artist: "小蓝背心",
    type: "混音 / 母带",
    workTypes: ["混音作品", "母带作品"],
    genres: ["流行"],
    coverSrc: "https://p2.music.126.net/2CSQAjZlzo6upkGprrLEGQ==/109951170064719245.jpg?param=600y600",
    credits: "混音：林晨旭 / 母带：林晨旭",
    creditSource: "按用户确认标注",
  },
  {
    id: 4,
    // 【歌曲ID替换位】山野清风 - 刀酱：2638957002
    songId: "2638957002",
    title: "山野清风",
    artist: "刀酱",
    type: "混音 / 母带",
    workTypes: ["混音作品", "母带作品"],
    genres: ["流行"],
    coverSrc: "https://p2.music.126.net/anFtGageRe6DOfA2sdjqeQ==/109951170064763971.jpg?param=600y600",
    credits: "混音：林晨旭 / 母带：林晨旭",
    creditSource: "按用户确认标注",
  },
  {
    id: 39,
    // 【歌曲ID替换位】不再见你 - 赵乃吉：3440885076
    songId: "3440885076",
    title: "不再见你",
    artist: "赵乃吉",
    type: "混音 / 母带",
    workTypes: ["混音作品", "母带作品"],
    genres: ["流行"],
    coverSrc: "https://p1.music.126.net/0eSg9soTTiQJFelHa9u_mA==/109951173998215984.jpg?param=600y600",
    credits: "混音：林晨旭 / 母带：林晨旭",
    creditSource: "按用户确认标注",
  },
  {
    id: 40,
    // 【歌曲ID替换位】错过 - 赵乃吉：3434253753
    songId: "3434253753",
    title: "错过",
    artist: "赵乃吉",
    type: "混音 / 母带",
    workTypes: ["混音作品", "母带作品"],
    genres: ["流行"],
    coverSrc: "https://p2.music.126.net/S2gcOWG4yftKG-upKJMCmQ==/109951173913944621.jpg?param=600y600",
    credits: "混音：林晨旭 / 母带：林晨旭",
    creditSource: "按用户确认标注",
  },
  {
    id: 5,
    // 【歌曲ID替换位】刚好风吹过 - 小蓝背心：2651489131
    songId: "2651489131",
    title: "刚好风吹过",
    artist: "小蓝背心",
    type: "混音 / 母带",
    workTypes: ["混音作品", "母带作品"],
    genres: ["流行"],
    coverSrc: "https://p2.music.126.net/5qswc3jJB8wfQuQKwOYh8Q==/109951170201203472.jpg?param=600y600",
    credits: "混音：林晨旭 / 母带：林晨旭",
    creditSource: "按用户确认标注",
  },
  {
    id: 6,
    // 【歌曲ID替换位】入戏 - Hugo / 虎皮蛋 / 白日做梦STUDIO：3365776126
    songId: "3365776126",
    title: "入戏",
    artist: "Hugo / 虎皮蛋 / 白日做梦STUDIO",
    type: "混音 / 母带",
    workTypes: ["混音作品", "母带作品"],
    genres: ["说唱"],
    coverSrc: "https://p2.music.126.net/2muUZa7bYmSrwF6FAL4waQ==/109951172981301800.jpg?param=600y600",
    credits: "混音：林晨旭 / 母带：林晨旭",
    creditSource: "歌词署名已确认",
  },
  {
    id: 7,
    // 【歌曲ID替换位】HIDE N SEEK捉迷藏 - NiiTE奈特 / Drogas / Bloody Castle：2730859035
    songId: "2730859035",
    title: "HIDE N SEEK捉迷藏",
    artist: "NiiTE奈特 / Drogas / Bloody Castle",
    type: "母带作品",
    workTypes: ["母带作品"],
    genres: ["说唱","电子"],
    coverSrc: "https://p2.music.126.net/btib6zPbLGLmu-dqIDK45Q==/109951171914754196.jpg?param=600y600",
    credits: "母带：林晨旭",
    creditSource: "按用户确认标注",
  },
  {
    id: 8,
    // 【歌曲ID替换位】Chaos Hill - soliremindme / 三色堇式弛放 / healing：2646567752
    songId: "2646567752",
    title: "Chaos Hill",
    artist: "soliremindme / 三色堇式弛放 / healing",
    type: "母带作品",
    workTypes: ["母带作品"],
    genres: ["摇滚","电子"],
    coverSrc: "https://p2.music.126.net/tIgwRy2HKWyChjee_oJ_aw==/109951170151842787.jpg?param=600y600",
    credits: "母带：林晨旭",
    creditSource: "按用户确认标注",
  },
  {
    id: 9,
    // 【歌曲ID替换位】你说走就走 - 张德伊玲：2659619000
    songId: "2659619000",
    title: "你说走就走",
    artist: "张德伊玲",
    type: "混音 / 母带",
    workTypes: ["混音作品", "母带作品"],
    genres: ["流行"],
    coverSrc: "https://p2.music.126.net/mT74-hHj7Fysatq_c1o9sg==/109951170303136250.jpg?param=600y600",
    credits: "混音：林晨旭 / 母带：林晨旭",
    creditSource: "按用户确认标注",
  },
  {
    id: 10,
    // 【歌曲ID替换位】那一年的夏 - 小蓝背心：3386283003
    songId: "3386283003",
    title: "那一年的夏",
    artist: "小蓝背心",
    type: "混音 / 母带",
    workTypes: ["混音作品", "母带作品"],
    genres: ["流行"],
    coverSrc: "https://p2.music.126.net/MpDB53XdQnpKy_J49dvRTQ==/109951173281340037.jpg?param=600y600",
    credits: "混音：林晨旭 / 母带：林晨旭",
    creditSource: "按用户确认标注",
  },
  {
    id: 11,
    // 【歌曲ID替换位】朝夕与你 - 小蓝背心：3382941648
    songId: "3382941648",
    title: "朝夕与你",
    artist: "小蓝背心",
    type: "混音 / 母带",
    workTypes: ["混音作品", "母带作品"],
    genres: ["流行"],
    coverSrc: "https://p2.music.126.net/etNV3uiI71GS6kusLuih7Q==/109951173235266320.jpg?param=600y600",
    credits: "混音：林晨旭 / 母带：林晨旭",
    creditSource: "按用户确认标注",
  },
  {
    id: 12,
    // 【歌曲ID替换位】牡丹亭 - 曾惜：3409025912
    songId: "3409025912",
    title: "牡丹亭",
    artist: "曾惜",
    type: "混音 / 母带",
    workTypes: ["混音作品", "母带作品"],
    genres: ["流行"],
    coverSrc: "https://p2.music.126.net/N-2F3u_c19OnAkT0BNqPnw==/109951173599575721.jpg?param=600y600",
    credits: "混音：林晨旭 / 母带：林晨旭",
    creditSource: "按用户确认标注",
  },
  {
    id: 13,
    // 【歌曲ID替换位】围墙下 - Hugo / 阮舜杰：2631279959
    songId: "2631279959",
    title: "围墙下",
    artist: "Hugo / 阮舜杰",
    type: "混音 / 母带",
    workTypes: ["混音作品", "母带作品"],
    genres: ["说唱"],
    coverSrc: "https://p2.music.126.net/nTS-mzOK5AO0l2Oq07cgLw==/109951169995155800.jpg?param=600y600",
    credits: "混音：林晨旭 / 母带：林晨旭",
    creditSource: "歌词署名已确认",
  },
  {
    id: 14,
    // 【歌曲ID替换位】人会走茶会凉 - 王唯一：2636704413
    songId: "2636704413",
    title: "人会走茶会凉",
    artist: "王唯一",
    type: "混音 / 母带",
    workTypes: ["混音作品", "母带作品"],
    genres: ["流行"],
    coverSrc: "https://p2.music.126.net/hsMk0yuVo7O5GtPby-UhNQ==/109951173695895450.jpg?param=600y600",
    credits: "混音：林晨旭 / 母带：林晨旭",
    creditSource: "按用户确认标注",
  },
  {
    id: 15,
    // 【歌曲ID替换位】你说 - 曾惜：3362695588
    songId: "3362695588",
    title: "你说",
    artist: "曾惜",
    type: "混音 / 母带",
    workTypes: ["混音作品", "母带作品"],
    genres: ["流行"],
    coverSrc: "https://p2.music.126.net/TNzVQkA9XvL6pZwzX92Yxw==/109951172935753989.jpg?param=600y600",
    credits: "混音：林晨旭 / 母带：林晨旭",
    creditSource: "按用户确认标注",
  },
  {
    id: 16,
    // 【歌曲ID替换位】The Next Station Is... - 三色堇式弛放 / Bloody Castle / North Koreans In China / Aaaki / 津岛泡芙：2152516757
    songId: "2152516757",
    title: "The Next Station Is...",
    artist: "三色堇式弛放 / Bloody Castle / North Koreans In China / Aaaki / 津岛泡芙",
    type: "母带作品",
    workTypes: ["母带作品"],
    genres: ["摇滚","电子"],
    coverSrc: "https://p2.music.126.net/-uj4I2SbkcdBpan_s0OetQ==/109951169557133046.jpg?param=600y600",
    credits: "母带：林晨旭",
    creditSource: "按用户确认标注",
  },
  {
    id: 17,
    // 【歌曲ID替换位】爱绝不撤退 - 毒药：2668064279
    songId: "2668064279",
    title: "爱绝不撤退",
    artist: "毒药",
    type: "混音 / 母带",
    workTypes: ["混音作品", "母带作品"],
    genres: ["流行"],
    coverSrc: "https://p2.music.126.net/7q2O86BeT1YCJUQT-0AyqA==/109951170410048740.jpg?param=600y600",
    credits: "混音：林晨旭 / 母带：林晨旭",
    creditSource: "按用户确认标注",
  },
  {
    id: 18,
    // 【歌曲ID替换位】100% needed me (百分百需要) - NiiTE奈特：2629129911
    songId: "2629129911",
    title: "100% needed me (百分百需要)",
    artist: "NiiTE奈特",
    type: "母带作品",
    workTypes: ["母带作品"],
    genres: ["说唱","电子"],
    coverSrc: "https://p2.music.126.net/Gsd6pXeZxUoHMGn4BUDsPw==/109951170045313346.jpg?param=600y600",
    credits: "母带：林晨旭",
    creditSource: "歌词署名已确认",
  },
  {
    id: 19,
    // 【歌曲ID替换位】入戏太深 - 曾惜：3388619510
    songId: "3388619510",
    title: "入戏太深",
    artist: "曾惜",
    type: "混音 / 母带",
    workTypes: ["混音作品", "母带作品"],
    genres: ["流行"],
    coverSrc: "https://p2.music.126.net/3vVhf0EDjV_KBl1pBuHwkw==/109951173313007009.jpg?param=600y600",
    credits: "混音：林晨旭 / 母带：林晨旭",
    creditSource: "按用户确认标注",
  },
  {
    id: 20,
    // 【歌曲ID替换位】你在我生命里放了火 - 于佰万：2653518263
    songId: "2653518263",
    title: "你在我生命里放了火",
    artist: "于佰万",
    type: "混音 / 母带",
    workTypes: ["混音作品", "母带作品"],
    genres: ["流行"],
    coverSrc: "https://p2.music.126.net/ohkHGdMiu85ZJwe4tyk_aA==/109951173696378720.jpg?param=600y600",
    credits: "混音：林晨旭 / 母带：林晨旭",
    creditSource: "按用户确认标注",
  },
  {
    id: 21,
    // 【歌曲ID替换位】ProMax - Hugo / Michelen米其林：2622405467
    songId: "2622405467",
    title: "ProMax",
    artist: "Hugo / Michelen米其林",
    type: "混音 / 母带",
    workTypes: ["混音作品", "母带作品"],
    genres: ["说唱"],
    coverSrc: "https://p2.music.126.net/3ri4hb1qiXU4vXL4Z6kRpQ==/109951169917469800.jpg?param=600y600",
    credits: "混音：林晨旭 / 母带：林晨旭",
    creditSource: "按用户确认标注",
  },
  {
    id: 22,
    // 【歌曲ID替换位】认真就输了 - 曾惜：3331667673
    songId: "3331667673",
    title: "认真就输了",
    artist: "曾惜",
    type: "混音 / 母带",
    workTypes: ["混音作品", "母带作品"],
    genres: ["流行"],
    coverSrc: "https://p2.music.126.net/k2xmSi9PH0GYZqcgQFdpaQ==/109951172477866331.jpg?param=600y600",
    credits: "混音：林晨旭 / 母带：林晨旭",
    creditSource: "按用户确认标注",
  },
  {
    id: 23,
    // 【歌曲ID替换位】万里清河一捧月 - 流浪的蛙蛙 / 烟波录：2674900302
    songId: "2674900302",
    title: "万里清河一捧月",
    artist: "流浪的蛙蛙 / 烟波录",
    type: "混音 / 母带",
    workTypes: ["混音作品", "母带作品"],
    genres: ["流行"],
    coverSrc: "https://p2.music.126.net/k4ZFc5K_woSpBADZdAly_A==/109951170481033502.jpg?param=600y600",
    credits: "混音：林晨旭 / 母带：林晨旭",
    creditSource: "歌词署名已确认",
  },
  {
    id: 24,
    // 【歌曲ID替换位】哑谜 - 曾惜：3343235017
    songId: "3343235017",
    title: "哑谜",
    artist: "曾惜",
    type: "混音 / 母带",
    workTypes: ["混音作品", "母带作品"],
    genres: ["流行"],
    coverSrc: "https://p2.music.126.net/akA5k1VAuAD4ksgVe3HU1g==/109951172646457985.jpg?param=600y600",
    credits: "混音：林晨旭 / 母带：林晨旭",
    creditSource: "按用户确认标注",
  },
  {
    id: 25,
    // 【歌曲ID替换位】有话想说 - Nomo陈琳慧：2605525124
    songId: "2605525124",
    title: "有话想说",
    artist: "Nomo陈琳慧",
    type: "混音 / 母带",
    workTypes: ["混音作品", "母带作品"],
    genres: ["流行"],
    coverSrc: "https://p2.music.126.net/QL61gg3KXjlODMNR94TuPw==/109951169755863476.jpg?param=600y600",
    credits: "混音：林晨旭 / 母带：林晨旭",
    creditSource: "歌词署名已确认",
  },
  {
    id: 26,
    // 【歌曲ID替换位】不枉 - 五子琦：2651540950
    songId: "2651540950",
    title: "不枉",
    artist: "五子琦",
    type: "混音 / 母带",
    workTypes: ["混音作品", "母带作品"],
    genres: ["流行"],
    coverSrc: "https://p2.music.126.net/xqy-vTqa_lX70sFamz3R8A==/109951170201804511.jpg?param=600y600",
    credits: "混音：林晨旭 / 母带：林晨旭",
    creditSource: "按用户确认标注",
  },
  {
    id: 27,
    // 【歌曲ID替换位】穿越世纪追寻你 - 于佰万：2722143292
    songId: "2722143292",
    title: "穿越世纪追寻你",
    artist: "于佰万",
    type: "混音 / 母带",
    workTypes: ["混音作品", "母带作品"],
    genres: ["流行"],
    coverSrc: "https://p1.music.126.net/3BpFAuRCZfRSYPlhFqoXIw==/109951171397868599.jpg?param=600y600",
    credits: "混音：林晨旭 / 母带：林晨旭",
    creditSource: "按用户确认标注",
  },
  {
    id: 28,
    // 【歌曲ID替换位】别让烟火坠落 - 毒药：2724442691
    songId: "2724442691",
    title: "别让烟火坠落",
    artist: "毒药",
    type: "混音 / 母带",
    workTypes: ["混音作品", "母带作品"],
    genres: ["流行"],
    coverSrc: "https://p1.music.126.net/dp3nOmbgxjf7l1MKSbIy2A==/109951171437529543.jpg?param=600y600",
    credits: "混音：林晨旭 / 母带：林晨旭",
    creditSource: "歌词署名已确认",
  },
  {
    id: 29,
    // 【歌曲ID替换位】搬走 - 毒药：2690867808
    songId: "2690867808",
    title: "搬走",
    artist: "毒药",
    type: "混音 / 母带",
    workTypes: ["混音作品", "母带作品"],
    genres: ["流行"],
    coverSrc: "https://p1.music.126.net/3FObnWo22AotN_Srte_ZQQ==/109951170683303221.jpg?param=600y600",
    credits: "混音：林晨旭 / 母带：林晨旭",
    creditSource: "按用户确认标注",
  },
  {
    id: 30,
    // 【歌曲ID替换位】月下星河 - 曾惜：2746516999
    songId: "2746516999",
    title: "月下星河",
    artist: "曾惜",
    type: "混音 / 母带",
    workTypes: ["混音作品", "母带作品"],
    genres: ["流行"],
    coverSrc: "https://p1.music.126.net/Cf_EnG8DT7M9k9uyHka-Qg==/109951172020700795.jpg?param=600y600",
    credits: "混音：林晨旭 / 母带：林晨旭",
    creditSource: "按用户确认标注",
  },
  {
    id: 31,
    // 【歌曲ID替换位】橘子对汽水的告白 - 曾惜：2742508471
    songId: "2742508471",
    title: "橘子对汽水的告白",
    artist: "曾惜",
    type: "混音 / 母带",
    workTypes: ["混音作品", "母带作品"],
    genres: ["流行"],
    coverSrc: "https://p1.music.126.net/Ge7V2NJrW4jXBV57zIaDoA==/109951171964696551.jpg?param=600y600",
    credits: "混音：林晨旭 / 母带：林晨旭",
    creditSource: "按用户确认标注",
  },
  {
    id: 32,
    // 【歌曲ID替换位】街拍 - 陈玖熹：2666691948
    songId: "2666691948",
    title: "街拍",
    artist: "陈玖熹",
    type: "混音 / 母带",
    workTypes: ["混音作品", "母带作品"],
    genres: ["流行"],
    coverSrc: "https://p1.music.126.net/p52FKD559TXMqGRFE6S3KQ==/109951170383850884.jpg?param=600y600",
    credits: "混音：林晨旭 / 母带：林晨旭",
    creditSource: "按用户确认标注",
  },
  {
    id: 33,
    // 【歌曲ID替换位】算我爱错 - 于佰万：2704265130
    songId: "2704265130",
    title: "算我爱错",
    artist: "于佰万",
    type: "混音 / 母带",
    workTypes: ["混音作品", "母带作品"],
    genres: ["流行"],
    coverSrc: "https://p1.music.126.net/HPgQJ5IUD3F4XzvPh0xAWA==/109951173696371389.jpg?param=600y600",
    credits: "混音：林晨旭 / 母带：林晨旭",
    creditSource: "按用户确认标注",
  },
  {
    id: 34,
    // 【歌曲ID替换位】失窃 - 五子琦：2619393485
    songId: "2619393485",
    title: "失窃",
    artist: "五子琦",
    type: "混音 / 母带",
    workTypes: ["混音作品", "母带作品"],
    genres: ["流行"],
    coverSrc: "https://p1.music.126.net/RfYszJGgTxfdkwsJfhTLsw==/109951169891765482.jpg?param=600y600",
    credits: "混音：林晨旭 / 母带：林晨旭",
    creditSource: "按用户确认标注",
  },
  {
    id: 35,
    // 【歌曲ID替换位】失格人间 - 杨淳om：2111024185
    songId: "2111024185",
    title: "失格人间",
    artist: "杨淳om",
    type: "混音 / 母带",
    workTypes: ["混音作品", "母带作品"],
    genres: ["流行"],
    coverSrc: "https://p1.music.126.net/CePHw3yQg0Inw_FP9TRPwg==/109951169200509593.jpg?param=600y600",
    credits: "混音：林晨旭 / 母带：林晨旭",
    creditSource: "按用户确认标注",
  },
  {
    id: 36,
    // 【歌曲ID替换位】Try(Acoustic) - UMR / 99990：2134248625
    songId: "2134248625",
    title: "Try(Acoustic)",
    artist: "UMR / 99990",
    type: "混音 / 母带",
    workTypes: ["混音作品", "母带作品"],
    genres: ["说唱"],
    coverSrc: "https://p1.music.126.net/2mR9UIBgbWsaQb0Ed8i9jg==/109951169401006182.jpg?param=600y600",
    credits: "混音：林晨旭 / 母带：林晨旭",
    creditSource: "按用户确认标注",
  },
  {
    id: 37,
    // 【歌曲ID替换位】痴線佬 (CHEE SIN LOS) - GunChild / 步步高先生：2073886109
    songId: "2073886109",
    title: "痴線佬 (CHEE SIN LOS)",
    artist: "GunChild / 步步高先生",
    type: "混音 / 母带",
    workTypes: ["混音作品", "母带作品"],
    genres: ["说唱"],
    coverSrc: "https://p1.music.126.net/LBnvp_CC1b_bBhTN6HGFMA==/109951168845983053.jpg?param=600y600",
    credits: "混音：林晨旭 / 母带：林晨旭",
    creditSource: "按用户确认标注",
  },
  {
    id: 38,
    title: "华为乾崑智能汽车解决方案",
    titleEn: "Huawei Qiankun Intelligent Automotive Solution",
    artist: "商业广告视频混音制作",
    artistEn: "Commercial Video Mixing Production",
    type: "商业广告视频混音制作",
    workTypes: ["商业广告视频混音制作"],
    genres: ["广告视频"],
    coverSrc: "",
    externalUrl: "https://weixin.qq.com/sph/ATjQDkIta7",
    credits: "混音：林晨旭",
    creditSource: "用户提供视频链接",
  }
];

const liveCases = [
  {
    id: "east-sea-metal",
    title: {
      zh: "东海重型音乐节",
      en: "East Sea Metal Festival",
    },
    meta: {
      zh: "2025.06.14 - 06.15 / 浙江宁波象山",
      en: "Jun 14 - 15, 2025 / Xiangshan, Ningbo",
    },
    role: {
      zh: "现场扩声 / 多乐队音乐节声音制作",
      en: "FOH / Multi-band festival sound production",
    },
    imageSrc: "/live-cases/optimized/east-sea-metal-festival.jpg",
  },
  {
    id: "nordic-tales",
    title: {
      zh: "Nordic Tales 中国巡演南京站",
      en: "Nordic Tales China Tour, Nanjing",
    },
    meta: {
      zh: "2025.08.21 / 1701 Open Space",
      en: "Aug 21, 2025 / 1701 Open Space",
    },
    role: {
      zh: "同期录音 / 现场声音支持",
      en: "Live recording / On-site sound support",
    },
    imageSrc: "/live-cases/optimized/nordic-tales.jpg",
  },
  {
    id: "oddgeir-berg-trio",
    title: {
      zh: "Oddgeir Berg Trio 中国巡演",
      en: "Oddgeir Berg Trio China Tour",
    },
    meta: {
      zh: "2025 中国巡演 / 南京、长沙、广州、南宁、上海",
      en: "2025 China Tour / Nanjing, Changsha, Guangzhou, Nanning, Shanghai",
    },
    role: {
      zh: "同期录音 / 巡演现场声音制作",
      en: "Live recording / Tour sound production",
    },
    imageSrc: "/live-cases/optimized/oddgeir-berg-trio-tour.jpg",
  },
  {
    id: "quancheng-symphony",
    title: {
      zh: "泉城交响乐团《悲怆与辉煌》音乐会",
      en: "Quancheng Symphony Orchestra Concert",
    },
    meta: {
      zh: "2025.06.27 / 保利山东省会大剧院音乐厅",
      en: "Jun 27, 2025 / Shandong Grand Theatre Concert Hall",
    },
    role: {
      zh: "同期录音 / 古典音乐现场声音制作",
      en: "Live recording / Classical concert sound production",
    },
    imageSrc: "/live-cases/optimized/quancheng-symphony.jpg",
  },
  {
    id: "espen-berg-trio",
    title: {
      zh: "Espen Berg Trio 中国巡演",
      en: "Espen Berg Trio China Tour",
    },
    meta: {
      zh: "2025.10.16 / 1701 Open Space",
      en: "Oct 16, 2025 / 1701 Open Space",
    },
    role: {
      zh: "同期录音 / 爵士现场声音制作",
      en: "Live recording / Jazz concert sound production",
    },
    imageSrc: "/live-cases/optimized/espen-berg-trio.jpg",
  },
];

const socials = [
  { label: "抖音", short: "DY", href: "https://v.douyin.com/kg-hR7l4N0k/" },
  { label: "小红书", short: "RED", href: "https://xhslink.cn/o/7Ei9wOTGe1u" },
];

const heroLinks = [
  { label: { zh: "抖音", en: "Douyin" }, href: "https://v.douyin.com/kg-hR7l4N0k/" },
  { label: { zh: "小红书", en: "RedNote" }, href: "https://xhslink.cn/o/7Ei9wOTGe1u" },
];

function useCreativeMotion() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      document.documentElement.classList.add("motion-reduced");
      document.querySelectorAll("[data-reveal]").forEach((node) => node.classList.add("is-visible"));
      return undefined;
    }

    document.documentElement.classList.add("motion-ready");

    const context = gsap.context(() => {
      gsap.set(".site-header", { y: -86, opacity: 0 });
      gsap.set(".hero-background", { scale: 1.1 });
      gsap.set(".hero-cover-collage", {
        x: 120,
        scale: 1.08,
        rotate: -11,
        opacity: 0,
      });
      gsap.set(".hero-cover-collage img", {
        y: 72,
        opacity: 0,
        scale: 0.92,
        clipPath: "inset(18% 0% 18% 0%)",
      });
      gsap.set(".hero-content .eyebrow, .hero-slogan, .hero-intro, .hero-actions", {
        opacity: 0,
        y: 28,
      });
      gsap.set(".hero-title-line", {
        yPercent: 116,
        scaleY: 0.72,
        opacity: 0,
        transformOrigin: "50% 100%",
      });
      gsap.set(".hero-role-line", {
        yPercent: 112,
        opacity: 0,
      });
      gsap.set(".opening-curtain", {
        scaleY: 1,
        transformOrigin: "50% 0%",
      });
      gsap.set(".opening-mark", {
        yPercent: 120,
        opacity: 0,
      });

      gsap
        .timeline({ defaults: { ease: "power4.out" } })
        .to(".opening-mark", { yPercent: 0, opacity: 1, duration: 0.9 })
        .to(".opening-mark", { yPercent: -120, opacity: 0, duration: 0.75, ease: "power3.inOut" }, "+=0.18")
        .to(".opening-curtain", { scaleY: 0, duration: 1.35, ease: "expo.inOut" }, "-=0.28")
        .to(".site-header", { y: 0, opacity: 1, duration: 1.05 }, "-=0.82")
        .to(".hero-background", { scale: 1, duration: 1.55 }, "-=1.05")
        .to(
          ".hero-cover-collage",
          {
            x: 0,
            scale: 1,
            rotate: -7,
            opacity: 0.5,
            duration: 1.7,
          },
          "-=1.18"
        )
        .to(
          ".hero-cover-collage img",
          {
            y: 0,
            opacity: 1,
            scale: 1,
            clipPath: "inset(0% 0% 0% 0%)",
            stagger: { amount: 0.9, from: "random" },
            duration: 1.35,
          },
          "-=1.35"
        )
        .to(".hero-content .eyebrow", { opacity: 1, y: 0, duration: 0.9 }, "-=0.68")
        .to(
          ".hero-title-line",
          {
            yPercent: 0,
            scaleY: 1,
            opacity: 1,
            duration: 1.12,
            stagger: 0.08,
          },
          "-=0.44"
        )
        .to(".hero-role-line", { yPercent: 0, opacity: 1, duration: 0.95 }, "-=0.72")
        .to(".hero-slogan, .hero-intro", { opacity: 1, y: 0, duration: 1.0, stagger: 0.12 }, "-=0.56")
        .to(".hero-actions", { opacity: 1, y: 0, duration: 0.92 }, "-=0.5");

      gsap.to(".hero-cover-collage", {
        yPercent: -16,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1.25,
        },
      });

      gsap.utils.toArray("main .section").forEach((section) => {
        const heading = section.querySelector(".section-heading");
        const eyebrow = heading?.querySelector(".eyebrow");
        const title = heading?.querySelector("h2");
        const intro = heading?.querySelector("p:last-child:not(.eyebrow)");
        const stagedItems = section.querySelectorAll(
          ".filter-row, .portfolio-folder, .service-card, .process-card, .live-case-card, .about-photo, .about-copy, .contact-info, .contact-form, .social-row, .center-action"
        );

        if (eyebrow) {
          gsap.set(eyebrow, {
            xPercent: -34,
            opacity: 0,
            scaleX: 1.18,
            transformOrigin: "0% 50%",
          });
        }
        if (title) {
          gsap.set(title, {
            y: 78,
            opacity: 0,
            clipPath: "inset(0% 0% 100% 0%)",
          });
        }
        if (intro) {
          gsap.set(intro, { y: 28, opacity: 0 });
        }
        if (stagedItems.length) {
          gsap.set(stagedItems, {
            y: 74,
            opacity: 0,
            clipPath: "inset(12% 0% 0% 0%)",
          });
        }

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 76%",
            once: true,
          },
          defaults: { ease: "power4.out" },
        });

        if (eyebrow) {
          timeline.to(eyebrow, { xPercent: 0, opacity: 0.18, scaleX: 1, duration: 1.15 });
        }
        if (title) {
          timeline.to(title, { y: 0, opacity: 1, clipPath: "inset(0% 0% 0% 0%)", duration: 1.05 }, "-=0.58");
        }
        if (intro) {
          timeline.to(intro, { y: 0, opacity: 1, duration: 0.88 }, "-=0.62");
        }
        if (stagedItems.length) {
          timeline.to(
            stagedItems,
            {
              y: 0,
              opacity: 1,
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 1.05,
              stagger: { each: 0.11, from: "start" },
            },
            "-=0.4"
          );
        }
      });

      gsap.utils.toArray(".live-case-image, .about-photo").forEach((frame) => {
        const image = frame.querySelector("img");

        gsap.fromTo(
          frame,
          { clipPath: "inset(0% 0% 100% 0%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.18,
            ease: "power4.out",
            scrollTrigger: {
              trigger: frame,
              start: "top 86%",
              once: true,
            },
          }
        );

        if (image) {
          gsap.fromTo(
            image,
            { yPercent: -7, scale: 1.08 },
            {
              yPercent: 7,
              scale: 1.02,
              ease: "none",
              scrollTrigger: {
                trigger: frame,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.15,
              },
            }
          );
        }
      });
    });

    return () => {
      context.revert();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);
}

const getNeteaseSongUrl = (songId) => `https://music.163.com/song?id=${songId}`;

const getSizedCoverUrl = (src, size) => {
  if (!src) return src;
  return src.replace(/([?&])param=\d+y\d+/, `$1param=${size}y${size}`);
};

const typeLabels = {
  "混音 / 母带": {
    zh: "混音 / 母带",
    en: "Mixing / Mastering",
  },
  母带作品: {
    zh: "母带作品",
    en: "Mastering",
  },
  商业广告视频混音制作: {
    zh: "商业广告视频混音制作",
    en: "Commercial Video Mixing",
  },
};

const genreLabels = {
  流行: { zh: "流行", en: "Pop" },
  说唱: { zh: "说唱", en: "Rap" },
  电子: { zh: "电子", en: "Electronic" },
  摇滚: { zh: "摇滚", en: "Rock" },
  广告视频: { zh: "广告视频", en: "Commercial Video" },
};

const formatWorkType = (type, language) => typeLabels[type]?.[language] ?? type;

const formatGenre = (genre, language) => genreLabels[genre]?.[language] ?? genre;

const getWorkTitle = (work, language) => (language === "en" && work.titleEn ? work.titleEn : work.title);

const getWorkArtist = (work, language) => (language === "en" && work.artistEn ? work.artistEn : work.artist);

const formatCredits = (credits, language) => {
  if (language === "zh") return credits;
  return credits
    .replaceAll("混音：林晨旭", "Mixing: Lin Chenxu")
    .replaceAll("母带：林晨旭", "Mastering: Lin Chenxu")
    .replaceAll(" / ", " / ");
};

function Header({ language, onLanguageChange }) {
  const text = i18n[language];
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolledRef = useRef(false);
  const tickingRef = useRef(false);

  useEffect(() => {
    const updateScrolled = () => {
      const nextScrolled = window.scrollY > 24;
      if (nextScrolled !== scrolledRef.current) {
        scrolledRef.current = nextScrolled;
        setScrolled(nextScrolled);
      }
      tickingRef.current = false;
    };

    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      window.requestAnimationFrame(updateScrolled);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <a className="brand" href="#home" onClick={closeMenu}>
        <span>{engineer.displayName[language]}</span>
      </a>

      <div className="header-actions">
        <div className="language-switch" aria-label="Language switch">
          <button
            type="button"
            className={language === "zh" ? "is-active" : ""}
            onClick={() => onLanguageChange("zh")}
          >
            CN
          </button>
          <button
            type="button"
            className={language === "en" ? "is-active" : ""}
            onClick={() => onLanguageChange("en")}
          >
            UK
          </button>
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-label={text.menuLabel}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav className={`nav-links ${menuOpen ? "is-open" : ""}`} aria-label={text.navAria}>
        {text.navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero({ language }) {
  const text = i18n[language];
  const heroCovers = works.slice(0, 12);

  return (
    <section className="hero" id="home">
      <div className="hero-background" aria-hidden="true" />
      <div className="hero-cover-collage" aria-hidden="true">
        {heroCovers.map((work, index) => (
          <img
            key={`${work.songId}-${index}`}
            src={getSizedCoverUrl(work.coverSrc, 260)}
            alt=""
            loading={index < 4 ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={index < 4 ? "high" : "low"}
            style={{ "--tile": index, "--lift": `${(index % 4) * 13}px` }}
          />
        ))}
      </div>
      <div className="hero-content" data-reveal>
        <p className="eyebrow">{text.hero.eyebrow}</p>
        <h1>
          <span className="title-mask">
            <span className="hero-title-line">{engineer.displayName[language]}</span>
          </span>
        </h1>
        <h2>
          <span className="title-mask">
            <span className="hero-role-line">{text.hero.role}</span>
          </span>
        </h2>
        <p className="hero-slogan">{text.hero.intro}</p>
        <p className="hero-intro">{text.hero.detail}</p>
        <div className="hero-actions" aria-label={text.hero.actionAria}>
          <a className="primary-link" href="#contact">
            {text.hero.consult}
          </a>
          <div className="hero-link-row">
            {heroLinks.map((link) => (
              <a key={link.label.zh} href={link.href} target="_blank" rel="noreferrer">
                {link.label[language]}
              </a>
            ))}
          </div>
        </div>
      </div>
      <a className="scroll-cue" href="#services" aria-label={text.hero.scrollAria}>
        <span />
      </a>
    </section>
  );
}

function Portfolio({ language }) {
  const text = i18n[language];
  const [activeFilter, setActiveFilter] = useState("all");
  const [expanded, setExpanded] = useState(false);
  const [selectedWork, setSelectedWork] = useState(null);

  const visibleWorks = useMemo(() => {
    const filter = filterConfig.find((item) => item.key === activeFilter);
    if (!filter?.match) return works;
    return works.filter(
      (work) =>
        work.type === filter.match ||
        work.workTypes?.includes(filter.match) ||
        work.genres.includes(filter.match)
    );
  }, [activeFilter]);

  const displayedWorks = useMemo(
    () => (expanded ? visibleWorks : visibleWorks.slice(0, portfolioPreviewLimit)),
    [expanded, visibleWorks]
  );
  const canToggle = visibleWorks.length > portfolioPreviewLimit;

  const selectFilter = (filter) => {
    setActiveFilter(filter);
    setExpanded(false);
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const cards = Array.from(document.querySelectorAll(".work-card[data-reveal]"));
    const frameId = requestAnimationFrame(() => {
      gsap.fromTo(
        cards,
        { y: 54, opacity: 0, clipPath: "inset(10% 0% 0% 0%)" },
        {
          y: 0,
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 0.9,
          ease: "power4.out",
          stagger: 0.055,
          overwrite: true,
          onComplete: () => ScrollTrigger.refresh(),
        }
      );
    });

    return () => cancelAnimationFrame(frameId);
  }, [displayedWorks]);

  return (
    <section className="section portfolio" id="portfolio">
      <div className="section-heading" data-reveal>
        <p className="eyebrow">{text.portfolio.eyebrow}</p>
        <h2>{text.portfolio.title}</h2>
      </div>

      <div className="filter-row" data-reveal>
        {filterConfig.map((filter) => (
          <button
            key={filter.key}
            type="button"
            className={activeFilter === filter.key ? "is-active" : ""}
            onClick={() => selectFilter(filter.key)}
          >
            {text.filters[filter.key]}
          </button>
        ))}
      </div>

      <div className="portfolio-folder" data-reveal>
        <div className="folder-bar">
          <span>{text.portfolio.folder}</span>
          <strong>
            {displayedWorks.length} / {visibleWorks.length}
          </strong>
        </div>
        <div className="work-grid">
          {displayedWorks.map((work) => (
            <article
              className="work-card"
              key={work.id}
              data-reveal
              tabIndex="0"
              onClick={() => setSelectedWork(work)}
              onKeyDown={(event) => {
                if (event.key === "Enter") setSelectedWork(work);
              }}
            >
              <div className="cover-placeholder">
                {work.coverSrc ? (
                  <img
                    src={getSizedCoverUrl(work.coverSrc, 520)}
                    alt={text.portfolio.coverAlt(getWorkTitle(work, language))}
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    sizes="(max-width: 760px) 100vw, (max-width: 980px) 50vw, 33vw"
                  />
                ) : (
                  <VideoCoverArt work={work} language={language} />
                )}
              </div>
              <div className="work-meta">
                <span className="tag">{formatWorkType(work.type, language)}</span>
                <h3>{getWorkTitle(work, language)}</h3>
                <p>{getWorkArtist(work, language)}</p>
              </div>
            </article>
          ))}
        </div>

        {canToggle && (
          <div className="folder-actions">
            <button
              className="folder-toggle"
              type="button"
              aria-expanded={expanded}
              onClick={() => setExpanded((value) => !value)}
            >
              {expanded ? text.portfolio.collapse : text.portfolio.expand(visibleWorks.length)}
            </button>
          </div>
        )}
      </div>

      {selectedWork && (
        <WorkModal
          work={selectedWork}
          language={language}
          onClose={() => setSelectedWork(null)}
        />
      )}
    </section>
  );
}

function VideoCoverArt({ work, language }) {
  return (
    <div className="video-cover-art">
      <span>{formatWorkType(work.type, language)}</span>
      <strong>{getWorkTitle(work, language)}</strong>
      <small>{getWorkArtist(work, language)}</small>
    </div>
  );
}

function WorkModal({ work, language, onClose }) {
  const text = i18n[language];
  const isExternalWork = Boolean(work.externalUrl);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.body.classList.add("modal-open");
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div className="modal-shell" role="dialog" aria-modal="true" aria-labelledby="work-title">
      <button className="modal-backdrop" type="button" aria-label={text.modal.closeBackdrop} onClick={onClose} />
      <div className={`modal-panel ${isExternalWork ? "video-modal-panel" : ""}`}>
        <button className="modal-close" type="button" onClick={onClose} aria-label={text.modal.close}>
          ×
        </button>
        <div className="cover-placeholder modal-cover">
          {work.coverSrc ? (
            <img
              src={getSizedCoverUrl(work.coverSrc, 800)}
              alt={text.portfolio.coverAlt(getWorkTitle(work, language))}
              decoding="async"
              fetchPriority="high"
            />
          ) : (
            <VideoCoverArt work={work} language={language} />
          )}
        </div>
        <div className="modal-content">
          <span className="tag">{formatWorkType(work.type, language)}</span>
          <h3 id="work-title">{getWorkTitle(work, language)}</h3>
          <p className="artist-name">{getWorkArtist(work, language)}</p>
          <p className="credits">{formatCredits(work.credits, language)}</p>
          <div className="genre-list">
            {work.genres.map((genre) => (
              <span key={genre}>{formatGenre(genre, language)}</span>
            ))}
          </div>
          <WorkAction work={work} language={language} />
        </div>
      </div>
    </div>
  );
}

function WorkAction({ work, language }) {
  const text = i18n[language];

  if (work.externalUrl) {
    return (
      <div className="external-video-action">
        <p className="video-note">{text.modal.videoNote}</p>
        <a
          className="netease-link"
          href={work.externalUrl}
          target="_blank"
          rel="noreferrer"
        >
          {text.modal.watchVideo}
        </a>
      </div>
    );
  }

  return (
    <div className="netease-action">
      <a
        className="netease-link"
        href={getNeteaseSongUrl(work.songId)}
        target="_blank"
        rel="noreferrer"
      >
        {text.modal.netease}
      </a>
    </div>
  );
}

function LiveCases({ language }) {
  const text = i18n[language];

  return (
    <section className="section live-cases" id="live">
      <div className="section-heading live-heading" data-reveal>
        <p className="eyebrow">{text.liveCases.eyebrow}</p>
        <h2>{text.liveCases.title}</h2>
        <p>{text.liveCases.intro}</p>
      </div>

      <div className="live-case-grid">
        {liveCases.map((item) => (
          <article
            className="live-case-card"
            key={item.id}
            data-reveal
          >
            <div className="live-case-image">
              <img
                src={item.imageSrc}
                alt={text.liveCases.imageAlt(item.title[language])}
                loading="lazy"
                decoding="async"
                sizes="(max-width: 760px) 100vw, (max-width: 1180px) 33vw, 20vw"
              />
            </div>
            <div className="live-case-copy">
              <span>{item.role[language]}</span>
              <h3>{item.title[language]}</h3>
              <p>{item.meta[language]}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Services({ language }) {
  const text = i18n[language];

  return (
    <section className="section services" id="services">
      <div className="section-heading" data-reveal>
        <p className="eyebrow">{text.services.eyebrow}</p>
        <h2>{text.services.title}</h2>
      </div>

      <div className="service-grid">
        {text.services.items.map((service) => (
          <article className="service-card" key={service.title} data-reveal>
            <h3>{service.title}</h3>
            <p>{service.intro}</p>
            <ul>
              {service.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <strong>{service.price}</strong>
          </article>
        ))}
      </div>

      <div className="center-action" data-reveal>
        <a className="primary-link" href="#contact">
          {text.services.consult}
        </a>
      </div>
    </section>
  );
}

function Process({ language }) {
  const text = i18n[language];

  return (
    <section className="section process-section">
      <div className="section-heading" data-reveal>
        <p className="eyebrow">{text.process.eyebrow}</p>
        <h2>{text.process.title}</h2>
      </div>
      <div className="process-row">
        {text.process.steps.map((step, index) => (
          <article className="process-card" key={step} data-reveal>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{step}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

function About({ language }) {
  const text = i18n[language];

  return (
    <section className="section about" id="about">
      <div className="about-photo" data-reveal>
        <img
          src="/profile/optimized/lin-chenxu-studio.jpg"
          alt={text.about.portraitNote}
          loading="lazy"
          decoding="async"
          sizes="(max-width: 980px) 100vw, 46vw"
        />
      </div>
      <div className="about-copy" data-reveal>
        <p className="eyebrow">{text.about.eyebrow}</p>
        <h2>{text.about.title}</h2>
        <p>{text.about.body}</p>
        <div className="about-list">
          <div>
            <h3>{text.about.styleTitle}</h3>
            <p>{text.about.styleText}</p>
          </div>
          <div>
            <h3>{text.about.identityTitle}</h3>
            <p>{text.about.identityText}</p>
          </div>
          <div>
            <h3>{text.about.awardTitle}</h3>
            <p>{text.about.awardText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact({ language }) {
  const text = i18n[language];
  const redirectUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}${window.location.pathname}#contact`
      : "#contact";

  return (
    <section className="section contact" id="contact">
      <div className="section-heading" data-reveal>
        <p className="eyebrow">{text.contact.eyebrow}</p>
        <h2>{text.contact.title}</h2>
      </div>
      <div className="contact-layout">
        <div className="contact-info" data-reveal>
          <a href={`mailto:${engineer.email}`}>{engineer.email}</a>
          <p>{text.contact.wechat}：{engineer.wechat}</p>
          <p>{text.contact.hours}：{text.contact.hoursValue}</p>
        </div>
        <form
          className="contact-form"
          action={`https://formsubmit.co/${engineer.email}`}
          method="POST"
          data-reveal
        >
          <input type="hidden" name="_subject" value="官网合作咨询 / Project Enquiry" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value={redirectUrl} />
          <label>
            <span>{text.contact.name}</span>
            <input type="text" name="name" required placeholder={text.contact.namePlaceholder} />
          </label>
          <label>
            <span>{text.contact.contact}</span>
            <input type="text" name="contact" required placeholder={text.contact.contactPlaceholder} />
          </label>
          <label>
            <span>{text.contact.projectType}</span>
            <select name="projectType" defaultValue={text.contact.projectOptions[0]}>
              {text.contact.projectOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <label>
            <span>{text.contact.description}</span>
            <textarea name="description" rows="5" placeholder={text.contact.descriptionPlaceholder} />
          </label>
          <button type="submit">{text.contact.submit}</button>
        </form>
      </div>
      <div className="social-row" aria-label={text.contact.socialAria} data-reveal>
        {socials.map((social) => (
          <a key={social.label} href={social.href} aria-label={social.label} target="_blank" rel="noreferrer">
            {social.short}
          </a>
        ))}
      </div>
    </section>
  );
}

function Footer({ language }) {
  const text = i18n[language];

  return (
    <footer className="footer">
      <p>© 2026 {engineer.displayName[language]}. All rights reserved.</p>
      <div>
        {text.navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </div>
    </footer>
  );
}

function App() {
  useCreativeMotion();
  const [language, setLanguage] = useState(() => {
    if (typeof window === "undefined") return "zh";
    return window.localStorage.getItem("site-language") || "zh";
  });

  const changeLanguage = (nextLanguage) => {
    setLanguage(nextLanguage);
    window.localStorage.setItem("site-language", nextLanguage);
  };

  useEffect(() => {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en-GB";
  }, [language]);

  return (
    <>
      <div className="opening-curtain" aria-hidden="true">
        <span className="opening-mark">LCX / SOUND</span>
      </div>
      <Header language={language} onLanguageChange={changeLanguage} />
      <main>
        <Hero language={language} />
        <Services language={language} />
        <Portfolio language={language} />
        <LiveCases language={language} />
        <Process language={language} />
        <About language={language} />
        <Contact language={language} />
      </main>
      <Footer language={language} />
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
