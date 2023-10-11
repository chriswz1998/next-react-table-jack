import React from 'react'
import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox-next'
import { PaletteTree } from './palette'
import { Header } from '@/components/Headers'

const ComponentPreviews = () => {
  return (
      <Previews palette={ <PaletteTree/> }>
        <ComponentPreview path="/Header">
          <Header link={''} linkName={''} title={''}/>
        </ComponentPreview>
        <ComponentPreview
            path="/ComponentPreviews">
          <ComponentPreviews/>
        </ComponentPreview>
      </Previews>
  )
}

export default ComponentPreviews
