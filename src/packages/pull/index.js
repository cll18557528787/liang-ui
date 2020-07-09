import React,{useState} from 'react'

function Pull(props){
  let {whiteText,callback} = props

  let [style,setStyle] = useState({top:'-80px'})
  let [init,setInit] = useState(0)
  let [move,setMove] = useState(0)

  function handleTouch(e){
    e.persist()
    setInit(e.touches[0].clientY)
  }

  function handleTouchMove(e){
    e.persist()
    setMove(e.touches[0].clientY - init)
    if(move >= 0 && move <= 80){
      setStyle({top: '-' + (80-move) + 'px'})
    }else if(move > 80){
      setStyle({top:'0px'})
    }
  }

  function handleTouchEnd(e){
    e.persist()
    if(move >= 0){
      setStyle({top:'-80px'})
      setMove(0)
    }
    if(move >= 60){
      callback()
    }
  }

  return(
    <div className="liangPullWrap" style={{position:'relative',overflowY:'scroll'}}>
      <div className="liangPull" style={style}>
        <div className="liangPullTop">
          {
            whiteText ? <span className="liangPullTopText">{whiteText}</span> : <i className="iconfont icon-dengdai-"></i>
          }
        </div>
        <div className="liangPullMain" onTouchStart={(e)=>{handleTouch(e)}}
          onTouchMove={(e)=>{handleTouchMove(e)}}
          onTouchEnd={(e)=>{handleTouchEnd(e)}}>
          {
            props.render()
          }
        </div>
      </div>
    </div>
  )
}


export default Pull