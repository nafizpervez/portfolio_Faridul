function sendMail(params) {
    var tempParams = {
        from_name: document.getElementById("fromName").value,
        to_name: document.getElementById("toName").value,
        sub_name: document.getElementById("subject").value,
        message: document.getElementById("msg").value,
        mail_name: document.getElementById("email").value,
    };

    emailjs.send('gmail', 'template_d7hf3de', tempParams)
    .then(function(res){
        console.log("sucess", res.status);
    })
}