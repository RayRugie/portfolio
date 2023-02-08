import React from 'react'
import Lottie from 'lottie-react'

const Service = ({ service }) => {
  const {id, serviceName, animation} = service;
  return (
    <div>
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
  <Lottie animationData={animation} loop={true} />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{serviceName}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Service