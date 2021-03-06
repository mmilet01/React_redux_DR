import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewItem } from "../../actions/productActions";
import "./InputForm.css";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";

class InputForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      processor: "",
      operatingSystem: "",
      graphics: "",
      SSD: "",
      RAM: "",
      price: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    const { value } = e.target;
    this.setState({
      ...this.state,
      [e.target.name]: value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    let newItem = {
      name: this.state.name,
      processor: this.state.processor,
      operatingSystem: this.state.operatingSystem,
      graphics: this.state.graphics,
      RAM: this.state.RAM,
      SSD: this.state.SSD,
      price: this.state.price
    };
    this.props.addNewItem(newItem);
    this.props.history.push("/");
    window.location.reload();
  }

  render() {
    return (
      <div>
        <form>
          <input
            name="name"
            type="text"
            placeholder="name"
            value={this.state.name}
            onChange={this.onInputChange}
          />
          <input
            name="processor"
            type="text"
            placeholder="processor"
            value={this.state.processor}
            onChange={this.onInputChange}
          />
          <input
            name="graphics"
            type="text"
            placeholder="graphics"
            value={this.state.graphics}
            onChange={this.onInputChange}
          />
          <input
            name="operatingSystem"
            type="text"
            placeholder="operatingSystem"
            value={this.state.operatingSystem}
            onChange={this.onInputChange}
          />
          <input
            name="price"
            type="text"
            placeholder="price"
            value={this.state.price}
            onChange={this.onInputChange}
          />
          <input
            name="SSD"
            type="text"
            placeholder="SSD"
            value={this.state.SSD}
            onChange={this.onInputChange}
          />
          <input
            name="RAM"
            type="text"
            placeholder="RAM"
            value={this.state.RAM}
            onChange={this.onInputChange}
          />
          <Link to="/">
            <button className="btnDetail" onClick={this.onSubmit}>
              Add new
            </button>
          </Link>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  products: state.productReducer.products
});
export default withRouter(
  connect(
    mapStateToProps,
    { addNewItem }
  )(InputForm)
);
