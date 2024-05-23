import React from 'react'
import classes from "./myList.module.css"
import iconItem from "../../assets/main/Rectangle 33.png"

interface MyListProps {
  data: string[]
}

export const MyList = ({data}: MyListProps) => {
  return (
    <div className={classes.productList}>
    {data &&
      data.map((item: string) => (
        <div className={classes.productItem}>
          <img src={iconItem} alt="" />
          <p>{item}</p>
        </div>
      ))}
  </div>
  )
}
