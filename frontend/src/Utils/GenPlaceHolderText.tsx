import React from "react"
import { LoremIpsum } from "lorem-ipsum"

const lorem = new LoremIpsum()

export default function PlaceholderText(num: number = 1): string {
  const loremText = lorem.generateSentences(num) // Generate 5 random sentences.

  return loremText
}
