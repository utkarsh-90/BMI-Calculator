const calculateBtn = document.getElementById('calculate')

calculateBtn.addEventListener('click', () => {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;

    const bmi = [weight / (height * height)];
    const myBmi = (bmi*10000).toFixed(0)

    const showResult = document.getElementById("result")

    showResult.innerText = "Your BMI is" + " " + myBmi
    
    document.getElementById("info").innerHTML = `
                    <table>
                        <tr>
                            <th>Classification</th>
                            <th>BMI range - kg/m<sup>2</sup></th>
                        </tr>
                        <tr>
                            <td>Severe Thinness</td>
                            <td>&lt; 16</td>
                        </tr>
                        <tr>
                            <td>Moderate Thinness</td>
                            <td>16 - 17</td>
                        </tr>
                        <tr>
                            <td>Mild Thinness</td>
                            <td>17 - 18.5</td>
                        </tr>
                        <tr>
                            <td>Normal</td>
                            <td>18.5 - 25</td>
                        </tr>
                        <tr>
                            <td>Overweight</td>
                            <td>25 - 30</td>
                        </tr>
                        <tr>
                            <td>Obese Class I</td>
                            <td>30 - 35</td>
                        </tr>
                        <tr>
                            <td>Obese Class II</td>
                            <td>35 - 40</td>
                        </tr>
                        <tr>
                            <td>Obese Class III</td>
                            <td>&gt; 40</td>
                        </tr>
                    </table>`;
})