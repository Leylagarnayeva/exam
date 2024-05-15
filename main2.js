
        axios.get('https://restcountries.com/v3.1/name/azerbaijan')
            .then(function (response) {
                const data = response.data[0];
                document.getElementById('name').textContent = data.name.common;
                document.getElementById('flag').src = data.flags.png;
                document.getElementById('area').textContent = data.area;
                document.getElementById('coatOfArms').src = data.coatOfArms.png;
                document.getElementById('capital').textContent = data.capital[0];
            })
            .catch(function (error) {
                console.log(error);
            });
