import React from 'react'

export const Title = ({title}) => {
    return (
        <>
            <div className="title-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title">
                                <h2 className="tienda-title">{title}</h2>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
