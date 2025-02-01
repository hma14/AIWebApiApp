import React from "react"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"

import {
  red,
  pink,
  purple,
  deepPurple,
  indigo,
  blue,
  lightBlue,
  cyan,
  teal,
  green,
  lightGreen,
  lime,
  yellow,
  amber,
  orange,
  deepOrange,
  brown,
  grey,
  blueGrey,
} from "@mui/material/colors"

interface ResultDisplayProps {
  content: string | JSX.Element
  title?: string
  style?: React.CSSProperties
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({
  title,
  content,
  style,
}) => {
  return (
    <div className="container">
      <div
        className="card"
        style={{
          border: "1px solid #ddd",
          borderRadius: "5px",
          padding: "15px",
          backgroundColor: blueGrey[100], //"#f9f9f9",
          ...style,
        }}
      >
        <div className="card-body">
          {title && (
            <h2
              className="card-title"
              style={{
                margin: "0 0 10px 0",
                fontSize: "18px",
                color: blueGrey[500],
              }}
            >
              {title}
            </h2>
          )}
          {Array.isArray(content) ? (
            content.map((item, index) => (
              <div className="card-text" key={index}>
                {index + 1}: {item}
              </div>
            ))
          ) : (
            <div
              className="card-text"
              style={{ fontSize: "16px", color: green[500] }}
            >
              {content}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ResultDisplay
