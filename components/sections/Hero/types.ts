import type { socialLinks } from "./data";

export type SocialLinkItem = (typeof socialLinks)[number];

export interface SocialBarProps {
  links: SocialLinkItem[];
}
