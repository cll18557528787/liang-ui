import React from 'react'
import {Pull} from '../packages'

const list = ['西瓜','苹果','桃子','橘子','榴莲','葡萄','哈蜜瓜','香蕉','梨','杨桃','李子','石榴']

function List(){
  return(
    <ul>
      {
        list.map(item=>{
          return(
            <li key={item} style={{height:'60px',lineHeight:'60px',textAlign:'center'}}>{item}</li>
          )
        })
      }
    </ul>
  )
}

function handleRefresh(){
  list.sort(function(){
    return Math.random()-0.5
  })
}

function Demo(){
  return(
    <div style={{height:'600px'}}>
      <Pull render={()=><List/>} whiteText={'加载中'} callback={handleRefresh}>

      </Pull>
    </div>
  )
}

export default Demo