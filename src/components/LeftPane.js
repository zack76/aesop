import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import { removeSelectProduct } from "../reducers/selectedProduct/removeSelectProduct";
import LeftPaneContent from "../components/LeftPaneContent"

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
                <SlidingPane
                    className='some-custom-class'
                    overlayClassName='some-custom-overlay-class'
                    isOpen={selectedProduct !== null && selectedProduct !== undefined}
                    title={'Variants' }
                    from='left'
                    onRequestClose={ () => {
                        this.props.removeSelectProduct();
                    } }>
                    <LeftPaneContent product={selectedProduct} />
                </SlidingPane>
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
