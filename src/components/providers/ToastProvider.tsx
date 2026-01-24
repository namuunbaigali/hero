"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ToastProvider() {
  return (
    <ToastContainer
      position="top-right"
      newestOnTop
      closeOnClick
      pauseOnHover
      draggable
      limit={5}
      autoClose={3000}
      style={{ top: 16, right: 16 }} // ✅ зай
      toastClassName={() => "ad-toast-wrapper"} // ✅ wrapper-г цэвэрлэнэ
      // bodyClassName={() => "ad-toast-body"}     // ✅ body padding арилгана
    />
  );
}
