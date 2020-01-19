import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'


const CenterLoading = () => {
  return (
    <Dimmer>
      <Loader>Loading</Loader>
    </Dimmer>
  )
}

export default CenterLoading;
