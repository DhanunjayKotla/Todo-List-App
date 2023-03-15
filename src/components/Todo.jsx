import react, { useState } from 'react';

function Todo(props){

  function pspk(index){
    document.getElementsByClassName('cctodo')[index].style.display = "flex";
  }
  function rgv(index){
    document.getElementsByClassName('cctodo')[index].style.display = "none"
  }

  function handleChange(index){
    const v = props.todolist[index].subtaskcount;
    var i=0;
    document.querySelectorAll('.cctodo')[index].querySelectorAll('.cce input').forEach((item,ind) => {
      if(item.checked && document.querySelectorAll('.cctodo')[index].querySelectorAll('.cce p')[ind].innerHTML !== ""){
        document.querySelectorAll('.cctodo')[index].querySelectorAll('.cce p')[ind].style.textDecoration = 'line-through';
        i++;
      } else{
        document.querySelectorAll('.cctodo')[index].querySelectorAll('.cce p')[ind].style.textDecoration = 'none';
      }
    })
    document.querySelectorAll('.cctodo')[index].querySelector('.ccd span').innerHTML = i;
    document.querySelectorAll('.cbtodo')[index].querySelector('.cbb span').innerHTML = v-i;
  } 


  return(
    <div className='c'>
      <div className='ca'>
        <div className='caa caatodo'></div>
        <div className='cab'>TODO <span>({props.todolist.length})</span></div>
      </div>
      {props.todolist.map((todolistitem, index) => {
        return(
          <div>
            <div className='cb cbtodo' onClick={() => {pspk(index)}}>
              <div>
                <div className='cba'>{todolistitem.title}</div>
                <div className='cbb'><span>{todolistitem.subtaskcount}</span> of {todolistitem.subtaskcount} subtasks</div>
              </div>
              <div className='cbc' onClick={(e) => {props.deleteitem(index, 'Todo');e.stopPropagation()}}><i class="fi fi-rs-trash"></i></div>
            </div>
            <div className='cc cctodo'>
              <div className='cca'>
                <div className='ccMa' onClick={() => {rgv(index)}}>X</div>
                <div className='ccb'>{todolistitem.title}</div>
                <div className='ccc'>{todolistitem.description}</div>
                <div className='ccd'>Subtasks (<span>0</span> of {todolistitem.subtaskcount})</div>
                {todolistitem.subtasks.map((subtask) => {
                  return(
                    <div className='cce'>
                      <div><input type="checkbox" onChange={() => {handleChange(index)}}></input></div>
                      <div><p>{subtask}</p></div> 
                    </div>
                  )
                })} 
                <div className='ccf'>Status</div>
                <div className='ccg ccgtodo'>
                  <select onChange={() => {props.changeitem('todo', index)}}>
                    <option>Todo</option>
                    <option>Doing</option>
                    <option>Done</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )

}

export default Todo;