"use client";

import { Toaster } from "react-hot-toast";

export default function ToasterProvider({ ...props }) {
  return <Toaster {...props} />;
}
