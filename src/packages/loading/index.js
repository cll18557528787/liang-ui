import React from 'react'
import '../iconfont/iconfont.css'

function Loading(props){
  let {type,text,visible} = props
  let icon = type==='type1'?'icon-dengdai-':type==='type2'?'icon-loading':'icon-dengdai-'

  return(
    <div>
      {
        visible &&
        <div className="liangLoading">
          <div className={`liangLoadingIcon iconfont ${icon}`}></div>
          {
            text && 
            <div className="liangLoadingText">{typeof text === 'string' ? text:'加载中'}</div>
          }
        </div>
      }
    </div>
  )
}


export default Loading