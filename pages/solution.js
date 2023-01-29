import Link from 'next/link'

const SolutionPage = () => {
    return (
        <div>
            <h1>Floor Visualization</h1>
            <Link href="/">Back to Landing Page</Link>
            <div class="solutionWrapper">
            <ol>
                <li>First floor: Teams 9 & 5</li>
                <li>Second floor: Teams 7 & 6</li>
                <li>Third floor: Teams 8 & 10</li>
                <li>Fourth floor: Team 4</li>
                <li>Fifth floor: Teams 2 & 11</li>
            </ol>
            </div>
        </div>

    )
}

export default SolutionPage;