
        // Datos almacenados en matrices
        var countries = ["Brasil", "USA", "Mexico"];
        var states = {
            Brasil: ["Río de Janeiro", "Amazonas"],
            USA: ["California", "Nueva York"],
            Mexico: ["Hidalgo", "Baja California"]
        };
        var cities = {
            "Río de Janeiro": ["Petrópolis", "Duque de Caxias"],
            Amazonas: ["Manaus", "Coari"],
            California: ["Los Angeles", "Merced"],
            "Nueva York": ["Kingston", "Salamanca"],
            Hidalgo: ["Tula", "Tepeji"],
            "Baja California": ["Mexicali", "Tijuana"]
        };

        // Función para actualizar el menú desplegable de estados
        function updateStates() {
            var countrySelect = document.getElementById("country");
            var stateSelect = document.getElementById("state");
            var citySelect = document.getElementById("city");

            // Limpiar y deshabilitar el menú de estados y ciudades
            stateSelect.innerHTML = "<option value=''>Selecciona un estado</option>";
            citySelect.innerHTML = "<option value=''>Selecciona una localidad</option>";
            stateSelect.disabled = true;
            citySelect.disabled = true;

            // Obtener el país seleccionado
            var selectedCountry = countrySelect.value;

            // Si se selecciona un país, llenar el menú de estados correspondiente
            if (selectedCountry) {
                stateSelect.disabled = false;
                for (var i = 0; i < states[selectedCountry].length; i++) {
                    var option = document.createElement("option");
                    option.text = states[selectedCountry][i];
                    option.value = states[selectedCountry][i];
                    stateSelect.add(option);
                }
            }
        }

        // Función para actualizar el menú desplegable de ciudades
        function updateCities() {
            var countrySelect = document.getElementById("country");
            var stateSelect = document.getElementById("state");
            var citySelect = document.getElementById("city");

            // Limpiar y deshabilitar el menú de ciudades
            citySelect.innerHTML = "<option value=''>Selecciona una localidad</option>";
            citySelect.disabled = true;

            // Obtener el país y estado seleccionados
            var selectedCountry = countrySelect.value;
            var selectedState = stateSelect.value;

            // Si se selecciona un país y estado, llenar el menú de ciudades correspondiente
            if (selectedCountry && selectedState) {
                citySelect.disabled = false;
                for (var i = 0; i < cities[selectedState].length; i++) {
                    var option = document.createElement("option");
                    option.text = cities[selectedState][i];
                    option.value = cities[selectedState][i];
                    citySelect.add(option);
                }
            }
        }

        // Función para mostrar la selección actual
        function showSelection() {
            var countrySelect = document.getElementById("country");
            var stateSelect = document.getElementById("state");
            var citySelect = document.getElementById("city");

            var selectedCountry = countrySelect.value;
            var selectedState = stateSelect.value;
            var selectedCity = citySelect.value;

            var selectionMessage = "Selección actual:\n";
            selectionMessage += "País: " + (selectedCountry || "No seleccionado") + "\n";
            selectionMessage += "Estado: " + (selectedState || "No seleccionado") + "\n";
            selectionMessage += "Localidad: " + (selectedCity || "No seleccionado");

            alert(selectionMessage);
        }

        // Llenar el menú de países al cargar la página
        window.onload = function () {
            var countrySelect = document.getElementById("country");

            // Llenar el menú de países
            for (var i = 0; i < countries.length; i++) {
                var option = document.createElement("option");
                option.text = countries[i];
                option.value = countries[i];
                countrySelect.add(option);
            }
        };
  