import React from "react";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Link from "next/link";
import "@/app/ui/dashboard/users/users.module.css"
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchUsers } from "@/app/lib/data";
import { IUserPromise, IVueJS, IVuePromise } from "@/app/types/users";
import { deleteUser } from "@/app/lib/userAction";
const Users = async ({
  searchParams,
}: {
  searchParams: { q: string; page: string };
}) => {
  const query = searchParams?.q || "";
  const page = Number(searchParams?.page) || 1;
  const results: IVuePromise | undefined = await fetchUsers(query, page);
  console.log(results);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search..." />
        <Link href="/dashboard/information/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <div className={styles.cards}>
        {results?.users?.map((item) => {
          return (
            <div className={styles.card}>
              <div>
                <h1 className={styles.title}>{item?.title}</h1>
                <p className={styles.desc}>{item?.desc}</p>
              </div>
              <div className={styles.buttons}>
                <Link href={`/dashboard/information/${item?._id}`}>
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <form action={deleteUser}>
                  <input type="text" hidden name="id" value={item?._id} />
                  <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                  </button>
                </form>
              </div>
            </div>
          );
        })}
      </div>
      <Pagination count={results?.count} />
    </div>
  );
};

export default Users;
