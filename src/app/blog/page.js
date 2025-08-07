import Blog from "@/modules/blog";
import React from "react";

export const metadata = {
  title: "Gamefi crypto blogs, play to earn updates",
  description: "Suggestion - Gamerge: Play to Earn crypto games in a powerful GameFi ecosystem. Your Web3 gaming platform for rewards, tournaments & immersive Web3 gaming fun!",
  alternates: {
    canonical: "https://gamerge.ai/blog",
  },
};

export default function page() {
  return <Blog />;
}
