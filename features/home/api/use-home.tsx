import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function getHome() {
  const { data } = await axios.get(
    "https://prolog-api.profy.dev/content-page/home"
  );
  return data;
}

export function useHome() {
  return useQuery(["home"], getHome);
}
