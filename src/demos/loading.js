import React,{useState} from 'react';
import {Loading} from '../packages'

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
      <button onClick={()=>{changeVisible(true)}} style={{height:'50px',fontSize:'30px'}}>点击显示Loading</button>
      <Loading visible={visible} type='type2' text={'处理中'}></Loading>
    </div>
  )
}

export default Demo