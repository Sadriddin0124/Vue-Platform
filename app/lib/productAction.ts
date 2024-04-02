"use server"
import { revalidatePath } from "next/cache";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import { Product } from "./models";

export const addProduct = async(formData: FormData)=> {
    const {title, desc, stock, price, cat, color} = Object.fromEntries(formData)
    try {
        connectToDB()
        const newUser = new Product({
            title, desc, stock, cat, price, color
        })
        await newUser.save()
    } catch (error) {
        console.log(error);
    }
    revalidatePath("/dashboard/products")
    redirect("/dashboard/products")
}
export const updateProduct = async(formData: FormData)=> {
    const {id, title, desc, stock, cat, price, color} = Object.fromEntries(formData)
    try {
        connectToDB()
        const updateFields = {
            id, title, desc, stock, cat, price, color
        }
        await Product.findByIdAndUpdate(id, updateFields)
    } catch (error) {
        console.log(error);
    }
    revalidatePath("/dashboard/products")
    redirect("/dashboard/products")
}
export const deleteProduct = async(formData: FormData)=> {
    const {id} = Object.fromEntries(formData)
    try {
        connectToDB()
        await Product.findByIdAndDelete(id)
    } catch (error) {
        console.log(error);
    }
    revalidatePath("/dashboard/products")
}