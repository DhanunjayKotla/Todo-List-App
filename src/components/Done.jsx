import react from 'react';

function Done(props){

  function pspk(index){
    document.getElementsByClassName('ccdone')[index].style.display = "flex";
  }
  function rgv(index){
    document.getElementsByClassName('ccdone')[index].style.display = "none"
  }

  function handleChange(index){
    const v = props.donelist[index].subtaskcount;
    var i=0;
    document.querySelectorAll('.ccdone')[index].querySelectorAll('.cce input').forEach((item,ind) => {
      if(item.checked && document.querySelectorAll('.ccdone')[index].querySelectorAll('.cce p')[ind].innerHTML !== ""){
        document.querySelectorAll('.ccdone')[index].querySelectorAll('.cce p')[ind].style.textDecoration = 'line-through';
        i++;
      } else{
        document.querySelectorAll('.ccdone')[index].querySelectorAll('.cce p')[ind].style.textDecoration = 'none';
      }
    })
    document.querySelectorAll('.ccdone')[index].querySelector('.ccd span').innerHTML = i;
    document.querySelectorAll('.cbdone')[index].querySelector('.cbb span').innerHTML = v-i;
  } 

  return(
    <div className='c'>
      <div className='ca'>
        <div className='caa caadone'></div>
        <div className='cab'>DONE <span>({props.donelist.length})</span></div>
      </div>
      {props.donelist.map((donelistitem, index) => {
        return(
          <div>
            <div className='cb cbdone' onClick={() => {pspk(index)}}>
              <div>
                <div className='cba'>{donelistitem.title}</div>
                <div className='cbb'><span>{donelistitem.subtaskcount}</span> of {donelistitem.subtaskcount} subtasks</div>
              </div>
              <div className='cbc' onClick={(e) => {props.deleteitem(index, 'Done');e.stopPropagation()}}><i class="fi fi-rs-trash"></i></div>
            </div>
            <div className='cc ccdone'>
              <div className='ccMa'>X</div>
              <div className='cca'>
                <div className='ccMa' onClick={() => {rgv(index)}}>X</div>
                <div className='ccb'>{donelistitem.title}</div>
                <div className='ccc'>{donelistitem.description}</div>
                <div className='ccd'>Subtasks (<span>0</span> 0f {donelistitem.subtaskcount})</div>
                {donelistitem.subtasks.map((subtask) => {
                  return(
                    <div className='cce'>
                      <div><input type="checkbox" onChange={() => {handleChange(index)}}></input></div>
                      <div><p>{subtask}</p></div> 
                    </div>
                  )
                })}    
                <div className='ccf'>Status</div>
                <div className='ccg ccgdone'>
                  <select onChange={() => {props.changeitem('done', index)}}>
                    <option>Done</option>
                    <option>Doing</option>
                    <option>Todo</option>
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

export default Done;