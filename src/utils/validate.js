import { object, string } from "zod"


export const checkValidate = (inp) => {
    const inputObj = object({
        email:string({required_error:"Email is required"}).email("Invalid Email"),
        password:string({required_error:"Password is required"}).min(6,"Password should be at least 6 characters")
    })

   
    try{
        inputObj.parse(inp)

    }catch(err){
        return err.message
    }
}