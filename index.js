let upload =  document.getElementById('upload');
upload.addEventListener('change', () => {
    let fr = new FileReader();
    fr.readAsText(upload.files[0]);
    fr.onload = function () {

        let Arr = fr.result.split(/\r?\n|\n/).map(e => {
            return e.split(',');
        });
        let valNo = 0;
        let invalNo = 0;
        let valMail = [];
        Arr.forEach(e => {
            let em = String(e);
            let m = e.map(e => {
            return `<td>${e}</td>`;
            
        });
        let creEle = document.createElement("tr");
        creEle.innerHTML = m;
        if (em != "") {

            if (em.charAt(em.length - 4) == '.') {
                document.querySelector("table#val").appendChild(creEle);
                valMail.push(em);
                valNo = valNo + 1;
                return false;
            }
            else if (em.charAt(em.length - 3) == '.') {
                document.querySelector("table#val").appendChild(creEle);
                valMail.push(em);
                valNo = valNo + 1;
                return false;
            }
            else{
                document.querySelector("table#inval").appendChild(creEle);
                invalNo = invalNo + 1;
                return false;
            }
            
        }
    });
document.querySelector('#valCount').innerHTML = valNo;
document.querySelector('#invalCount').innerHTML = invalNo;
};
});

function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "sukanyachitte28@gmail.com",
        Password: "37A3B7F5CF97D2B6569FBB5E6C9F6AF4160E",
        To: "sukanyachitte28@gmail.com",
        From: "sukanyachitte28@gmail.com",
        Subject: document.querySelector('#subject').value,
        Body: document.getElementById('msg').value
    }).then(
        message => alert(  "mails has been sent successfully, press " + message + " to continue.")
    );
   console.log(document.getElementById('msg').value);
   console.log(document.getElementById('msg').innerHTML);
   console.log(document.getElementById('msg').innerText);
}


