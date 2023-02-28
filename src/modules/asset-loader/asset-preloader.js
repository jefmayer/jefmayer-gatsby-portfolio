// import { addSectionAnimations } from '../sections/index';
import {
  disableScroll,
  enableScroll,
} from '../../utils/browser-scroll';
import {
  getActiveSectionId,
  getLoaderData,
  updateSectionData,
  updateLoaderData,
} from './loader-data';
import hiresAssetLoader from './hires-asset-loader';

const callbacks = {
  onPreloadComplete: null,
  onLoadComplete: null,
  onUpdate: null,
};
const body = document.querySelector('body');
// const bgLoaderBar = document.querySelector('.background-loader-progress-bar');
// const initLoadingBars = document.querySelector('.project-animation-intro .intro-borders');

const isSectionAssetLoadComplete = (data, id) => (
  data
    .find((section) => section.id === id)
    .assets.filter((asset) => !asset.isLoaded)
    .length === 0
);

// Add param to allow jumping the queue
const getNextAssetInQueue = () => {
  const data = getLoaderData();
  const { selectedSection, sections } = data;
  // If section specified, get that section's assets
  if (selectedSection !== '') {
    const nextAssetToLoad = sections.find((section) => section.id === selectedSection)
      .assets.find((asset) => !asset.isLoaded && !asset.loadStarted);
    // If there are still assets to load in that section, load,
    // otherwise return to load queue
    if (nextAssetToLoad) {
      return nextAssetToLoad;
    }
    // Reset selected section var
    updateLoaderData({ selectedSection: '' });
    enableScroll();
  }
  return sections
    .map((section) => section.assets)
    .reduce((a, b) => a.concat(b), [])
    .find((asset) => !asset.isLoaded && !asset.loadStarted);
};

const removeSectionEventHandlers = (assets) => {
  assets.forEach((asset) => {
    const { element } = asset;
    element.removeEventListener('load', update); /* eslint-disable-line no-use-before-define */
  });
};

const getAssetsLoaded = (data) => (
  data
    .map((section) => section.assets)
    .reduce((a, b) => a.concat(b), [])
    .filter((asset) => asset.isLoaded)
    .length
);

const getAssetsTotal = (data) => (
  data
    .map((section) => section.assets)
    .reduce((a, b) => a.concat(b), [])
    .length
);

const getInitialAssetsLoaded = (data, sectionId) => (
  data
    .find((section) => section.id === sectionId)
    .assets
    .filter((asset) => asset.isLoaded)
    .length
);

const getInitialAssetsTotal = (data, sectionId) => (
  data
    .find((section) => section.id === sectionId)
    .assets
    .length
);

const addHiResAssets = (data) => {
  const assetList = document.querySelectorAll('.site-asset');
  const hiResAsssets = [...assetList]
    .filter((asset) => asset.getAttribute('data-section') === data.id && asset.getAttribute('data-hires-src'))
    .map((element) => ({
      element,
      isLoaded: false,
    }));
  updateSectionData({
    id: data.id,
    hiResAsssets,
  });
};

const onLoadComplete = () => {
  updateLoaderData({ isLoadComplete: true });
  if (callbacks.onLoadComplete) {
    callbacks.onLoadComplete();
    // addSectionAnimations();
  }
};

const onPreloadComplete = () => {
  const scrollIndicator = document.querySelector('.scroll-indicator-animation');
  setTimeout(() => {
    // initLoadingBars.removeAttribute('style');
    body.classList.remove('site-loading');
    body.classList.add('site-loaded');
    scrollIndicator.classList.add('animate-in');
  }, 1000);

  setTimeout(() => {
    body.classList.remove('site-loaded');
    scrollIndicator.classList.add('animate-loop');
    if (callbacks.onPreloadComplete) {
      callbacks.onPreloadComplete();
      // addSectionAnimations();
    }
  }, 2000);
};

const updateAssetPreloader = () => {
  const activeSection = getActiveSectionId();
  const data = getLoaderData();
  const { selectedSection } = data;
  if (!activeSection) {
    return;
  }
  if (
    (!activeSection.allInitialAssetsLoaded && selectedSection === '')
    || (!activeSection.allInitialAssetsLoaded && selectedSection === activeSection.id)
  ) {
    disableScroll();
  } else {
    enableScroll();
  }
};

const update = () => {
  const data = getLoaderData();
  const { sections } = data;
  const intialSectionId = sections[0].id;
  const initialAssetsTotal = getInitialAssetsTotal(sections, intialSectionId);
  const assetsTotal = getAssetsTotal(sections);
  // Create image
  const asset = getNextAssetInQueue();
  if (asset) {
    asset.loadImg(update);
  }
  const initialAssetsLoaded = getInitialAssetsLoaded(sections, intialSectionId);
  const assetsLoaded = getAssetsLoaded(sections);
  // console.log(`${initialAssetsLoaded} / ${initialAssetsTotal}`);
  // console.log(`${assetsLoaded} / ${assetsTotal}`);
  // console.log(`${(assetsLoaded / assetsTotal) * 100}%`);
  // Only set if still loading initial assets
  const initPercLoaded = initialAssetsLoaded / initialAssetsTotal;
  if (initPercLoaded < 1) {
    // initLoadingBars.style.transform = `rotate(0) scaleX(${initPercLoaded})`;
  }
  // bgLoaderBar.style.transform = `scaleX(${assetsLoaded / assetsTotal})`;
  // Check if all a section's image loads are complete
  sections.forEach((section, index) => {
    const isComplete = isSectionAssetLoadComplete(sections, section.id);
    if (isComplete && !section.allInitialAssetsLoaded) {
      // console.log(`${section.id}, isComplete: ${isComplete}`);
      removeSectionEventHandlers(section.assets);
      updateSectionData({
        allInitialAssetsLoaded: true,
        id: section.id,
      });
      addHiResAssets(section);
      // Start background load of hi-res image assets, if any
      hiresAssetLoader(section, () => {
        updateSectionData({
          allHiResAssetsLoaded: true,
          id: section.id,
        });
      });
      updateAssetPreloader();
      if (index === 0) {
        onPreloadComplete();
      }
    }
  });
  // Load is complete
  if (assetsLoaded === assetsTotal) {
    onLoadComplete();
  }
};

const initAssetPreloader = (options) => {
  callbacks.onPreloadComplete = options.onPreloadComplete;
  callbacks.onLoadComplete = options.onLoadComplete;
  callbacks.onUpdate = options.onUpdate;
  // Multi-threaded loader
  update();
  update();
  update();
};

export {
  initAssetPreloader,
  updateAssetPreloader,
};
