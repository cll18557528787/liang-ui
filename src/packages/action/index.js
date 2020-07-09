import React,{useRef,useState,useEffect} from 'react'

function Action(props){

  let {visible,spans,needCancel,actionFuns} = props
  let alerRef = useRef(null)
  let cancelRef = useRef(null)
  let [show,setShow] = useState(false)

  function handleCancel(e){
    if(e.target === alerRef.current || e.target === cancelRef.current){
      setShow(false)
      props.action(false)
    }
  }

  useEffect(()=>{
    setShow(visible)
  },[visible])

  return(
    <div>
      {
        show &&
        <div className="liangActionAlert" onClick={(e)=>{handleCancel(e)}} ref={alerRef}>
          <div className='liangActionBody'>
            <ul>
              {
                spans.map((item,index)=>{
                  if(typeof item !== 'string'){
                    console.error('Array items must be strings')
                    return false
                  }
                  return(
                    <li className='liangActionList' key={item}
                    onClick={()=>{props.actionFuns[index]()}}
                    >{item}</li>
                  )
                })
              }
            </ul>
            {
              needCancel && 
              <div className='liangActionCancel' onClick={(e)=>{handleCancel(e)}} ref={cancelRef}>
                取消
              </div>
            }
          </div>
        </div>
      }
    </div>
  )
}

export default Action