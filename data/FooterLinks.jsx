import { FacebookIcon, InstagramIcon, LinkedInIcon, ThreadsIcon, TikTokIcon, TwitterIcon } from "../ui/icons"
import { Translation } from "../utils/Translations"
import { PRINDERIMI_WEB, PRISHTINA_TALKS_WEB } from "../configs/Constants"

export const ProjectsList = [
  // {
  //   name: Translation("instituti-germa"),
  //   path: INSTITUTI_GERMA_WEB,
  //   icon: false,
  // },
  {
    name: Translation("prinderimi"),
    path: PRINDERIMI_WEB,
    icon: false,
  },
  {
    name: Translation("prishtina-talks"),
    path: PRISHTINA_TALKS_WEB,
    icon: false,
  },
]

export const HelpfulLinks = [
  {
    name: Translation("terms-of-service"),
    link: "/kushtet-e-sherbimit",
  },
  {
    name: Translation("privacy-policy"),
    link: "/politika-e-privatesise",
  },
  {
    name: Translation("contact-us"),
    href: "https://m.me/merrfal"
  }
]

export const SocialMediaLinks = [
  {
    component: <FacebookIcon />,
    path: "https://www.facebook.com/merrfal",
  },
  {
    component: <InstagramIcon />,
    path: "https://www.instagram.com/merrfal",
  },
  {
    component: <TwitterIcon />,
    path: "https://twitter.com/merrfal_",
  },
  {
    component: <LinkedInIcon />,
    path: "https://www.linkedin.com/company/merrfal",
  },
  {
    component: <TikTokIcon />,
    path: "https://www.tiktok.com/@merrfal",
  },
  {
    component: <ThreadsIcon />,
    path: "https://www.threads.net/@merrfal",
  }
]
