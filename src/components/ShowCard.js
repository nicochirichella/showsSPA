import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./ShowCard.css";
import noImage from "../resources/noImage.jpeg";

const maxSizeShortDesc = 100;
export default class ShowCard extends Component {
  constructor(props) {
    super();
    console.log(props);
    this.state = {
      id: props.show ? props.show.id : null,
      title: props.show ? props.show.name : "",
      shortDesc:
        props.show && props.show.summary
          ? this.getShortDesc(props.show.summary)
          : "",
      description: props.show ? props.show.summary : "",
      minImageUrl:
        props.show && props.show.image ? props.show.image.medium : noImage,
      maxImageUrl:
        props.show && props.show.image ? props.show.image.original : ""
    };
  }

  getShortDesc(desc) {
    const shortDesc =
      desc.length > maxSizeShortDesc
        ? desc.substring(0, maxSizeShortDesc) + "..."
        : desc;
    return shortDesc;
  }

  seeShowFullPage() {

  }

  render() {
    return (
      <div className="Card">
        <a href={"#/shows/"+this.state.id}>
          <Card style={{ width: "18rem" }} >
            <Card.Title>{this.state.title}</Card.Title>
            <Card.Img
              className="img"
              variant="top"
              src={this.state.minImageUrl}
            />
            <Card.Body>
              <Card.Text>{this.state.shortDesc}</Card.Text>
              <Link to={"/shows/"+this.state.id} className="btn btn-primary">See more</Link>
            </Card.Body>
          </Card>
        </a>
      </div>
    );
  }
}
