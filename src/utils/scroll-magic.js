import ScrollMagic from 'scrollmagic';

let controller = null;

const initScrollMagicController = () => {
  controller = new ScrollMagic.Controller();
};

const getScrollMagicController = () => (
  controller
);

export {
  getScrollMagicController,
  initScrollMagicController,
};
