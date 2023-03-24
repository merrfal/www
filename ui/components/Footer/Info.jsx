import Link from "next/link";

import { SocialMediaLinks } from "../../../data/FooterLinks";
import { IconIcon } from "../../icons";

export default function Info() {
  return (
    <div class="flex flex-col">
      <Link href="/">
        <a class="hover:cursor-pointer col-span-1 md:col-span-2 lg:row-start-1 lg:col-start-1">
          <IconIcon />
        </a>
      </Link>

      <p class="text-[15px] text-gray-500 pt-5 mb-2 sm: w-[95%] md:w-[80%] lg:w-[80%]">
        Një platformë që mundëson të dhuroni gjëra për njerëzit që kanë nevoja për ato produkte, përdorimi është falas si produktet që dhurohen.
      </p>

      <div class="flex flex-wrap mt-8 space-x-4 items-center">
        {SocialMediaLinks.map((link, index) => (
          <a href={link.path} key={index}>
            {link.component}
          </a>
        ))}
      </div>
    </div>

  );
}
