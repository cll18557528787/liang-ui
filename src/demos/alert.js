import React,{useState} from 'react';
import {Alert} from '../packages'

function Demo() {
  let [visible,setVisible] = useState(false)

  function changeVisible(bool){
    setVisible(bool)
  }

  function handleConfirm(content){
    console.log(content)
  }

  function handleCancel(content){
    console.log(content)
  }

  return (
    <div className="App">
      <button onClick={()=>{changeVisible(true)}} style={{height:'50px',fontSize:'30px'}}>点击显示Alert</button>
      {/* <Alert type="prompt" 
        visible={visible} 
        changeVisible={changeVisible} 
        handleConfirm={handleConfirm}
        handleCancel={handleCancel}
        title='请问你多大'
      ></Alert> */}

      <Alert type="alert" 
        visible={visible} 
        changeVisible={changeVisible} 
        handleConfirm={handleConfirm}
        title='标题'
        meaasge='这是一条信息'
      ></Alert>

      {/* <Alert type="confirm" 
        visible={visible} 
        changeVisible={changeVisible} 
        handleConfirm={handleConfirm}
        handleCancel={handleCancel}
        title='标题'
        meaasge='这是一条信息'
      ></Alert> */}
    </div>
  );
}

export default Demo;