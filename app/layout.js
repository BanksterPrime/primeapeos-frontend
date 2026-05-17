export const metadata = {
  title: "Prime Ape OS",
  description: "Frontend Engine",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
