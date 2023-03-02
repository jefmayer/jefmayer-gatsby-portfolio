import * as React from 'react';
import PropTypes from 'prop-types';

function ProjectDetails({
  id,
  projectTitlePart1,
  projectTitlePart2,
  overview,
  solution,
}) {
  return (
    <section className={`project-details project-details-${id}`}>
      <div className="project-details-inner">
        <div className="project-title">
          <div className={`project-logo ${id}-logo`} />
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
  );
}

ProjectDetails.propTypes = {
  id: PropTypes.string.isRequired,
  projectTitlePart1: PropTypes.string.isRequired,
  projectTitlePart2: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  solution: PropTypes.string.isRequired,
};

export default ProjectDetails;
