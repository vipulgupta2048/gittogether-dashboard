export default function PresentationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full m-0 p-0 overflow-hidden">
        {children}
      </body>
    </html>
  );
}
