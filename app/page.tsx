import Link from 'next/link'

export default function Home() {
  return (
    <main className="container">
      <h1>Welcome to the Next.js App</h1>
      <p>This was migrated from a React Router application</p>
      <div>
        <Link href="/about">About</Link>
      </div>
    </main>
  )
}
