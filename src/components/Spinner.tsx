import React from 'react'

import { Spin } from 'antd';

const Spinner = () => {
  return (
    <div className="center">
      <Spin style={{color: '#333'}} tip="Loading..." />
    </div>
  )
}

export default Spinner;