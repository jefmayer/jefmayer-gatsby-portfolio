import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ScrollMagic from 'scrollmagic';
import { TimelineLite } from 'gsap';
import { getScrollMagicController } from '../../utils/scroll-magic';
import { addSectionImages } from '../../actions';
import PreloadImage from '../preload-image';

class AmplifyIt extends Component {
  constructor(props) {
    super(props);
    this.animate = this.animate.bind(this);
    this.triggerElement = '.project-animation-amplifyit';
    this.sectionName = 'amplifyit';
    this.sectionImages = [];
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(addSectionImages(
      this.sectionImages,
      this.sectionName,
      false,
    ));
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
    }).setclassToggle(triggerElement, 'in-focus')
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
    const { sectionName, sectionImages } = this;
    return (
      <section className="project-animation project-animation-amplifyit">
        <div className="fixed-bg" />
        <div className="section-top-indicator" />
        <div className="section-content">
          <div className="content-wrapper">
            <div className="video-grid-wrapper">
              <div className="video-grid">
                <div className="video-grid-item video-grid-t-l">
                  <PreloadImage
                    alt=""
                    hiresSrc="images/amplifyit/a-video-grid-t-l.gif"
                    section={sectionName}
                    sectionImages={sectionImages}
                    src="images/amplifyit/video-grid-t-l.png"
                  />
                </div>
                <div className="video-grid-item video-grid-t-m">
                  <PreloadImage
                    alt=""
                    hiresSrc="images/amplifyit/a-video-grid-t-m.gif"
                    section={sectionName}
                    sectionImages={sectionImages}
                    src="images/amplifyit/video-grid-t-m.png"
                  />
                </div>
                <div className="video-grid-item video-grid-t-r">
                  <PreloadImage
                    alt=""
                    hiresSrc="images/amplifyit/a-video-grid-t-r.gif"
                    section={sectionName}
                    sectionImages={sectionImages}
                    src="images/amplifyit/video-grid-t-r.png"
                  />
                </div>
                <div className="video-grid-item video-grid-m-l">
                  <PreloadImage
                    alt=""
                    hiresSrc="images/amplifyit/a-video-grid-m-l.gif"
                    section={sectionName}
                    sectionImages={sectionImages}
                    src="images/amplifyit/video-grid-m-l.png"
                  />
                </div>
                <div className="video-grid-item video-grid-m-m">
                  <PreloadImage
                    alt=""
                    hiresSrc="images/amplifyit/a-video-grid-m-m.gif"
                    section={sectionName}
                    sectionImages={sectionImages}
                    src="images/amplifyit/video-grid-m-m.png"
                  />
                </div>
                <div className="video-grid-item video-grid-m-r">
                  <PreloadImage
                    alt=""
                    hiresSrc="images/amplifyit/a-video-grid-m-r.gif"
                    section={sectionName}
                    sectionImages={sectionImages}
                    src="images/amplifyit/video-grid-m-r.png"
                  />
                </div>
                <div className="video-grid-item video-grid-b-l">
                  <PreloadImage
                    alt=""
                    hiresSrc="images/amplifyit/a-video-grid-b-l.gif"
                    section={sectionName}
                    sectionImages={sectionImages}
                    src="images/amplifyit/video-grid-b-l.png"
                  />
                </div>
                <div className="video-grid-item video-grid-b-m">
                  <PreloadImage
                    alt=""
                    hiresSrc="images/amplifyit/a-video-grid-b-m.gif"
                    section={sectionName}
                    sectionImages={sectionImages}
                    src="images/amplifyit/video-grid-b-m.png"
                  />
                </div>
                <div className="video-grid-item video-grid-b-r">
                  <PreloadImage
                    alt=""
                    hiresSrc="images/amplifyit/a-video-grid-b-r.gif"
                    section={sectionName}
                    sectionImages={sectionImages}
                    src="images/amplifyit/video-grid-b-r.png"
                  />
                </div>
              </div>
            </div>
            <div className="tablet-sampler-wrapper">
              <div className="tablet-sampler">
                <PreloadImage
                  alt=""
                  section={sectionName}
                  sectionImages={sectionImages}
                  src="images/amplifyit/tablet-sampler.png"
                />
              </div>
              <div className="tablet-sampler-shadow">
                <PreloadImage
                  alt=""
                  section={sectionName}
                  sectionImages={sectionImages}
                  src="images/amplifyit/tablet-sampler-shadow.png"
                />
              </div>
            </div>
            <div className="mixing-board-wrapper">
              <div className="mixing-board">
                <PreloadImage
                  alt=""
                  section={sectionName}
                  sectionImages={sectionImages}
                  src="images/amplifyit/mixing-board.png"
                />
              </div>
              <div className="mixing-board-shadow">
                <PreloadImage
                  alt=""
                  section={sectionName}
                  sectionImages={sectionImages}
                  src="images/amplifyit/mixing-board-shadow.png"
                />
              </div>
            </div>
            <div className="beats-headphones-wrapper">
              <div>
                <div className="beats-headphones">
                  <PreloadImage
                    alt=""
                    section={sectionName}
                    sectionImages={sectionImages}
                    src="images/amplifyit/beats-headphones.png"
                  />
                </div>
                <div className="beats-headphones-shadow">
                  <PreloadImage
                    alt=""
                    section={sectionName}
                    sectionImages={sectionImages}
                    src="images/amplifyit/beats-headphones-shadow.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

AmplifyIt.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  ...bindActionCreators({ addSectionImages }, dispatch),
});

export default connect(mapDispatchToProps)(AmplifyIt);
