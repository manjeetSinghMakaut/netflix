
export const checkValidData = (name,email,password)=>{
    
if (name && ! /^[a-zA-Z-]+$/.test(name)) return "Username is not valid";  
const isEmailValid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

const isPasswordValid =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

if (!isEmailValid) return  "Email is not valid";
if (!isPasswordValid) return  "password is not valid";


return null;

};