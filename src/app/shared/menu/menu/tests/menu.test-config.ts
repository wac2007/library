import { MenuItem } from '../../menu-item/menu-item';

const MENU_BUTTONS = [
  new MenuItem('Test Button 1', '/foo', 'fa-globe'),
  new MenuItem('Test Button 2', '/bar', 'fa-globe'),
  new MenuItem('Test Button 3', '/baz', 'fa-globe'),
];
const MENU_BUTTON_SELECTOR = 'app-menu-item';

export {
  MENU_BUTTONS,
  MENU_BUTTON_SELECTOR,
};

