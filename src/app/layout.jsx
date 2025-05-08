import "./globals.css";

export const metadata = {
  title: "Home | Ali Arif",
  description: "Praised by industry leaders, this portfolio stands out for its exceptional design and flawless execution.",
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
