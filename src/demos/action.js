import React,{useState} from 'react'
import {Action} from '../packages'

function Demo(){
  let [visible,setVisible] = useState(false)

  function handleAction(bool){
    setVisible(bool)
  }

  function action1(){
    console.log('拍照')
  }

  function action2(){
    console.log('选取')
  }

  return(
    <div>
      <button onClick={()=>{handleAction(true)}} style={{height:'50px',fontSize:'30px'}}>显示action</button>
      <Action visible={visible} 
      spans={['拍照','相册选择']}
      needCancel={true} 
      action={()=>{handleAction()}}
      actionFuns={[action1,action2]}
      >

      </Action>
    </div>
  )
}

export default Demo