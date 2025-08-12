import Footer from "../components/Footer"


function EmailLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div>
        {children}
        <Footer />
    </div>
  )
}

export default EmailLayout