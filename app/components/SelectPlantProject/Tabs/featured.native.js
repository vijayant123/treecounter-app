import React, { Component } from 'react';
import { View, ScrollView, Dimensions } from 'react-native';
import PlantProjectFull2 from '../../PlantProjects/PlantProjectFull2';

export default class FeaturedProjects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
      pageIndex: 0,
      featuredProjects: props.plantProjects
    };
  }
  componentWillMount() {
    let { plantProjects } = this.props;

    let featuredProjects = plantProjects.reduce((projects, project) => {
      if (project.isFeatured) {
        projects.push(project);
      }
      return projects;
    }, []);
    this.setState({
      featuredProjects: featuredProjects
    });
  }

  componentWillReceiveProps(nextProps) {
    let { plantProjects } = nextProps;
    let featuredProjects = plantProjects.reduce((projects, project) => {
      if (project.isFeatured) {
        projects.push(project);
      }
      return projects;
    }, []);
    this.setState({
      featuredProjects: featuredProjects
    });
  }

  onSelectClickedFeaturedProjects = id => {
    this.props.selectProject(id);
  };

  render() {
    let { featuredProjects } = this.state;
    return (
      <ScrollView>
        {featuredProjects && featuredProjects.length > 0
          ? featuredProjects.map(project => (
              <PlantProjectFull2
                key={'projectFull' + project.id}
                onMoreClick={id => this.props.onMoreClick(id)}
                plantProject={project}
                onSelectClickedFeaturedProjects={id =>
                  this.onSelectClickedFeaturedProjects(id)
                }
                showMoreButton={true}
                tpoName={project.tpo_name}
              />
            ))
          : null}
      </ScrollView>
    );
  }
}
