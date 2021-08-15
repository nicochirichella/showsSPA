import React, { Component } from "react";
import ShowCard from "./ShowCard";
import { Row, Col } from "react-bootstrap";

export default class ShowPage extends Component {
  constructor() {
    super();
    this.state = {
      showInfo: {}
    };
    this.dataReturned = null;
  }

  async getShowData() {
    try {
      console.log(this.props.match.params.id)
      let res = await fetch("https://api.tvmaze.com/shows/"+ this.props.match.params.id);
      const showsParseResponsed = await res.json();
      this.dataReturned = true;
      this.setState({ showInfo: showsParseResponsed });
    } catch (e) {
      console.log('Fetching data failure: ', e);
    }
  }

  componentDidMount() {
    this.getShowData();
  }

  render() {
    console.log(this.state.shows);
    return (
      <div>
        {this.dataReturned ? (
          <div>
            <ShowCard
                show=""
                score=""
                key={1}
            />
          </div>
        ) : (
          <div>
            <h1>Cargando</h1>
          </div>
        )}
      </div>
    );
  }
}
