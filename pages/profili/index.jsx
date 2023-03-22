import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Route() {
  const router = useRouter();
  useEffect(() => {router.push("/")}, []);
}