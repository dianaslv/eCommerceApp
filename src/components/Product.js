import React, {Component} from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {ProductConsumer} from "../context";
import {ProductWrapper} from "./ProductWrapper";
import PropTypes from 'prop-types';

export default class Product extends Component {
    render() {
        const {id, title, img, info, price, inCart} = this.props.product;
        return (
            <ProductWrapper className="col mx-auto my-4">
                <div className="wrapper mx-auto">
                    <div className="outer">
                        <div className="content animated fadeInLeft">
                            <span className="bg animated fadeInDown ">{id}</span>
                            <h1>{title}</h1>
                            <p>{info}</p>
                            <div className="button">
                                <a href="#">${price}</a>

                                <a className="cart-btn" href="#" onClick={() => console.log("added to the cart")}>
                                    <i className="cart-icon ion-bag"/>
                                    {inCart ? ("inCart") : ("ADD TO CART")}
                                </a>
                            </div>
                        </div>
                        <img src={img} width="300px" className="animated fadeInRight"/>
                    </div>
                </div>

            </ProductWrapper>
        );
    }
}

Product.propTypes = {
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired
}

