import "./globals.css";


export const metadata = {
  title: "Cattus adoption site web ",
  description: "Cattus platforme qui vise à faciliter l'adoption responsable d'animaux de compagnie et beaucoup Autre chose , Cattus",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <html data-theme="cupcake"></html>

      <body >{children}</body>
    </html>
  );
}
