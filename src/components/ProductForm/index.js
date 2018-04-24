import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import { withRouter } from "react-router-dom";
import gql from "graphql-tag";
import * as styles from "./styles";

class ProductForm extends Component {
  state = {
    title: "",
    author: "",
    price: 0.0,
    quantity: 0,
    type: "book"
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();

    if (!this.isValid()) {
      return false;
    }

    const { createProduct, history } = this.props;

    const product = this.state;

    await createProduct({
      variables: {
        product
      }
    });

    history.push("/admin/storage");
  };

  isValid = () => {
    // TODO: Add real validation check
    return true;
  };

  isSubmitting = () => {
    return false;
  };

  render() {
    return (
      <styles.ProductForm>
        <styles.Form onSubmit={this.handleSubmit}>
          <styles.FormGroup>
            <styles.FormLabel>Title</styles.FormLabel>
            <styles.FormInput
              name="title"
              value={this.state.email}
              onChange={this.handleInputChange}
              required
              disabled={this.isSubmitting()}
            />
          </styles.FormGroup>

          <styles.FormGroup>
            <styles.FormLabel>Author</styles.FormLabel>
            <styles.FormInput
              name="author"
              value={this.state.author}
              onChange={this.handleInputChange}
              required
              disabled={this.isSubmitting()}
            />
          </styles.FormGroup>

          <styles.FormGroup>
            <styles.FormLabel>Price</styles.FormLabel>
            <styles.FormInput
              name="price"
              value={this.state.price}
              type="numeric"
              onChange={this.handleInputChange}
              required
              disabled={this.isSubmitting()}
            />
          </styles.FormGroup>

          <styles.FormGroup>
            <styles.FormLabel>Quantity</styles.FormLabel>
            <styles.FormInput
              name="quantity"
              value={this.state.quantity}
              type="numeric"
              onChange={this.handleInputChange}
              required
              disabled={this.isSubmitting()}
            />
          </styles.FormGroup>

          <styles.FormGroup>
            <styles.FormLabel>Type</styles.FormLabel>
            <styles.FormSelect
              name="type"
              value={this.state.type}
              onChange={this.handleInputChange}
              required
              disabled={this.isSubmitting()}
            >
              <styles.FormSelectOption value="book">
                Book
              </styles.FormSelectOption>
              <styles.FormSelectOption value="souvenir">
                Souvenir
              </styles.FormSelectOption>
            </styles.FormSelect>
          </styles.FormGroup>

          <styles.FormGroup>
            <styles.SubmitButton
              disabled={!this.isValid() || this.isSubmitting()}
              onClick={this.handleSubmit}
            >
              Add product
            </styles.SubmitButton>
          </styles.FormGroup>
        </styles.Form>
      </styles.ProductForm>
    );
  }
}

const createProduct = gql`
  mutation CreateProduct($product: ProductInput) {
    addProduct(product: $product) {
      id
    }
  }
`;

export default withRouter(
  compose(graphql(createProduct, { name: "createProduct" }))(ProductForm)
);
