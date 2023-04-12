import React, {useRef} from 'react';
import api from '../services/api';

import './New.css';
const LoginPage = () => {

const email = useRef()
const password = useRef()
  // const [email, setEmail] = React.useState('')
  // const [password,setPassword] = React.useState('')

const handleSubmit = async (e)=>{
  e.preventDefault()

  const data = {
    author : email.current.value,
    password : password.current.value
  }

  console.log(data)
  await api.post ('/login', data)
}


return(
    <form id="new-post"  onSubmit={handleSubmit} >
        <input
          ref = {email}
            type="text"
            name="author"
            placeholder="Author Usernames"
        />

        <input
          ref = {password}
            type="password"
            name="password"
            placeholder="Password"
        />



        <button type="submit">Submit</button>
    </form>
);


}



// class LoginPage extends Component {
//
//
//
//
//
//   state = {
//     //  image: null,
//       author: '',
//       password: '',
//       // description: '',
//       // hashtags: '',
//
//   };
//
//   const handleSubmit = async e =>{
//       e.preventDefault();
//
//       const data = new FormData();
//
//       //data.append('image', this.state.image);
//       data.append('author', this.state.author);
//       data.append('password', this.state.password);
//     //  data.append('description', this.state.description);
//       //data.append('hashtags', this.state.hashtags);
//     //  console.log(this.state.author);
//       // sending form data to api and then to our DB
//
//       console.log(data)
//       await api.post ('login', data)
//
//       // after the user hit the submit button, he'll be redirected to the main page (/)
//       this.props.history.push('/');
//   }
//
//
//   // handleImageChange = e =>{
//   //     this.setState({ image: e.target.files[0] });
//   // }
//
//   const handleChange = e => {
//       this.setState({ [e.target.name]: e.target.value })
//   }
//
// render(){
//     return (
//         <form id="new-post"  onSubmit={this.handleSubmit} >
//
//
//             <input
//                 type="text"
//                 name="author"
//                 placeholder="Author Username"
//                onChange={this.handleChange}
//               value={this.state.author}
//             />
//
//             <input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 onChange={this.handleChange}
//                 value={this.state.password}
//             />
//
//
//
//             <button type="submit">Submit</button>
//         </form>
//     );
// }
// }
  export default LoginPage;
