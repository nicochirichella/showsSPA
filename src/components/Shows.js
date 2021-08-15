import React, { Component } from "react";
import ShowCard from "./ShowCard";
import { Row, Col, Card } from "react-bootstrap";

export default class Shows extends Component {
  constructor() {
    super();
    this.state = {
      shows: []
    };
    this.dataReturned = null;
  }

  async getShowsData() {
    try {
      let res = await fetch("https://api.tvmaze.com/search/shows?q=girls");
      const showsParseResponsed = await res.json();
      this.dataReturned = true;
      this.setState({ shows: showsParseResponsed });
    } catch (e) {
      console.log('Fetching data failure: ', e);
    }
  }

  componentDidMount() {
    this.getShowsData();
  }

  render() {
    console.log(this.state.shows);
    return (
      <div>
        {this.dataReturned ? (
          <div>
            <Row xs={1} md={2} className="g-4">
              {Array.from({ length: this.state.shows.length }).map((_, idx) => (
                <Col>
                  <ShowCard
                    show={this.state.shows[idx].show}
                    score={this.state.shows[idx].score}
                    key={idx}
                  />
                </Col>
              ))}
            </Row>
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
