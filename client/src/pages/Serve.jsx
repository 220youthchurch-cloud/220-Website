import React from 'react'

import PageHeader from '../components/common/PageHeader'
import Quote from '../components/common/Quote'

const Serve = () => {
  return (
    <>
      <PageHeader
        title='Serving in 220'
        description={
          <Quote
            quote="As each has received a gift, use it to serve one another, as good stewards of God's varied grace."
            reference="1 Peter 4:10"
          />
        }
      />
    </>
  )
}

export default Serve