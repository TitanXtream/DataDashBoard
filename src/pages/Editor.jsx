import React from 'react'
import {HtmlEditor,Inject,Image,Link,QuickToolbar,RichTextEditorComponent,Toolbar} from '@syncfusion/ej2-react-richtexteditor'

import {EditorData} from '../data/dummy'

import {Header} from '../components'
const Editor = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 rounded-3xl bg-white'>
    <Header category="Page" title="Editor"/>
    <RichTextEditorComponent>
      <EditorData/>
      <Inject services={[HtmlEditor,QuickToolbar,Toolbar,Image,Link]} />
    </RichTextEditorComponent>
    </div>
  )
}

export default Editor