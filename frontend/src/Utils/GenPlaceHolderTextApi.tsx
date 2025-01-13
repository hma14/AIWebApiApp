import React, { useState, useEffect } from "react"

export default function PlaceholderText(num: number = 1): string {
  const [loremText, setLoremText] = useState("")

  useEffect(() => {
    fetch("https://baconipsum.com/api/?type=meat-and-filler&paras=1")
      .then((response) => response.text())
      .then((text) => setLoremText(text))
      .catch((error) => console.error("Error fetching Lorem Ipsum:", error))
  }, [])

  //console.log(loremText);
  return loremText
}
