import React from "react"
import styler, { cx, Styles } from "@styler/styler"
import { colors } from "@styler/theme"
import { PropsInput } from "../styles/styler"

const styles = styler({
  root: {
    fontFamily: "inherit",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 32,
    paddingRight: 32,
    borderRadius: "20px",
    cursor: "pointer",
    border: "none",
    color: colors.darkGray,
    fontSize: 16,
    fontWeight: 500,
    width: "auto",
  },
  /*   dynamicStyle: (props: PropsInput): React.CSSProperties => ({
    background: props.color || "blue",
    color: props.textColor || "white",
  }),
 */
  fullWidth: {
    width: "100%",
  },
  clear: {
    background: "#fff",
    color: "#4a4a4a",
  },
  secondary: {
    background: colors.darkGray,
  },
  primary: {
    background: colors.lightBlue,
  },
  text: {
    background: "transparent",
    border: "none",
    padding: 5,
    fontWeight: 600,
    fontSize: 16,
  },
  darkGray: {
    background: colors.darkerLightBlue,
    fontWeight: 600,
    border: "none",
    width: 221,
    height: 42,
    fontSize: 16,
  },
  blueBorder: {
    background: "#fff",
    border: "solid 2px #7bd7df",
    fontWeight: 500,
    fontSize: 16,
    color: colors.darkGray,
    padding: "10px 0px",
  },
  lightBlue: {
    background: colors.lightBlue,
    border: "solid 2px #7bd7df",
    padding: "10px 0px",
    fontSize: 16,
    fontWeight: 500,
  },
  bold: {
    fontWeight: "bold",
  },
})

type ButtonProps = {
  buttonType?:
    | "primary"
    | "secondary"
    | "clear"
    | "text"
    | "darkGray"
    | "blueBorder"
    | "lightBlue"
  bold?: boolean
  fullWidth?: boolean
  classes?: string
  children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button2: React.FC<ButtonProps> = ({
  buttonType = "primary",
  fullWidth = false,
  bold = true,
  classes,
  children,
  ...props
}) => {
  return (
    <button
      type="button"
      className={cx(
        styles(buttonType).root,
        styles(buttonType)[buttonType],
        { [styles(buttonType).fullWidth]: fullWidth },
        { [styles(buttonType).bold]: bold },
        classes
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button2
