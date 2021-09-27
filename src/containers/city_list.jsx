import React, { Component } from 'react';

import City from "../containers/city";

class CityList extends Component {
  render() {
    return (
      <div>
        {this.props.cities.map((city)=> {
          return <City city={city} key={city.name} />
        })}
      </div>
    );
  }
}

export default CityList;
