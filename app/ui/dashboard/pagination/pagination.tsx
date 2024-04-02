"use client"
import React from "react";
import styles from "./pagination.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Pagination = ({ count }: { count: number | undefined }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams ? searchParams : "");
  const page = Number(params.get("page")) || 1
  const ITEM_PER_PAGE = 3
  const hasPrev = ITEM_PER_PAGE * (page - 1) > 0
  const hasNext = ITEM_PER_PAGE * (page - 1) + ITEM_PER_PAGE < Number(count)
  const handleChangePage =(type: string)=> {
    type === "prev" ? params.set("page", (page - 1).toString()) : params.set("page", (page + 1).toString())
    replace(`${pathname}?${params}`)
  }
  return (
    <div className={styles.container}>
      <IconButton aria-label="delete" disabled={!hasPrev} onClick={()=>handleChangePage("prev")}>
        <ArrowBackIosIcon className="text-white"/>
      </IconButton>
      <h1 className="text-[26px]">{page}</h1>
      <IconButton aria-label="delete" disabled={!hasNext} onClick={()=>handleChangePage("next")}>
        <ArrowForwardIosIcon className="text-white"/>
      </IconButton>
    </div>
  );
};

export default Pagination;
