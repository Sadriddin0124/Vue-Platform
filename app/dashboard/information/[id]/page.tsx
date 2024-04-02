import React from "react";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";
import { updateUser } from "@/app/lib/userAction";
import { fetchUser } from "@/app/lib/data";

const SingleUserPage = async ({ params }: { params: { id: string } }) => {
  const id = params?.id;
  const user = await fetchUser(id);
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input hidden type="text" name="id" value={user?.id} />
          <label>Title</label>
          <input type="text" defaultValue={user?.title} name="title" />
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows={10}
            placeholder={user?.desc}
            defaultValue={user?.desc}
          ></textarea>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
