import * as React from "react"

import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material"

interface BasicSelectProps {
  value: string
  sx?: object
  onChange: (value: string) => void
  children: React.ReactNode // Menu items passed as children
  label?: string // Add a prop for the label
}

export const BasicSelect: React.FC<BasicSelectProps> = ({
  value,
  sx,
  onChange,
  children,
  label,
}) => {
  const handleChange = (event: SelectChangeEvent<string>) => {
    onChange(event.target.value)
  }

  return (
    <Box sx={sx}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={label}
          onChange={handleChange}
        >
          {children} {/* Render menu items passed from the parent */}
        </Select>
      </FormControl>
    </Box>
  )
}
