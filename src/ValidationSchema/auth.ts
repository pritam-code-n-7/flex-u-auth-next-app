import { yupResolver } from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import * as Yup from "yup";


const signupSchema = Yup.object({
    email:Yup.string().email("Please enter valid email address").required("please filled this field")
})

export const SignupValidation= () => useForm({
    resolver:yupResolver(signupSchema)
});
