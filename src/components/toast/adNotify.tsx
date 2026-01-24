"use client";

import { toast } from "react-toastify";
import AdToast from "./AdToast";

export function adNotify(message: string, title = "Зар мэдээ") {
  return toast(
    ({ toastProps }) => (
      <AdToast
        toastId={toastProps.toastId}
        title={title}
        message={message}
      />
    ),
    {
      icon: false,
      closeButton: false,
      autoClose: 3000,
    }
  );
}
