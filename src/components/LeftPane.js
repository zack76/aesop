import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import SlidingPanel from 'react-sliding-side-panel';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import { removeSelectProduct } from "../reducers/selectedProduct/removeSelectProduct";
import LeftPaneContent from "../components/LeftPaneContent";
import FontAwesome from 'react-fontawesome';

class LeftPane extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPaneOpen: false,
            isPaneOpenLeft: false
        }
    }

    componentDidMount() {
        Modal.setAppElement(this.el);
    }


    render() {
        const { selectedProduct } = this.props;
        return (
            <SlidingPanel
                type={'left'}
                isOpen={selectedProduct !== null && selectedProduct !== undefined}
                size={30}
                className="left-pane"
            >
                <div className="btn" onClick={() => {this.props.removeSelectProduct()}}>
                    <FontAwesome name="times" size="2x"/>
                </div>
                <LeftPaneContent product={selectedProduct} />
            </SlidingPanel>
        );
    }
}


const mapStateToProps = ({ products, selectedProduct }) => {
    return {
        products: products,
        selectedProduct: selectedProduct
    }
}

export default connect(mapStateToProps , { removeSelectProduct })(LeftPane);
