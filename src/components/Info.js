import React, { Component } from 'react';
import { InfoConsumer } from './context'
import { Link, LInk } from 'react-router-dom';

class Info extends Component {
    render() {
        const
            {
                id,
                headerTitle,
                headerSubTitle,
                headerText,
                img
            } = this.props.item;
        return (
            <InfoConsumer>
                {value => (


                    <div className="col-10 col-lg-4 mx-auto md-5">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={img} alt={headerTitle} className="card-img-top" />
                            <div className="card-body">
                                <h3 className="card-title text-uppercase">
                                    {headerTitle}

                                </h3>
                                <div className="card-title">
                                    <h5> {headerSubTitle}</h5>
                                    <p className="card-text">{headerText}</p>
                                    <Link to="/details" className="btn btn-outline-primary text-uppercase">
                                        More Info</Link>
                                </div>
                            </div>

                        </div>
                    </div>




                )}
            </InfoConsumer>
        );
    }
}

export default Info;