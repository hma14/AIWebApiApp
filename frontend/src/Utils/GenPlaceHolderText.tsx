import React from "react"
import { LoremIpsum } from "lorem-ipsum"

const lorem = new LoremIpsum()

export default function PlaceholderText(num = 1): string {
  return lorem.generateSentences(num)
}
