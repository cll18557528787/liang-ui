import React,{useEffect,useState,useRef} from 'react'
import '../iconfont/iconfont.css'

function Message(props){
  let {message,iconType,position,visible} = props
  const elRef = useRef(null)
  const [height,setHeight] = useState(112)

  useEffect(()=>{
    if(visible){
      setHeight(elRef.current.clientWidth)
    }
  },[visible])

  let classStyle = position === 'bottom' || position === 'top' || position === 'center' ? 'liangTip' + position : 'liangTipcenter'
  let icon = iconType==='success'?'icon-chenggong1':iconType==='error'?'icon-Group-':''

  return(
    <div>
      {
        visible &&
        <div className={`liangTip ${classStyle}`}>
          {
            icon &&
            <div className={`liangTipIcon iconfont ${icon}`} style={{height:height-37+'px'}}></div>
          }
          <div className='liangTipMsg' ref={elRef}>{message?message:'提示信息'}</div>
        </div>
      }
    </div>
  )
}

export default Message