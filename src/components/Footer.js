import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-center py-6 mt-12">
      © {new Date().getFullYear()} Service Plus. All Rights Reserved.
    </footer>
  );
}
