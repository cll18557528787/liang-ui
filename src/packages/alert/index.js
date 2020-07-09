import React,{useState} from 'react'

function Alert(props){
  let {type,visible,changeVisible,handleConfirm,handleCancel,title,meaasge} = props

  let [content,setContent] = useState('')

  function confirm(content){
    changeVisible(false)
    handleConfirm(content)
  }

  function cancel(content){
    changeVisible(false)
    handleCancel(content)
  }

  function handleChange(e){
    setContent(e.target.value)
  }

  return(
    <div>
      { 
        visible &&
        <div className="liangAlert">
          {
            type === 'alert' &&
            <div className="liangAlertContent">
              <div className="liangAlertContentTitle">{title?title:'提示'}</div>
              <div className="liangAlertContentMsg">{meaasge?meaasge:'这是提示内容'}</div>
              <div className="liangAlertContentBtn" onClick={()=>{confirm()}}>
                确定
              </div>
            </div>
          }
          {
            type === 'confirm' &&
            <div className="liangAlertContent">
              <div className="liangAlertContentTitle">{title?title:'提示'}</div>
              <div className="liangAlertContentMsg">{meaasge?meaasge:'这是提示内容'}</div>
              <div className="liangAlertContentBtns">
                <div onClick={()=>{cancel()}}>取消</div>
                <div onClick={()=>{confirm()}}>确定</div>
              </div>
            </div>
          }
          {
            type === 'prompt' &&
            <div className="liangAlertContent">
              <div className="liangAlertContentTitle">{title?title:'提示'}</div>
              <div className="liangAlertContentMsg">
                <input type="text" value={content} onChange={(e)=>{handleChange(e)}} />
              </div>
              <div className="liangAlertContentBtns">
                <div onClick={()=>{cancel(content)}}>取消</div>
                <div onClick={()=>{confirm(content)}}>确定</div>
              </div>
            </div>
          }
        </div>
      }
    </div>
  )
}

export default Alert