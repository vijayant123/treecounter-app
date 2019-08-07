import React from 'react';
import PropTypes from 'prop-types';

import ContributionCardList from './ContributionCardList';
import ContributionsMapLegend from './ContributionsMapLegend';
import TextHeading from '../Common/Heading/TextHeading';
import DescriptionHeading from '../Common/Heading/DescriptionHeading';
import InlineLink from '../Common/InlineLink';
import i18n from '../../locales/i18n.js';
import ArcGISContributionsMap from '../Map/ArcGISContributionsMap';

const UserContributions = ({
  userProfileId,
  userContributions,
  deleteContribution,
  isPublic
}) => {
  return (
    <div className="">
      {Object.keys(userContributions).length > 0 ? (
        <div>
          <div className="contribution-container-">
            <ContributionCardList
              contributions={userContributions}
              deleteContribution={deleteContribution}
            />
          </div>
        </div>
      ) : (
        <div className="no-contribution-wrapper">
          {isPublic
            ? i18n.t('label.no_contributions_public')
            : i18n.t('label.no_contributions')}
        </div>
      )}
    </div>
  );
};

UserContributions.propTypes = {
  userProfileId: PropTypes.number.isRequired,
  userContributions: PropTypes.array.isRequired,
  deleteContribution: PropTypes.func,
  isPublic: PropTypes.bool
};

export default UserContributions;
