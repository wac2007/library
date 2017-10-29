import { MenuItem } from '../menu-item';



const ACTIVE_CLASS_LINK = 'menu__menu_link--active';
const BASE_ROUTE = '/';
const ICON_SELECTOR = 'app-icon i';
const ICON_MATCH = 'fa-globe';
const LINK_CLICK_SELECTOR = 'a';
const MENU_ITEM = new MenuItem('Test Button', '/abc', 'globe');
const MENU_LINK_SELECTOR = '.menu__menu_link';
const MENU_REGEX = new RegExp(MENU_ITEM.text.toString());

export {
  ACTIVE_CLASS_LINK,
  BASE_ROUTE,
  ICON_SELECTOR,
  ICON_MATCH,
  LINK_CLICK_SELECTOR,
  MENU_ITEM,
  MENU_LINK_SELECTOR,
  MENU_REGEX,
};
