import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";
import { withRouter } from "react-router-dom";
// import { productInfo } from "../../graphql/fragments/products/productInfo";
import * as styles from "./styles";

class ProductForm extends Component {
  state = this.props.product || {
    title: "",
    author: "",
    description: "",
    price: 0,
    coverUrl: "",
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

    const { createProduct, updateProduct, history } = this.props;

    const product = this.state;

    try {
      if (this.props.product) {
        const { id, __typename, ...productInput } = product;

        await updateProduct({
          variables: {
            id: this.props.product.id,
            product: productInput
          }
        });
      } else {
        await createProduct({
          variables: {
            product
          }
        });
      }
    } catch (error) {
      // Logout on errors for now
      // We should be able to pass error type to handle it properly
      // somehow in the future
      this.props.auth.logout();
    }

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
              value={this.state.title}
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

const updateProduct = gql`
  mutation UpdateProduct($id: ID!, $product: ProductInput) {
    updateProduct(id: $id, product: $product) {
      id
    }
  }
`;

// const getProduct = gql`
//   query GetProduct($id: ID!) {
//     product(id: $id) {
//       ...productInfo
//     }
//   }

//   ${productInfo}
// `;

export default withRouter(
  compose(
    graphql(createProduct, { name: "createProduct" }),
    graphql(updateProduct, { name: "updateProduct" })
    // graphql(getProduct, {
    //   name: "getProduct",
    //   skip: ({ match }) => !match.params.id,
    //   options: ownProps => ({
    //     variables: { id: ownProps.match.params.id }
    //   })
    // })
  )(ProductForm)
);
