export function sendmail() {

    const $ = document.getElementById.bind(document);
    const bodyContent =  {
        "type": "Contact from nguinet.dev",
        "message": $("message").value,
        "contact_name": $("contact_name").value,
        "contact_email": $("contact_email").value,
    };

    let headersList = {
        "Content-Type": "application/json",
        "Accept" : "*/*"
    }
    
    // const api_url = "http://localhost:5001/hotel-les-palmiers/us-central1/claims";
    //const api_url = "https://us-central1-hotelpalmiers.cloudfunctions.net/claims";
    const api_url = "https://us-central1-nguinet-dev.cloudfunctions.net/sendmail";
    
    console.log(`MSG: ${JSON.stringify(bodyContent)} + ${JSON.stringify(headersList)} on ${api_url}`);
    
    fetch(api_url, { 
        method: "POST",
        body: JSON.stringify(bodyContent),
        headers: headersList
    }).then(function(response) {
        return response.text();
    }).then(function(data) {
        console.log(data);
        $("send").style.display = "none";
        $("sent_confirmation").style.display = "block";
        return 10;

    }).catch( function(e) {
        const errorMessage = `🔥🔥 Fetch ${e} 🔥🔥 on ${api_url}`;

        $("send").style.display = "none";
        $("sent_failed").innerHTML += `<br/><small>${errorMessage}</small>`;
        $("sent_failed").style.display = "block";
        console.log(errorMessage);
        return 0;
    })    

    return 1;
}

