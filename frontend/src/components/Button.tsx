import React from "react"

interface ButtonProps {
  label: string // Text displayed on the button
  onClick: () => void // Click handler function
  type?: "button" | "submit" | "reset" // Button type
  disabled?: boolean // Disable button
  variant?: "primary" | "secondary" | "danger" // Styling variant
  className?: string // Custom CSS class
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  disabled = false,
  variant = "primary",
  className = "",
}) => {
  // Map variants to CSS classes
  const variantClasses: { [key: string]: string } = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`default-button ${className}`}
    >
      {label}
    </button>
  )
}

export default Button
