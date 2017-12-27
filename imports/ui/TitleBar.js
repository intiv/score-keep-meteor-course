import React from 'react';

export default class TitleBar extends React.Component {
  renderSubtitle(){
    if(this.props.subtitle){
      return <h2 className="title-bar__subtitle">{this.props.subtitle}</h2>;
    }
  }

  render(){
    return (
      <div className="title-bar">
        <div className="wrapper">
          <h1>{this.props.title}</h1>
          {this.renderSubtitle()}
        </div>
      </div>
    );
  }
}

TitleBar.propTypes = {
  //throws warnings if title is not string or wasnt passed to the prop

  title: React.PropTypes.string.isRequired,
  subtitle: React.PropTypes.string
  /*If prop isnt required it can just be:
  title: React.PropTypes.string*/
};

TitleBar.defaultProps = {
  //Sets a default value to a prop in case it isnt passed to the component
  //title: 'Default Title',
  //subtitle: 'This is a score keep app'
}
