
function Footer() {
    const currentYear = new Date().getFullYear()
  return (
    <footer className="footer p-10 bg-gray-700 text-primary-content footer-center">
        <div>
            <p>Copyright &copy; {currentYear} Github User Fiender</p>
        </div>
    </footer>
  )
}

export default Footer