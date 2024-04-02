import React from 'react'
import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css"
import {addUser} from "@/app/lib/userAction"
const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input type="text" placeholder='title' name='title' required/>
        <textarea name="desc" id="desc" rows={10} placeholder='Address'></textarea>
        <button type='submit' className={styles.button}>Submit</button>
      </form>
    </div>
  )
}

export default AddUserPage
