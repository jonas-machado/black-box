import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/themeProvider";
import { BillingProvider } from "@/providers/billingProvider";
import ModalProvider from "@/providers/modalProvider";
import { Toaster } from "sonner";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Black Box",
  description: "Ávato Tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <BillingProvider>
            <ModalProvider>
              {children}
              <Toaster position="top-right" theme="dark" />
            </ModalProvider>
          </BillingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
