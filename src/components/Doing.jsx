import react from 'react';

function Doing(props){

  function pspk(index){
    document.getElementsByClassName('ccdoing')[index].style.display = "flex";
  }
  function rgv(index){
    document.getElementsByClassName('ccdoing')[index].style.display = "none"
  }

  function handleChange(index){
    const v = props.doinglist[index].subtaskcount;
    var i=0;
    document.querySelectorAll('.ccdoing')[index].querySelectorAll('.cce input').forEach((item,ind) => {
      if(item.checked && document.querySelectorAll('.ccdoing')[index].querySelectorAll('.cce p')[ind].innerHTML !== ""){
        document.querySelectorAll('.ccdoing')[index].querySelectorAll('.cce p')[ind].style.textDecoration = 'line-through';
        i++;
      } else{
        document.querySelectorAll('.ccdoing')[index].querySelectorAll('.cce p')[ind].style.textDecoration = 'none';
      }
    })
    document.querySelectorAll('.ccdoing')[index].querySelector('.ccd span').innerHTML = i;
    document.querySelectorAll('.cbdoing')[index].querySelector('.cbb span').innerHTML = v-i;
  } 


  return(
    <div className='c'>
      <div className='ca'>
        <div className='caa caadoing'></div>
        <div className='cab'>DOING <span>({props.doinglist.length})</span></div>
      </div>
      {props.doinglist.map((doinglistitem, index) => {
        return(
          <div>
            <div className='cb cbdoing' onClick={() => {pspk(index)}}>
              <div>
                <div className='cba'>{doinglistitem.title}</div>
                <div className='cbb'><span>{doinglistitem.subtaskcount}</span> of {doinglistitem.subtaskcount} subtasks</div>
              </div>
              <div className='cbc' onClick={(e) => {props.deleteitem(index, 'Doing');e.stopPropagation()}}><i class="fi fi-rs-trash"></i></div>
            </div>
            <div className='cc ccdoing'>
              <div className='cca'>
                <div className='ccMa' onClick={() => {rgv(index)}}>X</div>
                <div className='ccb'>{doinglistitem.title}</div>
                <div className='ccc'>{doinglistitem.description}</div>
                <div className='ccd'>Subtasks (<span>0</span> of {doinglistitem.subtaskcount})</div>
                {doinglistitem.subtasks.map((subtask) => {
                  return(
                    <div className='cce'>
                      <div><input type="checkbox" onChange={() => {handleChange(index)}}></input></div>
                      <div><p>{subtask}</p></div> 
                    </div>
                  )
                })}
                <div className='ccf'>Status</div>
                <div className='ccg ccgdoing'>
                  <select onChange={() => {props.changeitem('doing', index)}}>
                    <option>Doing</option>
                    <option>Todo</option>
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

export default Doing;