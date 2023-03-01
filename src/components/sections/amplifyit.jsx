import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScrollMagic from 'scrollmagic';
import { TimelineLite } from 'gsap';
import { getScrollMagicController } from '../../utils/scroll-magic';
import { getScrollObserver } from '../../utils/browser-scroll';
import SiteImage from '../site-image';

class AmplifyIt extends Component {
  constructor(props) {
    super(props);
    this.animate = this.animate.bind(this);
    this.triggerElement = '.project-animation-amplifyit';
    this.getImageDataById = this.getImageDataById.bind(this);
    this.animationRef = React.createRef();
    this.initAnimate = false;
  }

  componentDidMount() {
    const observer = getScrollObserver();
    const el = this.animationRef.current;
    observer.observe(el);
  }

  getImageDataById(id) {
    const { data } = this.props;
    const { assets } = data;
    return assets.find((asset) => asset.id === id);
  }

  animate() {
    const { triggerElement } = this;
    const controller = getScrollMagicController();
    const timelines = {
      elements: new TimelineLite()
        .fromTo(`${triggerElement} .tablet-sampler-wrapper`, 1, { visibility: 'hidden', y: '106%' }, { visibility: 'visible', y: '0%' }, 0.25) // 200 (height: 188)
        .fromTo(`${triggerElement} .tablet-sampler-shadow`, 1, { y: '-35%' }, { y: '0%' }, 0.25) // -50 (height: 220)
        .fromTo(`${triggerElement} .mixing-board-wrapper`, 1, { visibility: 'hidden', y: '234%' }, { visibility: 'visible', y: '0%' }, 0.25) // 300 (height: 128)
        .fromTo(`${triggerElement} .mixing-board-shadow`, 1, { y: -10 }, { y: 0 }, 0.25) // -10
        .fromTo(`${triggerElement} .beats-headphones-wrapper`, 1, { visibility: 'hidden', y: '120%' }, { visibility: 'visible', y: '0%' }, 0.25) // 400 (height: 153)
        .to(`${triggerElement} .beats-headphones-shadow`, 1, { scale: 1, y: 0, opacity: 1 }, 0.5),
      videoGrid: new TimelineLite()
        .to(`${triggerElement} .video-grid-t-l`, 1, { visibility: 'visible', scale: 1 }, 0)
        .to(`${triggerElement} .video-grid-t-m`, 1, { visibility: 'visible', scale: 1 }, 0.25)
        .to(`${triggerElement} .video-grid-t-r`, 1, { visibility: 'visible', scale: 1 }, 0.5)
        .to(`${triggerElement} .video-grid-m-l`, 1, { visibility: 'visible', scale: 1 }, 0.75)
        .to(`${triggerElement} .video-grid-m-m`, 1, { visibility: 'visible', scale: 1 }, 1)
        .to(`${triggerElement} .video-grid-m-r`, 1, { visibility: 'visible', scale: 1 }, 1.25)
        .to(`${triggerElement} .video-grid-b-l`, 1, { visibility: 'visible', scale: 1 }, 1.5)
        .to(`${triggerElement} .video-grid-b-m`, 1, { visibility: 'visible', scale: 1 }, 1.75)
        .to(`${triggerElement} .video-grid-b-r`, 1, { visibility: 'visible', scale: 1 }, 2)
        .fromTo(`${triggerElement} .video-grid`, 3, { rotateX: '0deg' }, { rotateX: '-20deg' }, 0.5),
    };

    new ScrollMagic.Scene({
      triggerElement,
      duration: 1500,
    }).setClassToggle(triggerElement, 'in-focus')
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement,
      duration: 600,
      triggerHook: 0,
    }).setPin(`${triggerElement} .section-content`)
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement,
      duration: 300,
    }).setTween(timelines.videoGrid)
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement,
      duration: 800,
    }).setTween(timelines.elements)
      .addTo(controller);
  }

  render() {
    const {
      assetPreloadComplete,
      data,
    } = this.props;
    const {
      overview,
      projectTitlePart1,
      projectTitlePart2,
      solution,
    } = data;
    if (assetPreloadComplete && !this.initAnimate) {
      this.initAnimate = true;
      this.animate();
    }
    return (
      <>
        <section className="project-animation project-animation-amplifyit" ref={this.animationRef}>
          <div className="fixed-bg" />
          <div className="section-top-indicator" />
          <div className="section-content">
            <div className="content-wrapper">
              <div className="video-grid-wrapper">
                <div className="video-grid">
                  <SiteImage
                    data={this.getImageDataById('video-grid-t-l')}
                  />
                  <SiteImage
                    data={this.getImageDataById('video-grid-t-m')}
                  />
                  <SiteImage
                    data={this.getImageDataById('video-grid-t-r')}
                  />
                  <SiteImage
                    data={this.getImageDataById('video-grid-m-l')}
                  />
                  <SiteImage
                    data={this.getImageDataById('video-grid-m-m')}
                  />
                  <SiteImage
                    data={this.getImageDataById('video-grid-m-r')}
                  />
                  <SiteImage
                    data={this.getImageDataById('video-grid-b-l')}
                  />
                  <SiteImage
                    data={this.getImageDataById('video-grid-b-m')}
                  />
                  <SiteImage
                    data={this.getImageDataById('video-grid-b-r')}
                  />
                </div>
              </div>
              <div className="tablet-sampler-wrapper">
                <SiteImage
                  data={this.getImageDataById('tablet-sampler')}
                />
                <SiteImage
                  data={this.getImageDataById('tablet-sampler-shadow')}
                />
              </div>
              <div className="mixing-board-wrapper">
                <SiteImage
                  data={this.getImageDataById('mixing-board')}
                />
                <SiteImage
                  data={this.getImageDataById('mixing-board-shadow')}
                />
              </div>
              <div className="beats-headphones-wrapper">
                <div>
                  <SiteImage
                    data={this.getImageDataById('beats-headphones')}
                  />
                  <SiteImage
                    data={this.getImageDataById('beats-headphones-shadow')}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="project-details project-details-amplifyit">
          <div className="project-details-inner">
            <div className="project-title">
              <div className="project-logo verizon-logo" />
              <h2 className="heading-lg">
                <strong>
                  {projectTitlePart1}
                  &nbsp;
                </strong>
                {projectTitlePart2}
              </h2>
            </div>
            <div className="project-overview">
              <h3 className="heading-sm">Overview</h3>
              <p className="body-regular">{overview}</p>
            </div>
            <div className="project-solution">
              <h3 className="heading-sm">Solution</h3>
              <p className="body-regular">{solution}</p>
            </div>
          </div>
        </section>
      </>
    );
  }
}

AmplifyIt.propTypes = {
  assetPreloadComplete: PropTypes.bool.isRequired,
  data: PropTypes.shape(),
};

export default AmplifyIt;
