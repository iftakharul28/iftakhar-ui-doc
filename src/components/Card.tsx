import React from 'react'
import { Card } from '@iftakhar/ui';

export default function MainCard() {
  return (<Card className="max-w-[450px]" title='Card title' footer={
    <div>Card footer</div>}>
  <p>Apple Watch Ultra 2 with Alpine Loop GPS + Cellular</p>
  <p>
    The Apple Watch Ultra 2 with Alpine Loop GPS + Cellular embodies innovation and style with its solid Titanium build. Its Alpine loop design not only lends a sporty aesthetic but also ensures
    durability, marrying style with ruggedness. With cellular connectivity, you're always connected on the go. Plus, it excels in precise health and workout monitoring, delivering real-time
    insights. The watch boasts a long-lasting battery, ensuring uninterrupted service for all your needs. It's a blend of elegance, performance, and resilience, making it an ideal companion for
    modern lifestyles.
  </p>
  </Card>
  )
}
