import React  from 'react';
import { connect } from 'react-redux';
import SlidingPanel from 'react-sliding-side-panel';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import { removeSelectProduct } from "../reducers/selectedProduct/removeSelectProduct";
import LeftPaneContent from "../components/LeftPaneContent";
import FontAwesome from 'react-fontawesome';

const LeftPane = ({selectedProduct, removeSelectProduct}) => (
    <SlidingPanel
        type={'left'}
        isOpen={selectedProduct !== null && selectedProduct !== undefined}
        size={30}
        className="left-pane"
    >
        <div>
            <div className="btn" onClick={() => {removeSelectProduct()}}>
                <FontAwesome name="times" size="2x"/>
            </div>
            <LeftPaneContent product={selectedProduct} />
        </div>
    </SlidingPanel>
)


const mapStateToProps = ({ products, selectedProduct }) => {
    return {
        products: products,
        selectedProduct: selectedProduct
    }
}

export default connect(mapStateToProps , { removeSelectProduct })(LeftPane);
