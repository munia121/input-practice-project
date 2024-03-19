import { useState } from "react";

const Registration = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmit, setIsSubmit] = useState(false)
    const [isChecked, setIsChecked] = useState(false)


    // console.log({name:name, email:email,  password:password})


    const handleSubmit =(event) =>{
        event.preventDefault()
        if(!isChecked){
            return;
        }

        const user = {
            name: name,
            email: email,
            password:password
        }
        console.log(user)
        setIsSubmit(true)
    }


    return (
        <div className="h-screen w-full flex items-center justify-center bg-fuchsia-300">
            <form onSubmit={(event)=>handleSubmit(event)}  className="w-2/3 lg:w-2/5 bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-4xl mb-6 text-purple-400 text-center">Signup Form</h1>

                <label className="mb-2 text-lg font-bold">Name</label>
                <input type="text" 
                onChange={(event) =>setName(event.target.value)}
                placeholder="Enter Your name"
                className="py-2 px-1 border-2 border-solid border-gray-400 w-full rounded text-lg mb-3"
                required
                />


                <label className="mb-2 text-lg font-bold">Email</label>
                <input type="Email" 
                onChange={(event) =>setEmail(event.target.value)}
                placeholder="Enter Your Email"
                className="py-2 px-1 border-2 border-solid border-gray-400 w-full rounded text-lg mb-3"
                required
                />


                <label className="mb-2 text-lg font-bold">Password</label>
                <input type="Password" 
                onChange={(event) =>setPassword(event.target.value)}
                placeholder="Enter Your Password"
                className="py-2 px-1 border-2 border-solid border-gray-400 w-full rounded text-lg mb-3"
                required
                />
                <input type="checkbox" onChange={(event) =>setIsChecked(event.target.checked)} />Do you agree with out terms and conditions?

                <div className=" flex justify-end mt-3">
                    <button
                    type="Submit"
                    className="bg-purple-500 border h-12 w-20 text-xl text-white rounded"
                    >SignUp</button>
                </div>

            </form>

            {
                isSubmit && <div className="fixed top-0 flex items-center justify-center h-screen w-full bg-purple-300">
                <div className="w-1/2 h-1/2 rounded bg-purple-200 text-center">
                   <h1>You are submited the from successfully</h1>
                   <p>name: {name}</p>
                   <p>name: {email}</p>
                   <p>name: {password}</p>
                </div>
            </div>
            }
        </div>
    );
};

export default Registration;