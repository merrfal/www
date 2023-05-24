import { FacebookIcon, InstagramIcon, TwitterIcon } from "../ui/icons";
import { Translation } from "../utils/Translations";
import { DHURATA_E_BAJRAMIT_WEB, EKONOMIA_ISLAME_WEB, INSTITUTI_GERMA_WEB, VIEW_ALL_WEB } from "../configs/Constants";

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
    name: Translation("view-all"),
    path: VIEW_ALL_WEB,
    icon: true,
  },
];

export const HelpfulLinks = [
  {
    name: Translation("give-a-product"),
    href: "/shto",
  },
  {
    name: Translation("terms-of-service"),
    href: "/kushtet-e-sherbimit",
  },
  {
    name: Translation("privacy-policy"),
    href: "/politika-e-privatesise",
  },
];

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
    path: "https://twitter.com/merrfal",
  },
];
