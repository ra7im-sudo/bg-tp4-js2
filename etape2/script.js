<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <title>CRUD-Persons - Etape 2</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="table_container">
        <table>
            <thead>
                <tr>
                    <th>N°</th>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Points</th>
                    <th>Select</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="col_number">1</td>
                    <td class="col_text">Nom1</td>
                    <td class="col_text">Prénom1</td>
                    <td class="col_number">5</td>
                    <td class="col_chkbox"><input type="checkbox"/></td>
                </tr>
                <tr>
                    <td class="col_number">2</td>
                    <td class="col_text">Nom2</td>
                    <td class="col_text">Prénom2</td>
                    <td class="col_number">5</td>
                    <td class="col_chkbox"><input type="checkbox"/></td>
                </tr>
                <tr>
                    <td class="col_number">3</td>
                    <td class="col_text">Nom3</td>
                    <td class="col_text">Prénom3</td>
                    <td class="col_number">5</td>
                    <td class="col_chkbox"><input type="checkbox"/></td>
                </tr>
            </tbody>
        </table>

             (événement onclick : slides 129 à 135) -->
        <button onclick="doInsertRowTable(99, 'nom', 'prenom', 10)">Ajouter</button>
    </div>

    <!-- Script externe, placé à la fin du body (slides 23 et 24) -->
    <script src="script.js"></script>
</body>
</html>