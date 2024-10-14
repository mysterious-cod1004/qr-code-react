import { useState } from "react";
import QRCode  from "react-qr-code";
export default function QRgenerator(){
    const [qr,setqr]=useState("");
    const [input,setinput]=useState("");
    function handleGenerateQRcode(){
        setqr(input);
    }
    return(
<div align="center">
    <h1>QR Code Generator</h1>
    <div >
        <input onChange={(e)=>setinput(e.target.value)} name="qr-code" type="text" placeholder="Enter text here" />
        <buttton disable={input && input.trim()!==''?false:true} onClick={handleGenerateQRcode}>Generate</buttton>
    </div>
    <div>
        <QRCode
          id="qr-code-value" value={qr} size={400} bgColor="#fff"
        />
    </div>
</div>
    );
}
