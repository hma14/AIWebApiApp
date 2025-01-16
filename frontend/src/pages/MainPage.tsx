import React, { Component, useState } from "react"
import axios from "axios"

import { autocompleteClasses, Button, TextField } from "@mui/material"
import ResultDisplay from "../components/ResultDisplay"
import { OutlinedCard, MediaCard } from "../components/Card"
import ResponsiveAppBar from "../components/AppBar"
import { BasicSelect } from "../components/Select"

import { ClassNames } from "@emotion/react"
import { styled } from "@mui/material/styles"
import Grid from "@mui/material/Grid2"

import {
  Container,
  Typography,
  CssBaseline,
  Paper,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material"

import PlaceholderText from "../Utils/GenPlaceHolderTextApi"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}))

const MainPage: React.FC = () => {
  const [userInput, setUserInput] = useState("")
  const [selectedModel, setSelectedModel] = useState("")
  const [result, setResult] = useState("")

  const handleModelChange = (model: string) => {
    setSelectedModel(model)
  }
  const handleSubmit = async () => {
    try {
      const response = await axios.post("/api/process", {
        aiModel: selectedModel,
        message: userInput,
      })
      setResult(response.data.result)
    } catch (error) {
      console.error("Error:", error)
    }
  }

  return (
    <div className="container-fluid">
      <ResponsiveAppBar></ResponsiveAppBar>
      <React.Fragment>
        <CssBaseline />
        <Container
          maxWidth={false}
          sx={{ width: "100%", bgcolor: "#f5f5f5", height: "100%" }}
        >
          <Grid container spacing={2}>
            <Grid size={2}>
              <BasicSelect
                value={selectedModel}
                sx={{ mt: 5, width: "100%", mr: 1 }}
                label="Choose an AI Model"
                onChange={handleModelChange}
              >
                children=
                {["GPT_4O", "DEEPSEEK_CHAT", "LLAMA"].map((key, index) => (
                  <MenuItem key={index} value={key}>
                    {key}
                  </MenuItem>
                ))}
              </BasicSelect>
            </Grid>
            <Grid size={8}>
              <TextField
                id="outlined-basic"
                label="Enter your prompt"
                variant="outlined"
                onChange={(e) => setUserInput(e.target.value)}
                sx={{ width: "100%", mt: 5, mr: 1 }}
                multiline
                maxRows={4}
              />
            </Grid>
            <Grid size={2}>
              <Button
                color="primary"
                onClick={handleSubmit}
                variant="contained"
                sx={{ width: "100%", mt: 5, mb: 5, mr: 5 }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>

          {/* Header Text */}
          <Typography variant="h4" component="h1" gutterBottom>
            Result
          </Typography>
          <ResultDisplay
            content={result}
            style={{
              backgroundColor: "#fcfcfc", // Background color
              width: "100%", // Width
              height: "200px", // Height
              border: "2px inset", // Border
              display: "flex", // Flexbox layout
              justifyContent: "left", // Center content horizontally
              alignItems: "left", // Center content vertically
              overflow: "auto",
            }}
          />

          {/* Description */}
          <Typography variant="body2" gutterBottom>
            {PlaceholderText(1)}
          </Typography>

          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid size={3}>
              <OutlinedCard></OutlinedCard>
            </Grid>
            <Grid size={3}>
              <MediaCard
                title="/images/lorem_photo_01.jpg"
                imagePath={"/images/lorem_photo_01.jpg"}
              ></MediaCard>
            </Grid>
            <Grid size={3}>
              <MediaCard
                title="https://loremflickr.com/"
                imagePath={"https://loremflickr.com/1280/720"}
              ></MediaCard>
            </Grid>
            <Grid size={3}>
              <MediaCard
                title="https://loremflickr.com/"
                imagePath={"https://loremflickr.com/320/240"}
              ></MediaCard>
            </Grid>
          </Grid>

          {/* Buttons */}
          <Box sx={{ display: "flex", gap: 2, marginTop: 2 }}>
            <Button variant="contained" color="primary">
              Action 1
            </Button>
            <Button variant="outlined" color="secondary">
              Action 2
            </Button>
          </Box>

          {/* Custom Box */}
          <Box
            sx={{
              bgcolor: "#cfe8fc",
              height: "200px",
              width: "100%",
              marginTop: 4,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography>Custom Box inside Container</Typography>
          </Box>
        </Container>
      </React.Fragment>
    </div>
  )
}

export default MainPage
