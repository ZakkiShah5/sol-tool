import "./globals.css";


export const metadata = {
  title: "Sol tool",
  description: "Developed by Zakki",
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
