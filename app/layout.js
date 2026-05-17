export const metadata = {
  title: "Prime Ape OS",
  description: "Frontend for Prime Ape OS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
