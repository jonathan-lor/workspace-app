const Problem = () => {
    return (
    <table>
        <thead>
            <tr>
            <th>Team</th>
            <th>Strength</th>
            <th>Preferences</th>
            <th>Tolerated</th>
            <th>No Way</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td id="team">1</td>
                <td>22</td>
                <td>2, 4, 6, 11 </td>
                <td>3, 8, 10</td>
                <td>5, 7, 9</td>
            </tr>
            <tr>
                <td id="team">2</td>
                <td>45</td>
                <td>1, 3, 5</td>
                <td>6, 7, 11</td>
                <td>4, 8, 9, 10</td>
            </tr>
            <tr>
                <td id="team">3</td>    
                <td>34</td>
                <td>1, 2, 11</td>
                <td>7</td>
                <td>4, 5, 6, 8, 9, 10</td>
            </tr>
            <tr>
                <td id="team">4</td>
                <td>51</td>
                <td>10</td>
                <td>1, 3</td>
                <td>2, 5, 6, 7, 8, 9, 11</td>
            </tr>
            <tr>
                <td id="team">5</td>
                <td>11</td>
                <td>1, 2, 3, 4</td>
                <td>9, 10, 11</td>
                <td>6, 7, 8</td>
            </tr>
            <tr>
                <td id="team">6</td>
                <td>37</td>
                <td>7, 10</td>
                <td>1, 8</td>
                <td>2, 3, 4, 5, 9, 11</td>
            </tr>
            <tr>
                <td id="team">7</td>
                <td>42</td>
                <td>1, 2, 3, 4, 5, 6</td>
                <td>10, 11</td>
                <td>8, 9</td>
            </tr>
            <tr>
                <td id="team">8</td>
                <td>16</td>
                <td>1, 10</td>
                <td>2, 4, 11</td>
                <td>3, 5, 6, 7, 9</td>
            </tr>
            <tr>
                <td id="team">9</td>
                <td>29</td>
                <td>1, 5</td>
                <td>2, 10</td>
                <td>3, 4, 6, 7, 8, 11</td>
            </tr>
            <tr>
                <td id="team">10</td>
                <td>56</td>
                <td>2, 6, 7, 11</td>
                <td>4, 5, 8</td>
                <td>1, 3, 9</td>
            </tr>
            <tr>
                <td id="team">11</td>
                <td>49</td>
                <td>1, 4, 5</td>
                <td>2, 3, 6, 7, 9, 10</td>
                <td>8</td>
            </tr>
        </tbody>
        </table>
    );
}

export default Problem;