"use server"
import { revalidatePath } from "next/cache";
import { User } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";

export const addUser = async(formData: FormData)=> {
    const {title, desc} = Object.fromEntries(formData)
    try {
        connectToDB()
        const newUser = new User({
            title, desc
        })
        await newUser.save()
    } catch (error) {
        console.log(error);
    }
    revalidatePath("/dashboard/information")
    redirect("/dashboard/information")
}
export const updateUser = async(formData: FormData)=> {
    const {id, title, desc} = Object.fromEntries(formData)
    try {
        connectToDB()
        const updateFields = {
            id,title, desc
        }
        await User.findByIdAndUpdate(id, updateFields)
    } catch (error) {
        console.log(error);
    }
    revalidatePath("/dashboard/information")
    redirect("/dashboard/information")
}
export const deleteUser = async(formData: FormData)=> {
    const {id} = Object.fromEntries(formData)
    try {
        connectToDB()
        await User.findByIdAndDelete(id)
    } catch (error) {
        console.log(error);
    }
    revalidatePath("/dashboard/users")
}