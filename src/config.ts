/** Website 分类配置 */
const WEBSITE_SORTS: WebsiteSort[] = [
  {
    title: "示例分类1",
    sites: [
      {
        title: "主标题",
        description: "网站描述",
        url: "http://www.your-web-page.com/",
        color: "#0171CD",
      },
      {
        title: "主标题",
        description: "网站描述",
        url: "http://www.your-web-page.com/",
        icon: "",
      },
      {
        title: "主标题",
        description: "网站描述",
        url: "http://www.your-web-page.com/",
        icon: "",
      },
    ],
  },
  {
    title: "示例分类2",
  },
  {
    title: "友情链接",
    sites: [
      {
        title: "Saobby",
        description: "Saobby 的网站",
        url: "https://www.saobby.com",
        icon: "https://upload-static.saobby.com/static/upload/6KAIVvpKKDYnyCvY.png", 
      },
    ],
  },
];


const GLOBAL_CONFIG = {
  /**
   * 博客名称
   */
  BLOG_NAME: "BlogName",
  /**
   * 个人博客链接
   */
  BLOG_URL: "https://lsyyyy.my.canvasite.cn/cf-blog-test",
  /**
   * 指定中心 LOGO 图片地址
   */
  LOGO_URL: null,
  /*个人 Github 链接*/
  GITHUB_URL: "https://github.com/lsyyyy11",
  /**
   * 背景图片地址
   */
  BACKGROUND_IMG_URL: "https://bing.shangzhenyang.com/api/4k",
  /**
   * ICP 备案号，留空不显示
   */
  ICP: "",
  ICP_URL: "https://beian.miit.gov.cn/",
  FOOTER_INFO: true,
  /**
   * 网站欢迎标语
   */
  SLOGANS: [
    "欢迎拜访",
    "歡迎拜訪",
    "Welcome, my friend!",
    "訪問へようこそ",
    "嗨，别来无恙",
    "不忘初心，一生浪漫",
    "最近还好吗？",
    "流星，落花，萤火",
    "马车越空，晃荡越响",
  ],
  /**
   * Website 分类配置
   */
   WEBSITE_SORTS,
  /**
   * Website 配置（2023.3.29 已废弃）
   */
  WEBSITE_ITEMS,
  /**
   * 网站 Title Keywords Description 的配置，用于 SEO
   */
  TKD: {
    title: "lsyyyy的主页",
    keywords: "Blog, Index, Index Page",
    description: "This is my personal blog index page.",
  },
};

export default GLOBAL_CONFIG;