document.addEventListener('DOMContentLoaded', () => {
  
    // Cargar los items almacenados en localStorage al cargar la página
    function cargarItems() {
        // Obtener los ítems desde localStorage y parsearlos con JSON.parse
        let items = JSON.parse(localStorage.getItem('items')) || [];
        
        // Limpiar la lista de ítems actual
        const listaItems = document.getElementById('contenedor');
        listaItems.innerHTML = ''; 
  
        // Iterar sobre los ítems y agregar cada uno a la lista en la interfaz
        items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            listaItems.appendChild(li);
        });
    }
  
    // Crear una función que permita guardar un nuevo ítem en localStorage
    function guardarItem(nuevoItem) {
        // Obtener la lista actual de ítems desde localStorage
        let items = JSON.parse(localStorage.getItem('items')) || [];
        
        // Agregar el nuevo ítem a esta lista
        items.push(nuevoItem);
        
        // Guardar la lista actualizada en localStorage
        localStorage.setItem('items', JSON.stringify(items));
        
        // Actualizar la interfaz
        cargarItems();
    }
  
    // Crear una función que permita limpiar todos los ítems de localStorage
    function limpiarItems() {
        // Eliminar los ítems almacenados
        localStorage.removeItem('items');
        
        // Actualizar la interfaz para reflejar la eliminación de ítems
        cargarItems();
    }
  
    // Crear el evento para el botón que permite agregar un nuevo ítem
    document.getElementById('agregar').addEventListener('click', () => {
        const nuevoItem = document.getElementById('Item').value  // Asegurarse de que coincida el id del input
        if (nuevoItem.trim()) {
            guardarItem(nuevoItem);
            document.getElementById('item').value = ''; // Limpiar el campo de entrada
        }
    });
  
    // Evento para eliminar todos los ítems
    document.getElementById('limpiar').addEventListener('click', () => {
        limpiarItems();
    });
  
    // Cargar los ítems al cargar la página
    cargarItems();
  });