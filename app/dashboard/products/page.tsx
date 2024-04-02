import Search from "@/app/ui/dashboard/search/search";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchProducts } from "@/app/lib/data";
import { deleteProduct } from "@/app/lib/productAction";
const Products = async ({
  searchParams,
}: {
  searchParams: { q: string; page: string };
}) => {
  const query = searchParams?.q || "";
  const page = Number(searchParams?.page) || 1;
  const result = await fetchProducts(query, page);
  console.log(result);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {result?.products?.map((item, index) => (
            <tr key={index}>
              <td>
                <div className={styles.user}>
                  <Image src="/user.png" alt="product" width={40} height={40} className={styles.userImage}/>
                  {item?.title}
                </div>
              </td>
              <td>{item?.desc}</td>
              <td>{item?.price}</td>
              <td>{item?.createdAt?.toString()?.slice(4,16) || "23.02.2024"}</td>
              <td>{item?.stock}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/products/${item?._id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteProduct}>
                    <input type="text" name="id" value={item?._id} hidden/>
                  <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                  </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={result?.count}/>
    </div>
  );
};

export default Products;
