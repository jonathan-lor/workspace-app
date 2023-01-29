import Link from 'next/link'

export default function IndexPage() {
  // we want to be able to input the data here at index and have it be passed to boxes
  // we need to be able to pass user input as a prop into a component that can generate array of position and key values
  // can we use a form to do this?
  //state goes top down in react
  // pass state from "child" component form to index.js parent
  // then pass state from index.js to boxes.js
  return (
    <div className="main">
      <h1>Workspace</h1>
      <h2>Tamuhack 2023 CBRE Challenge</h2>
      <Link href="/boxes">Floor Visualization</Link>
    </div>
  )
}
