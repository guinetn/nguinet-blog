export default function getCurrentTimestamp() {
    document.querySelector("#currentTimestamp").value = Math.floor(new Date().getTime()/1000.0);
}

export function timestampDecode() {
    document.querySelector("#timestampDecoded").innerText = (new Date(1000*document.querySelector("#timestampToDecode").value)).toISOString();
}

export function timestampEncode() {
    document.querySelector("#timestampEncoded").innerText = Date.parse( document.querySelector("#timestampToEncode").value)/1000;
}

export function tools_init() {
    document.querySelector("#currentTimestamp").value = Math.floor( new Date().getTime() / 1000.0 );
    document.querySelector("#timestampToDecode").value = Math.floor( new Date().getTime() / 1000.0 );
    document.querySelector("#timestampToEncode").value = new Date().toISOString(); 
}