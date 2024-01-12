import { MediaQuery,Card } from '@iftakhar/ui'
import React from 'react'

export default function MainMediaQuery() {
  return (
    <><MediaQuery query='(min-width: 1024px)'>
        <Card className="max-w-[450px] text-center">
            
    <pre>min-width: 1024px</pre>
        <p>if screen width is bigger than 1024px then it will be shown</p>
        </Card>
  </MediaQuery>
  <MediaQuery query='(max-width: 1024px)'>
        <Card className="max-w-[450px] text-center">
    <pre>max-width: 1024px</pre> 
    <p>if screen width is smaller than 1024px then it will be shown</p>
        </Card>
  </MediaQuery></>
  )
}
