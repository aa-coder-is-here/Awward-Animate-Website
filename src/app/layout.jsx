import "./globals.css";

export const metadata = {
  title: "Home | Ali Arif",
  description: "We will decide it later",
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
