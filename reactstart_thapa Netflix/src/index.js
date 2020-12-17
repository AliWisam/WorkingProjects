import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards'
import './index.css'

     


ReactDOM.render( <>
    <h1>List of top 5 Netflix Series in 2020</h1>
    <Card
        imgsrc="https://www.fillmurray.com/640/360"
        title="A Netflix Original Series"
        sname="DARK"
        link="https://www.netflix.com/pk/title/80100172"
    />
        <Card
        imgsrc="https://www.fillmurray.com/640/360"
        title="A Netflix Original Series"
        sname="DARK"
        link="https://www.netflix.com/pk/title/80100172"
    />
    <Card
        imgsrc="https://www.fillmurray.com/640/360"
        title="A Netflix Original Series"
        sname="DARK"
        link="https://www.netflix.com/pk/title/80100172"
    />


</>,  document.getElementById('root')
    );