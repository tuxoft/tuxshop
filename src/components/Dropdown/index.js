import React, { Component } from "react";
import { Portal } from "react-portal";
import * as styles from "./styles";

class DropdownMenu extends Component {
  handleKeyPress = (e) => {
    const { isOpen } = this.props;

    if (isOpen && e.keyCode === 27) {
      this.props.toggleDropdown();
    }
  };

  componentDidMount(){
    document.addEventListener("keydown", this.handleKeyPress, false);
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.handleKeyPress, false);
  }

  render() {
    const { toggleDropdown, isOpen, children, ...restProps } = this.props;

    return (
      <styles.DropdownWrapper {...restProps}>
        {isOpen && (
          <Portal>
            <styles.DropdownTrigger onClick={toggleDropdown} />
          </Portal>
        )}

        <styles.DropdownMenu isOpen={isOpen}>{children}</styles.DropdownMenu>
      </styles.DropdownWrapper>
    );
  }
}

const DropdownMenuItem = ({ children, ...restProps }) => {
  return (
    <styles.DropdownMenuItem {...restProps}>{children}</styles.DropdownMenuItem>
  );
};

export { DropdownMenu, DropdownMenuItem };
