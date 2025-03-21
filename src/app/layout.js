import "./globals.css";


export const metadata = {
  title: "Memory Game",
  description: "Created By Jorge Norena - Using React and Next",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
