const regex = /\S+@\S+\.\S+/;
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  background: "#707070fd",
  color:"white",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

function send() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  let contact = {
    user_name: name,
    user_email: email,
    message: message,
  };
validation(contact);
}

const validation= async(e)=>{
  
  !e.user_name
    ? Toast.fire({
        title: "El nombre es requerido",
        icon: "error",
      })
    : !e.user_email
    ? Toast.fire({
        title: "Email",
        icon: "error",
      })
    : regex.test(e.user_email) === false
    ? Toast.fire({
        title: "Email invalido",
        icon: "error",
      })
    : !e.message
    ? Toast.fire({
        title: "El Mensaje es requerido",
        icon: "error",
      })
    : sendEmail(e);
    
}

const sendEmail = async (e) => {
emailjs.send(
          "service_lnrgy17",
          "template_6tg2aj7",
            e
        )
        .then(
          (result) => {
            console.log("se envia",result.text);
            Toast.fire({
              title: "Email enviado con exito!",
              icon: "sucess",
            });
          },
          (error) => {
            console.log("sale error",error.text);
          }
        );
};
