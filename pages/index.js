import Link from 'next/link'
import Problem from './problem'

const IndexPage = () => {
  return (
    <div>
      <div className="main">
        <h1 id="title">Workspace</h1>
        <h2>Tamuhack 2023 CBRE Challenge</h2>
      </div>
      
      <div class="button">
        <h1>
        <Link href="/boxes">&gt;Floor Visualization</Link>
        <Link href="/solution">&gt;Solution</Link>
        </h1>
      </div>

      <div class="problem">
        <h1>
          Our Problem:
        </h1>
        <h2>
          We want to fill a multi-floor office to the best capacity while also respecting the collaboration preferences of all teams.
        </h2>
        <Problem></Problem>
      </div>
    </div>
  );
}

export default IndexPage;
