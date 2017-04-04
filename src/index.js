import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import './index.css';
import reducer from './reducers';

const initialState = {
    tracks: ['Smells like spirit',
    'Enter Sandman'],
    playlist: [
        'My home playlist',
        'My work playlist'
    ]
};

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// import { createStore } from 'redux';

// const store = createStore(playlist);

// function playlist(state = [], action) {
//     if (action.type === 'ADD_TRACK') {
//         return [
//             ...state,
//             action.payload
//         ];
//     }
//     return state;

// }

// const addTrackBtn = document.querySelectorAll('.addTrack')[0];
// const trackInput = document.querySelectorAll('.trackInput')[0];
// const list = document.querySelectorAll('.list')[0];


// store.subscribe(() => {
//     console.log('subscribe', store.getState());
//     list.innerHTML = '';
//     trackInput.value = '';
//     store.getState().forEach(track => {
//         const li = document.createElement('li');
//         li.textContent = track;
//         list.appendChild(li);
//     });
// });


// addTrackBtn.addEventListener('click', () => {
//     const trackName = trackInput.value;
//     console.log('tackName', trackName);
// store.dispatch({type: 'ADD_TRACK', payload: trackName});

// })