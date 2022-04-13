import React from 'react';

import { Empty as EmptyEl } from 'antd';


export default function Empty(text: string) {
  return (
    <EmptyEl
    // image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
    // imageStyle={{
    //   height: 60,
    // }}
    description={
      <span>
        {text}
      </span>
    }
  >
  </EmptyEl>
  )
}
