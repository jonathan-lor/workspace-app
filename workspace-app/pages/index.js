import Link from 'next/link'

export default function IndexPage() {
  return (
    <div className="main">
      <h1>Workspace</h1>
      <h2>Tamuhack 2023 CBRE Challenge</h2>
      <Link href="/boxes">Floor Visualization</Link>
    </div>
  )
}
