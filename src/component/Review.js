import React from 'react'

function Review({ data }) {
    return (
        <div>
            {
                data.map(item => (
                    <div>
                        <h6>{item.name}</h6>
                        <h6>{item.rating}</h6>
                        <h6>{item.date}</h6>
                        <h6>{item.comments}</h6>
                    </div>
                ))
            }
        </div>
    )
}

export default Review
