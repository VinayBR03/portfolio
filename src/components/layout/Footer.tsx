import { Container } from '../common/Container'

export function Footer() {
  return (
    <footer className="border-t border-theme-border py-8">
      <Container className="text-center">
        <p className="font-nav text-sm text-theme-muted">
          © {new Date().getFullYear()} Built by Vinay B R
        </p>
      </Container>
    </footer>
  )
}
