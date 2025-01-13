import { css, cx } from "@emotion/css"

export type Styles = {
  root: string
  fullWidth: string
  clear: string
  secondary: string
  primary: string
  text: string
  darkGray: string
  blueBorder: string
  lightBlue: string
  bold: string
  [key: string]: string // Allows additional keys
}

type CSSObject = { [key: string]: string | number }
type StylesInput = {
  [key: string]: CSSObject | ((props: any) => CSSObject)
}

const styler = (styles: StylesInput): ((props?: any) => Styles) => {
  return (props: any = {}) => {
    const wrappedStyles: Styles = {} as Styles

    Object.entries(styles).forEach(([name, value]) => {
      if (typeof value === "function") {
        // If value is a function, call it with props and generate the CSS class
        wrappedStyles[name] = css(value(props) as CSSObject)
      } else {
        // Otherwise, apply static styles and generate the CSS class
        wrappedStyles[name] = css(value as CSSObject)
      }
    })

    return wrappedStyles
  }
}

export { cx }
export default styler
