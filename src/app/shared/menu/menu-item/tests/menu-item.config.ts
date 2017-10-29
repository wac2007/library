import { MenuItem } from '../menu-item';


const MENU_ITEM = new MenuItem('Test Button', '/abc', 'globe');

export default {
  BASE_ROUTE: '/',
  MENU_LINK_SELECTOR: '.menu__menu_link',
  ICON_SELECTOR: 'app-icon i',
  ICON_MATCH: 'fa-globe',
  EMITTER_FUNCTION: 'emitClick',
  LINK_CLICK_SELECTOR: 'a',
  ACTIVE_CLASS_LINK: 'menu__menu_link--active',
  MENU_ITEM,
  MENU_REGEX: new RegExp(MENU_ITEM.text.toString()),
};
