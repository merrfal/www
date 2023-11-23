import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from "../ui/icons";
import { Translation } from "../utils/Translations";
import { DHURATA_E_BAJRAMIT_WEB, EKONOMIA_ISLAME_WEB, INSTITUTI_GERMA_WEB, PRISHTINA_TALKS_WEB, VIEW_ALL_WEB } from "../configs/Constants";

export const ProjectsList = [
  {
    name: Translation("instituti-germa"),
    path: INSTITUTI_GERMA_WEB,
    icon: false,
  },
  {
    name: Translation("dhurata-e-bajramit"),
    path: DHURATA_E_BAJRAMIT_WEB,
    icon: false,
  },
  {
    name: Translation("ekonomia-islame"),
    path: EKONOMIA_ISLAME_WEB,
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
    name: Translation("give-a-product"),
    link: "/shto",
  },
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
    path: "https://twitter.com/MerrF4l",
  },
  {
    component: <LinkedInIcon />,
    path: "https://www.linkedin.com/company/merrfal",
  }
]
