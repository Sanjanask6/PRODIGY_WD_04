        const scriptURL = 'https://script.google.com/macros/s/AKfycbyfzQVQtkhCl3xDp48qH2mvIj4qPmV_ONYDQwIhpvOQqRh0PhZUsU7bu6O4-QswG51BYQ/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg=document.getElementById("msg")
        form.addEventListener('submit', e => {
          e.preventDefault()
          alert("Form submitted. Processing...");
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
              alert("Message sent successfully!");
                // msg.innerHTML="Message Send Successfully"
                // setTimeout(function(){
                //     msg.innerHTML=""
                //     },100)
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
        })
      
