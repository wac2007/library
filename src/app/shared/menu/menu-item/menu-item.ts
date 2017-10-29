const MODIFIER_INACTIVE = 'inactive';

class MenuItem {
  constructor(
    public text: String,
    public route: String,
    public icon: String,
    public modifier: String = ''
  ) {
  }
}

export {
  MODIFIER_INACTIVE,
  MenuItem
};
