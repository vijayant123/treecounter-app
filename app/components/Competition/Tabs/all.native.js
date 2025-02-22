import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import PlantProjectSnippet from '../../PlantProjects/PlantProjectSnippet';
import { updateStaticRoute } from '../../../helpers/routerHelper';
import styles from '../../../styles/selectplantproject/featured.native';
import scrollStyle from '../../../styles/common/scrollStyle.native';
import CompetitionSnippet from '../CompetitionSnippet.native';
import PropTypes from 'prop-types';
import FeaturedCompetitions from './featured.native';

export default class AllCompetitions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
      pageIndex: 2,
      featuredCompetitions: []
    };
  }
  componentWillMount() {
    let { allCompetitions } = this.props;
    let featuredCompetitions = [];
    if (allCompetitions.length > 0) {
      allCompetitions.forEach(val => {
        if (val.category === 'all') {
          val.competitions.forEach(comp => {
            featuredCompetitions.push(comp);
          });
        }
      });
    }
    this.setState({
      featuredCompetitions: featuredCompetitions
    });
  }

  componentWillReceiveProps(nextProps) {
    let { allCompetitions } = nextProps;
    let featuredCompetitions = [];
    if (allCompetitions.length > 0) {
      allCompetitions.forEach(val => {
        if (val.category === 'all') {
          val.competitions.forEach(comp => {
            featuredCompetitions.push(comp);
          });
        }
      });
    }
    this.setState({
      featuredCompetitions: featuredCompetitions
    });
  }

  onSelectClickedFeaturedProjects = id => {
    // this.props.selectProject(id);
    // const { navigation } = this.props;
    // updateStaticRoute(
    //   'app_donate_detail',
    //   navigation,
    //   navigation.getParam('userForm')
    // );
  };

  render() {
    let { featuredCompetitions } = this.state;
    return (
      <ScrollView
        contentContainerStyle={[
          scrollStyle.styleContainer,
          { paddingBottom: 72 }
        ]}
      >
        {featuredCompetitions.length > 0
          ? featuredCompetitions.map(project => (
              <CompetitionSnippet
                key={'competition' + project.id}
                cardStyle={styles.cardStyle}
                onMoreClick={id => this.props.onMoreClick(id, project.name)}
                leaveCompetition={id => this.props.leaveCompetition(id)}
                enrollCompetition={id => this.props.enrollCompetition(id)}
                editCompetition={this.props.editCompetition}
                competition={project}
                type="all"
              />
            ))
          : null}
      </ScrollView>
    );
  }
}
AllCompetitions.propTypes = {
  allCompetitions: PropTypes.any,
  onMoreClick: PropTypes.any,
  leaveCompetition: PropTypes.any,
  enrollCompetition: PropTypes.any,
  editCompetition: PropTypes.any
};
