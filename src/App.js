import './App.css';
import { useState } from 'react';




function App() {

const [eye,setEmail] = useState(false)

const [password,setPass] = useState("")


  return (
    <div className="app">
      <form action="#">
        <img src="https://assets.turbologo.com/blog/en/2019/09/19084953/instagram-logo-illustration.png" alt="" className='icon_ing'/>
        <div className="email">
          <input type="text" />
        </div>
        <div className="password">
          <input onChange={(e)=> setPass(e.target.value)} type={eye ? "text" : "password"}/>
          <div onClick={()=> setEmail(!eye)} className='click'> 
          {
            eye ? "Не показывать" : "Показать"
          }
          </div>
        </div>
        <button className='sub'>Войти</button>

          <span className='mar'>ИЛИ</span>

          <div className="face">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png" alt="" />
            <span>Войти через Facebook</span>
          </div>

          <div className="forgot">
            <span>Забыли пароль?</span>
          </div>
        
      </form>

    </div>
  );

}

export default App;