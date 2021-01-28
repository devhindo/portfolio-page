
function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "username",
    Password: "password",
    To: 'ahmedhindawi2001@gmail.com',
    From: "you@isp.com",
    Subject: "This is the subject",
    Body: "And this is the body"
  }).then(
    message => alert(message)
  );
}


function myFunction() {
  alert('The video will be available soon');
}

function noMore() {
  alert("New photos will be added soon!");
}