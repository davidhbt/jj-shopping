import React, { useState, useEffect } from "react";
import Google_icon from "../assets/Google-icon.png";
import User_icon from "../assets/WebP/User.webp";
import "./Auth.css";
import { toast } from "react-toastify";
import { Auth_cfg } from "../Config/Firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Link } from "react-router-dom";
import { userState } from "../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function CreateAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate()

  const user = useContext(userState)
//   useEffect(() => {
//     if(user != null){
//         navigate('/profile')
//     }
//   },[])

  const handleCreateAccount = async () => {
    toast.info()
    try {
      const usecredntial = await createUserWithEmailAndPassword(Auth_cfg, email, password);
      const user_t = usecredntial.user

      await updateProfile(user_t, {
        displayName: name
      })
      toast.success('Success!')
      navigate('/')
      
    } catch (err) {
      // alert()
      console.log(err);
      toast.error("Uknown Error.");
    }
  };

  return (
    <div className="page">
      <div className="AuthContainer">
        <div className="AuthHeader">
          <img src={User_icon} alt="" className="AuthHImg" />
          <h1 className="AuthHH1">
            Create Account <br />{" "}
            <span style={{ color: "var(--color1)" }}></span>
          </h1>
          {/* <p className='AuthHP'>Who are you?</p> */}
        </div>
        <div className="AuthContent">
          {/* <div className="AuthCLogin">
            <img src={Google_icon} alt="" className="AuthCImg" />
            <h1 className="AuthCH1">Sign in with  <span style={{color: 'var(--color1)'}}>Google</span></h1>
          </div> */}
          <form
            className="AuthCForm"
            onSubmit={(e) => {
              e.preventDefault();
              handleCreateAccount();
            }}
          >
            <div className="AuthCFInputContainer">
              <label className="AuthCFICLabel">Full Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Joe Nigga"
                className="AuthCFIInput"
              />
            </div>
            <div className="AuthCFInputContainer">
              <label className="AuthCFICLabel">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="example@gmail.com"
                className="AuthCFIInput"
              />
            </div>
            <div className="AuthCFInputContainer">
              <label className="AuthCFICLabel">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="must be 8 characters or longer"
                className="AuthCFIInput"
              />
              <Link className="signinoption">Already Have An Account?</Link>
            </div>

            <input type="submit" value="Create Account" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
