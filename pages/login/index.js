import axios from 'axios';
import React,{useState} from 'react'
import { Button, Input, Title, Wrapper } from '../Styled/Signup'

function  Login() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const handleLogin = async() => {
        let data = {email,password};
        try{
          const resp = await axios.post('/api/user/loginuser',data)
        } catch(e){
         alert("Wrong password or email")
        }
    }
  return (
    <Wrapper> 
        <Title>SignIn to Practo</Title>
        
        <Input
        type="email"
        name="email"
        placeholder="Enter your Email"
        onChange={(e) => setEmail(e.target.value)}
      />
       <Input
        type="password"
        name="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />

<Button onClick={handleLogin}>Submit</Button>
    </Wrapper>
  )
}

export default Login 