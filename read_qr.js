//qr code reader
//source: https://medium.com/@johndoan42/how-to-implement-a-qr-code-reader-into-your-react-application-3638e466dc79

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import QrReader from 'react-qr-reader'





//js


class QrContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            result: 'Hold QR Code Steady and Clear to Scan',
        }
        this.handleScan = this.handleScan.bind(this)
    }
    
    handleScan(result){
        this.setState({
            result
        })
    }
    handleError(err){
        console.error(err)
    }

    render(){
        const previewStyle ={
            height: 700,
            width:1000,
            display: 'flex',
            "justify-content": "center"
        }

        const camStyle = {
            display: 'flex',
            justifyContent: "center",
            marginTop: '-50px'
        }

        const textStyle = {
            fontSize: '30px',
            "text-align": 'center',
            marginTop: '-50px'
        }


        var layout = {title: "ECG"};
        // Parse data from this.state.result
        //Plotly.newPlot('myDiv', data, layout, {scrollZoom: true});


        return(
        <React.Fragment>
            <div style = {camStyle}>
                <QrReader
                delay={300}
                style={previewStyle}
                onError={this.handleError}
                onScan={this.handleScan}
                />
            </div>
            <p style = {textStyle}>
                {this.state.result}
                <div id='myDiv'></div>
            </p>
            </React.Fragment>
        )
    }
}

export default QrContainer
