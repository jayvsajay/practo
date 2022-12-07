import { useRouter } from "next/router";
import React, { useState } from "react";
import { Register } from "../api/user/userregister";
import axios from "axios";

import { Button, Input, Select, Title, WrapForm, Wrapper } from "../Styled/Signup";
function Signup() {
  const [Firstname, setFname] = useState("");
  const [Lastname, setLname] = useState("");
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [phone,setPhone]=useState(0);
  const [address1,setAddress1]=useState('')
  const [address2,setAddress2]=useState('')
  const [state,setState]=useState('')
  const [country,setCountry]=useState('')
  const [city,setCity]=useState('')
  const [pincode,setPincode]=useState('')
  const [cpassword,setCpassword]=useState('');
  const [type,setType] = useState('')
  const router = useRouter();
  const handleSubmit = async() => {
    let data={Firstname,Lastname,email,phone,address1,address2,state,country,password,pincode,type}
    console.log(data)
    try{
        const response=await axios.post('/api/user/userregister',data)
        if(response.data.status_code===401 || response.data.status_code===400){
            alert(response.data.msg)
        }
        else{
            alert(response.data.msg)
            router.push('/login')
        }
       
    }
    catch(e){
    console.log(e)
    }
  };
  return (
    <Wrapper>
      <Title>Registration page </Title>
      <WrapForm>
      <Input
        type="text"
        name="FirstName"
        placeholder="Enter your First name"
        onChange={(e) => setFname(e.target.value)}
      />
       <Input
        type="text"
        name="LastName"
        placeholder="Enter your Last name"
        onChange={(e) => setLname(e.target.value)}
      />
      <Input
        type="email"
        name="email"
        placeholder="Enter your Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="number"
        name="phonenumber"
        placeholder="Enter your Phone number"
        onChange={(e) => setPhone(e.target.value)}
      />
       <Input
        type="text"
        name="address1"
        placeholder="Enter your name"
        onChange={(e) => setAddress1(e.target.value)}
      />
       <Input
        type="text"
        name="address2"
        placeholder="Enter your Address2"
        onChange={(e) => setAddress2(e.target.value)}
      />
       <Input
        type="text"
        name="state"
        placeholder="Enter your State"
        onChange={(e) => setState(e.target.value)}
      />
       <Input
        type="text"
        name="city"
        placeholder="Enter your City"
        onChange={(e) => setCity(e.target.value)}
      />
      <Input
        type="text"
        name="country"
        placeholder="Enter your Country"
        onChange={(e) => setCountry(e.target.value)}
      />
       <Input
        type="text"
        name="pincode"
        placeholder="Enter your Pincode"
        onChange={(e) => setPincode(e.target.value)}
      />
      <Input
        type="password"
        name="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        type="password"
        name="cpassword"
        placeholder="Confirm password"
        onChange={(e) => setCpassword(e.target.value)}
      />
      <Select onChange={e=>setType(e.target.value)}>
      <option value="" hidden>Type</option>
    <option value="Doctor">Doctor</option>
    <option value="user">User</option>
      </Select>

      <Button onClick={handleSubmit}>Submit</Button>
      </WrapForm>
    </Wrapper>
  );
}

export default Signup;
