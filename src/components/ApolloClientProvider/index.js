"use client";
import client from "@/graphql/graphQLClient";
import { ApolloProvider } from "@apollo/client";
import React from "react";

export default function ApolloClientProvider({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
