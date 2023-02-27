const disableScroll = () => {
  // console.log('disableScroll');
  const html = document.querySelector('html');
  const sectionLoader = document.querySelector('.section-loader-animation');
  html.classList.add('noscroll');
  sectionLoader.classList.add('animate-in');
  setTimeout(() => {
    sectionLoader.classList.add('animate-loop');
  }, 300);
};

const enableScroll = () => {
  // console.log('enableScroll');
  const html = document.querySelector('html');
  const sectionLoader = document.querySelector('.section-loader-animation');
  html.classList.remove('noscroll');
  sectionLoader.classList.remove('animate-in');
  sectionLoader.classList.remove('animate-loop');
};

let observer = null;

const getScrollObserver = () => (
  observer
);

const initScrollObserver = (options) => {
  const {
    onUpdate,
  } = options;

  /* const getSectionName = (className) => {
    let section = '';
    data.forEach((item) => {
      const { id } = item;
      if (className.indexOf(id) !== -1) {
        section = id;
      }
    });
    return section;
  }; */

  const observerHandler = (entries) => {
    entries.forEach((entry) => {
      if (onUpdate) {
        const { target } = entry;
        const { className } = target;
        onUpdate(className, entry.isIntersecting);
        // const id = getSectionName(className);
        // onUpdate(id, entry.isIntersecting);
      }
    });
  };

  const observerOptions = {
    threshold: 0.5,
  };

  observer = new IntersectionObserver(observerHandler, observerOptions);
};

export {
  disableScroll,
  enableScroll,
  getScrollObserver,
  initScrollObserver,
};
