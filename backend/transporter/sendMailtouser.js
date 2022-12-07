// const transporter=require('./transporter')
// const config=require('../config')

// function sendUsermail(body){
//   const mailOptions={
//     from:`The mail testing <${config.user}>`,
//     to:body.email,
//     subject:"Atesting mail",
//     html:`<h3>${body.first_name}</h3>`
//   }
  
//     transporter.sendMail(mailOptions,function(error,result){
//       if(error){
//           console.log('Error',error)
//       }else{
//           console.log("Success",result)
//       }
//       transporter.close()
//     })
// }
// module.exports=sendUsermail