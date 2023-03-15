import react from 'react';

function Createarea(props){

  return(
      <div className='d'>
        <form onSubmit={(e) => {props.additem(e);e.target.reset();e.preventDefault()}}>
          <div className='da'>
            <div className='daMa'>X</div>
            <div className='daa'>Add New Task</div>
            <div className='dab'>
                <label>Title</label> <br></br>
                <input type='text' name="title" placeholder='e.g. Take coffee break' required autoFocus></input>
            </div>
            <div className='dac'>
                <label>Description</label> <br></br>
                <textarea name='description' placeholder="e.g. It's always good to take a break. This 15 minute break will recharge the batteries little bit."></textarea>
            </div>
            <div className='dad'>
                <label>Subtasks</label> <br></br>
                <input type='text' name='subtask1' placeholder='e.g. Make coffee'></input>
                <input type='text' name='subtask2' placeholder='e.g. Drink coffee and smile'></input>
            </div>
            <div className='daf'>
                <label>Status</label> <br></br>
                <select name='status'>
                  <option>Todo</option>
                  <option>Doing</option>
                  <option>Done</option>
                </select>
            </div>
            <button className='dag' type="submit">Create Task</button>
          </div>
        </form>
      </div>
  )
}

export default Createarea;
