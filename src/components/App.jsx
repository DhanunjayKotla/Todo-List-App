import react, { useState } from 'react';
import Createarea from './Createarea.jsx'
import Todo from './Todo'
import Doing from './Doing'
import Done from './Done'

function App(){

    const todoitem = {
        title: "",
        description: "",
        subtasks: [],
        subtaskcount: 0
    };
    const doingitem = {
        title: "",
        description: "",
        subtasks: [],
        subtaskcount: 0
    };
    const doneitem = {
        title: "",
        description: "",
        subtasks: [],
        subtaskcount: 0
    };

    const [todolist, settodolist] = useState([]);
    const [doinglist, setdoinglist] = useState([]);
    const [donelist, setdonelist] = useState([]);

    var st = 0;

    function additem(formdata){
        var title = formdata.target.title.value;
        var description= formdata.target.description.value;
        var subtasks = [formdata.target.subtask1.value, formdata.target.subtask2.value];
        var status = formdata.target.status.value;

        subtasks.forEach((item)=>{
            if(item!==""){
                st++;
            }
        })

        if(status === 'Todo'){
            todoitem.title = title
            todoitem.description = description
            todoitem.subtasks = subtasks
            todoitem.subtaskcount = st

            settodolist(prevalue => {
                return[...prevalue, todoitem];
            })
        } else if(status === 'Doing'){
            doingitem.title = title
            doingitem.description = description
            doingitem.subtasks = subtasks
            doingitem.subtaskcount = st

            setdoinglist(prevalue => {
                return[...prevalue, doingitem];
            })
        } else{
            doneitem.title = title
            doneitem.description = description
            doneitem.subtasks = subtasks
            doneitem.subtaskcount = st

            setdonelist(prevalue => {
                return[...prevalue, doneitem];
            })
        }
        document.getElementsByClassName('d')[0].style.display = "none";

    }

    function deleteitem(index1, listname){
        if(listname === 'Todo'){
            settodolist(prevvalue => {
                return(prevvalue.filter((item, index) => {
                    return index!==index1;
                }))
            })
        } else if(listname === 'Doing'){
            setdoinglist(prevvalue => {
                return(prevvalue.filter((item, index) => {
                    return index!==index1;
                }))
            })
        } else{
            setdonelist(prevvalue => {
                return(prevvalue.filter((item, index) => {
                    return index!==index1;
                }))
            })
        }
    }

    function additem2(listname, object){
        if(listname === 'Todo'){
            settodolist(prevalue => {
                return[
                    ...prevalue,
                    object
                ]
            })
        } else if(listname === 'Doing'){
            setdoinglist(prevalue => {
                return[
                    ...prevalue,
                    object
                ]
            })
        } else{
            setdonelist(prevalue => {
                return[
                    ...prevalue,
                    object
                ]
            })
        }
    }

    function changeitem(listname, index){
        // console.log(listname, index);
        if(listname === 'todo'){
            const r = $('.ccgtodo:eq('+index+') select').children("option:selected").text();
            const a = todolist.at(index);
            deleteitem(index, 'Todo');
            additem2(r, a);
            $('.cctodo').css("display", "none");
        } else if(listname === 'doing'){
            const r = $('.ccgdoing:eq('+index+') select').children("option:selected").text();
            const a = doinglist.at(index);
            deleteitem(index, 'Doing');
            additem2(r, a);
            $('.ccdoing').css("display", "none");
        } else if(listname === 'done'){
            const r = $('.ccgdone:eq('+index+') select').children("option:selected").text();
            const a = donelist.at(index);
            deleteitem(index, 'Done');
            additem2(r, a);
            $('.ccdone').css("display", "none");
        }
    }

    return(
        <div className='bMc'>
            <Createarea 
                additem={additem}
            />
            <Todo 
                todolist={todolist}
                deleteitem={deleteitem}
                changeitem={changeitem}
            />
            <Doing 
                doinglist={doinglist}
                deleteitem={deleteitem}
                changeitem={changeitem}
            />
            <Done 
                donelist={donelist}
                deleteitem={deleteitem}
                changeitem={changeitem}
            />
        </div>
    )
}

export default App;