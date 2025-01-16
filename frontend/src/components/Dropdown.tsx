import * as React from "react"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import Box from "@mui/material/Box"

interface DropdownProps {
  sx?: object
  onChange: (value: string) => void
}

export const Dropdown: React.FC<DropdownProps> = ({ sx }) => {
  const [value, setValue] = React.useState<string>("")

  const handleChange = (event: SelectChangeEvent<string>) => {
    console.log(event.target.value)
    setValue(event.target.value)
  }

  return (
    <Box sx={sx}>
      <Select
        value={value}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Select an option" }}
        sx={{ width: "200px" }}
      >
        <MenuItem value={0}>
          <em>Choose AI Model</em>
        </MenuItem>
        <MenuItem value={1}>ChatGpt OpenAI</MenuItem>
        <MenuItem value={2}>DeepSeek</MenuItem>
        <MenuItem value={3}>Llama</MenuItem>
      </Select>
    </Box>
  )
}
