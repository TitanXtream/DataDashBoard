import React from 'react'
import {ChartComponent,SeriesCollectionDirective,SeriesDirective,Inject,Legend,Category,StackingColumnSeries,Tooltip} from '@syncfusion/ej2-react-charts'

import {useStateContext} from '../../context/ContextProvider'

import {stackedCustomSeries,stackedPrimaryXAxis,stackedPrimaryYAxis} from '../../data/dummy'
import { rgbToHex } from '@syncfusion/ej2/treemap'

import { GradientColor } from '@syncfusion/ej2/heatmap'

const Stacked = ({width,height}) => {

  const palette = [`linear-gradient(to right, rgb(10,10,10),rgb(20,20,20))`, "rgb(150,0,250)", "rgb(250,200,255)", "green"]
  const {currentMode} = useStateContext();

  return (
    <ChartComponent
    width={width}
    height={height}
    id="charts"
    primaryXAxis={stackedPrimaryXAxis}
    primaryYAxis={stackedPrimaryYAxis}
    chartArea={{border: {width : 10,color:'rgb(50,0,255)'}}}
    tooltip={{enable: true,fill:'red',textStyle:{color:"white"}}}
    legendSettings={{background: "white"}}
    palettes={palette}
    background={currentMode === 'Dark' ? '#33373E' : '#fff'}
    >
      <Inject services={[Legend,Category,StackingColumnSeries,Tooltip]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item,index) => <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Stacked