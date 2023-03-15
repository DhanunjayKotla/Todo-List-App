import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';

ReactDom.render(<App />, document.getElementById('root'));

const textarea = document.getElementsByClassName('d')[0];
document.getElementsByClassName('ab')[0].onclick = () => {
    textarea.style.display = "flex"
}
document.getElementsByClassName('daMa')[0].onclick = () => {
    textarea.style.display = "none"
}
