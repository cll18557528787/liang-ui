import React,{useState} from 'react';
import {Message} from '../packages'

function Demo(){

  let [visible,setVisible] = useState(false)

  function changeVisible(bool){
    setVisible(bool)
    setTimeout(()=>{
      setVisible(false)
    },1500)
  }

  return(
    <div>
      <button onClick={()=>{changeVisible(true)}} style={{height:'50px',fontSize:'30px'}}>点击显示Message</button>
      <Message visible={visible} message='自定义消息' iconType="success" position='bottom'></Message>
    </div>
  )
}

export default Demo