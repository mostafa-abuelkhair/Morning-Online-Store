
const register = async (url, data)=> {

    try{
        const response = await fetch(url, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: data, 
            });

        if (response.status >= 400 && response.status < 600) {
             throw new Error(await response.text());
            }
        else{
            resData = await response.json();
            localStorage.setItem("token", resData.token);
            localStorage.setItem("name", resData.firstName + ' ' + resData.lastName);
            localStorage.setItem("email", resData.email);
            localStorage.setItem("id", resData.id);
            location.href = "shop.html";
        }
    }
    catch(err){
        alert(err);
    }

  };


  const form = document.getElementById("form");

form.addEventListener("submit", ()=>{

    const formData = new FormData(form);

    const data = JSON.stringify(Object.fromEntries(formData));

    register('/register/form',data);
});


globalThis.googleSign = async (response)=>{
    const data = JSON.stringify(response);

    register('/register/google',data);

}