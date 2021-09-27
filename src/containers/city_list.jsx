import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import City from "../containers/city";

class CityList extends Component {

  componentWillMount() {
    this.props.setCities();
  }

  render() {
    return (
      <div className="cities">
        {this.props.cities.map((city)=> {
          return <City city={city} key={city.name} />;
        })}
      </div>
    );
  }
}

export default CityList;
