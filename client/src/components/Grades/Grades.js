import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

class Grades extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prod: this.props.products.find(
        prod => prod._id === this.props.product._id
      )
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(number) {
    let product = this.props.products.find(
      prod => prod._id === this.props.product._id
    );
    this.props.products
      .find(prod => prod._id === this.props.product._id)
      .ocjene.push(number);

    this.setState({
      prod: this.props.products.find(
        prod => prod._id === this.props.product._id
      )
    });
    let grade = {
      number: number
    };

    axios.post(
      `http://localhost:5000/api/items/addGrade/${product._id}`,
      grade
    );
  }

  render() {
    let ocjene = 0;
    this.state.prod.ocjene.map(ocj => (ocjene += +ocj));
    let ocjena = 0;
    ocjena = ocjene / this.state.prod.ocjene.length;
    ocjena = Math.round(ocjena * 100) / 100;
    /* console.log(ocjena);
    console.log(ocjene); */

    return (
      <div>
        <p>Grades works</p>
        <button onClick={() => this.onClick(1)}>1</button>
        <button onClick={() => this.onClick(2)}>2</button>
        <button onClick={() => this.onClick(3)}>3</button>
        <button onClick={() => this.onClick(4)}>4</button>
        <button onClick={() => this.onClick(5)}>5</button>
        {this.state.prod.ocjene.length === 0 ? (
          <p>No grades yet</p>
        ) : (
          <p>
            {ocjena} na temelju {this.state.prod.ocjene.length}
          </p>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.productReducer.products
});

export default connect(mapStateToProps)(Grades);
