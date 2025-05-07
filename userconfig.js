// User configuration for the startpage. Update the palette, location, and your preferred tabs, categories, and links.

// Define preferred palette for light and dark mode
// Available themes: latte, frappe, mocha, macchiato
const preferredLightTheme = latte;
const preferredDarkTheme = mocha;

let palette = initThemeSystem(preferredLightTheme, preferredDarkTheme);

const default_configuration = {
  overrideStorage: true,
  temperature: {
    location: "Melbourne",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    icon_color: palette.maroon,
  },
  search: {
    engines: {
      d: ["https://duckduckgo.com/?q=", "DuckDuckGo"],
      g: ["https://google.com/search?q=", "Google"],
    },
  },
  keybindings: {
    "s": "search-bar",
  },
  disabled: [],
  localIcons: false,
  fastlink: "https://chat.openai.com",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "yiorgo",
      background_url: "src/img/banners/banner_10.gif",
      categories: [
        {
          name: "bookmarks",
          links: [
            {
              name: "raindrop",
              url: "https://app.raindrop.io",
              icon: "droplet-bolt",
              icon_color: palette.green,
            },
            {
              name: "musicForProgramming();",
              url: "https://musicforprogramming.net",
              icon: "binary-tree",
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
              icon: "brand-gmail",
              icon_color: palette.green,
            },
            {
              name: "calendar",
              url: "https://calendar.google.com",
              icon: "calendar-filled",
              icon_color: palette.peach,
            },
            {
              name: "docs",
              url: "https://docs.google.com/",
              icon: "file",
              icon_color: palette.red,
            },
            {
              name: "drive",
              url: "https://drive.google.com/drive/home",
              icon: "brand-google-drive",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "jobsearch",
          links: [
            {
              name: "seek",
              url: "https://www.seek.com.au",
              icon: "rocket",
              icon_color: palette.green,
            },
            {
              name: "jora",
              url: "https://au.jora.com/",
              icon: "letter-j-small",
              icon_color: palette.peach,
            },
            {
              name: "indeed",
              url: "https://au.indeed.com/",
              icon: "circle-dotted-letter-i",
              icon_color: palette.red,
            },
            {
              name: "gippslander",
              url: "https://gippslander.com.au/",
              icon: "ripple",
              icon_color: palette.blue,
            },
            {
              name: "genomics",
              url: "https://www.melbournegenomics.org.au/careers/jobs-in-genomics",
              icon: "dna-2",
              icon_color: palette.mauve,
            },
          ],
        },
      ],
    },
    {
      name: "lockin",
      background_url: "src/img/banners/banner-16.gif",
      categories: [
        {
          name: "general",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "pubmed",
              url: "https://pubmed.ncbi.nlm.nih.gov/",
              icon: "circle-triangle",
              icon_color: palette.peach,
            },
            {
              name: "science news",
              url: "https://www.nature.com/news",
              icon: "leaf",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "coding",
          links: [
            {
              name: "kaggle",
              url: "https://www.kaggle.com",
              icon: "brain",
              icon_color: palette.green,
            },
            {
              name: "gpt",
              url: "https://chatgpt.com/",
              icon: "brand-asana",
              icon_color: palette.peach,
            },
            {
              name: "neocities",
              url: "https://neocities.org/",
              icon: "cat",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "genomics",
          links: [
            {
              name: "clinvar",
              url: "https://www.ncbi.nlm.nih.gov/clinvar/",
              icon: "dna",
              icon_color: palette.green,
            },
            {
              name: "gnomad",
              url: "https://gnomad.broadinstitute.org/",
              icon: "chart-histogram",
              icon_color: palette.peach,
            },
            {
              name: "omim",
              url: "https://omim.org/",
              icon: "dna-2",
              icon_color: palette.red,
            },
            {
              name: "other",
              url: "https://clingenrecs.com/",
              icon: "microscope",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
    {
      name: "chi ll",
      background_url: "src/img/banners/banner_08.gif",
      categories: [
        {
          name: "social media",
          links: [
            {
              name: "telegram",
              url: "https://web.telegram.org",
              icon: "brand-telegram",
              icon_color: palette.green,
            },
            {
              name: "facebook",
              url: "https://www.facebook.com",
              icon: "brand-facebook",
              icon_color: palette.peach,
            },
            {
              name: "reddit",
              url: "https://www.reddit.com/r/unixporn",
              icon: "brand-reddit",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "gaming",
          links: [
            {
              name: "IGN",
              url: "https://www.ign.com/account/playlist/library",
              icon: "device-gamepad",
              icon_color: palette.green,
            },
            {
              name: "steam",
              url: "https://store.steampowered.com",
              icon: "brand-steam",
              icon_color: palette.peach,
            },
            {
              name: "epicgames",
              url: "https://store.epicgames.com",
              icon: "brand-fortnite",
              icon_color: palette.red,
            },
            {
              name: "nintendo",
              url: "https://store.nintendo.co.uk",
              icon: "device-nintendo",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "video",
          links: [
            {
              name: "anilist",
              url: "https://anilist.co/home",
              icon: "brand-funimation",
              icon_color: palette.green,
            },
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.peach,
            },
            {
              name: "patreon",
              url: "https://www.patreon.com",
              icon: "brand-patreon",
              icon_color: palette.red,
            },
            {
              name: "kyivstar",
              url: "https://tv.kyivstar.ua",
              icon: "star-filled",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_configuration, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
