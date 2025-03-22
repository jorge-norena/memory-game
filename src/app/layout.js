import "./globals.css";
import { slackey } from "@/app/ui/fonts"


export const metadata = {
  title: "Memory Game",
  description: "Created By Jorge Norena - Using React and Next",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${slackey.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
