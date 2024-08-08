import React from 'react'
import { FidgetSpinner } from 'react-loader-spinner'
import { Html } from "@react-three/drei"

const Loader = () => {
    return (
        <Html>
            <FidgetSpinner
                visible={true}
                height="80"
                width="80"
                ariaLabel="fidget-spinner-loading"
                wrapperStyle={{}}
                wrapperClass="fidget-spinner-wrapper"
            />
        </Html>
    )
}

export default Loader
