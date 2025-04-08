// latte / frappe / macchiato / mocha
const palette = macchiato;

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Reunion",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: palette.maroon,
  },
  disabled: [],
  fastlink: "https://app.raindrop.io",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "HOME",
      background_url: "src/img/banners/cbg-08.gif",
      categories: [
        {
          name: "DEV",
          links: [
            {
              name: "github",
              url: "https://github.com/mxcre",
              icon: "brand-github-filled",
              icon_color: palette.green,
            },
            {
              name: "codepen",
              url: "https://codepen.com",
              icon: "brand-codepen",
              icon_color: palette.peach,
            },
            {
              name: "behance",
              url: "https://behance.net",
              icon: "brand-behance",
              icon_color: palette.peach,
            },
            {
              name: "devdocs",
              url: "https://devdocs.io",
              icon: "code",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "workspace",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com",
              icon: "mail-filled",
              icon_color: palette.green,
            },
            {
              name: "calendar",
              url: "https://calendar.notion.so",
              icon: "calendar-filled",
              icon_color: palette.peach,
            },
            {
              name: "notion",
              url: "https://notion.so",
              icon: "brand-notion",
              icon_color: palette.red,
            },
            {
              name: "drive",
              url: "https://drive.mxc.re",
              icon: "cloud-filled",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "utility",
          links: [
            {
              name: "youtube",
              url: "https://youtube.com",
              icon: "brand-youtube-filled",
              icon_color: palette.green,
            },
            {
              name: "chatgpt",
              url: "https://chatgpt.com",
              icon: "brand-openai",
              icon_color: palette.peach,
            },
            {
              name: "discord",
              url: "https://discord.app",
              icon: "brand-discord-filled",
              icon_color: palette.peach,
            },
            {
              name: "twitter",
              url: "https://x.com",
              icon: "brand-x",
              icon_color: palette.red,
            },
            {
              name: "claude",
              url: "https://claude.ai",
              icon: "north-star",
              icon_color: palette.blue,
            },
            {
              name: "twitch",
              url: "https://twitch.tv",
              icon: "brand-twitch",
              icon_color: palette.mauve,
            },

          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-02.gif",
      categories: [
        {
          name: "development",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "neptune",
              url: "https://ui.neptune.ai",
              icon: "circle-triangle",
              icon_color: palette.peach,
            },
            {
              name: "stackoverflow",
              url: "https://stackoverflow.com",
              icon: "brand-stackoverflow",
              icon_color: palette.red,
            },
            {
              name: "Tabler",
              url: "https://tabler.io",
              icon: "brand-tabler",
              icon_color: palette.red,
            },
            {
              name: "Fontawesome",
              url: "https://fontawesome.com",
              icon: "letter-case-toggle",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "challenges",
          links: [
            {
              name: "kaggle",
              url: "https://www.kaggle.com",
              icon: "brain",
              icon_color: palette.green,
            },
            {
              name: "leetcode",
              url: "https://leetcode.com",
              icon: "code-plus",
              icon_color: palette.peach,
            },
            {
              name: "exercism",
              url: "https://exercism.org",
              icon: "code-minus",
              icon_color: palette.red,
            },
            {
              name: "aoc",
              url: "https://adventofcode.com",
              icon: "brand-linktree",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "dou",
              url: "https://dou.ua",
              icon: "brand-prisma",
              icon_color: palette.green,
            },
            {
              name: "hackernews",
              url: "https://news.ycombinator.com",
              icon: "brand-redhat",
              icon_color: palette.peach,
            },
            {
              name: "uber engineering",
              url: "https://www.uber.com/en-GB/blog/london/engineering",
              icon: "brand-uber",
              icon_color: palette.red,
            },
            {
              name: "netflix tech blog",
              url: "https://netflixtechblog.com",
              icon: "brand-netflix",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
    {
      name: "minecraft",
      background_url: "src/img/banners/cbg-02.gif",
      categories: [
        {
          name: "development",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "chatgpt",
              url: "https://chatgpt.com",
              icon: "brand-openai",
              icon_color: palette.peach,
            },
            {
              name: "mistral",
              url: "https://mistral.ai",
              icon: "message",
              icon_color: palette.red,
            },
          ],
        },

        {
          name: "resources",
          links: [
            {
              name: "spigot",
              url: "https://spigotmc.org",
              icon: "droplet",
              icon_color: palette.green,
            },
            {
              name: "mcmodels",
              url: "https://mcmodels.net",
              icon: "box-model",
              icon_color: palette.green,
            },
          ],
        },

      ],
    },
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
