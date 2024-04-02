import React from "react";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";
import { fetchProduct } from "@/app/lib/data";
import { updateProduct } from "@/app/lib/productAction";
const SingleProductPage = async ({ params }: { params: { id: string } }) => {
  const id = params?.id;
  const product = await fetchProduct(id);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/user.png" alt="user" fill />
        </div>
        Iphone
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          <input hidden type="text" name="id" value={product?.id} />
          <label>Title</label>
          <input
            type="text"
            placeholder={product?.title}
            name="title"
          />
          <label>Price</label>
          <input
            type="number"
            placeholder={product?.price}
            name="price"
          />
          <label>Stock</label>
          <input
            type="number"
            placeholder={product?.stock}
            name="stock"
          />
          <label>Color</label>
          <input
            type="text"
            placeholder={product?.color}
            name="color"
          />
          <label>Cat</label>
          <select
            name="cat"
            id="cat"
          >
            <option value="kitchen" selected={product?.cat}>
              Kitchen
            </option>
            <option value="computers" selected={!product?.cat}>
              Computers
            </option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows={10}
            placeholder={product?.desc}
          ></textarea>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
