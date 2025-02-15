import Link from "../src/components/Link"

export default function HomePage() {
  return (
    <div>
      <h1>Desenvti cases - Home</h1>
      <Link href={"/faq"}>
        Ir para a pagina do faq
      </Link>
    </div>
  )
}