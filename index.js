function submitData(nameInput,emailInput){
    const info = {
        name: nameInput,
        email: emailInput,
    }
    return fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(info),
    })
    .then(response => response.json())
      .then(myFunction => {
          console.log(myFunction)
          const p = document.createElement("p")
          p.textContent = myFunction.id
          p.innerText =`{id: ${myFunction.id}, name: ${myFunction.name}, email: ${myFunction.email}}`
          document.body.appendChild(p)
    })
    .catch((error) =>{
        let message = error.message
        // const p = document.createElement("p")
        // p.innerHTML = message;
        document.body.append(message)
      });
    
    }
    submitData("John", "johnathanthao21@gmail.com")
