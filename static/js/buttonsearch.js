// Exemplo de dados dos resultados da pesquisa
const results = [
    { title: "Clínica Veterinária A", description: "Descrição da Clínica Veterinária A", image: "img/blog-como-ser-um-medico-bem-sucedido-5-atitudes-fundamentais.webp" },
    { title: "Clínica Pet B", description: "Descrição da Clínica Pet B", image: "imagem2.jpg" },
    { title: "Veterinário C", description: "Descrição do Veterinário C", image: "imagem3.jpg" },
    { title: "Clínica Veterinária D", description: "Descrição da Clínica Veterinária D", image: "imagem4.jpg" },
    { title: "Clínica Pet E", description: "Descrição da Clínica Pet E", image: "imagem5.jpg" },
    { title: "Veterinário F", description: "Descrição do Veterinário F", image: "imagem6.jpg" }
  ];
  
 // Função para exibir os resultados da pesquisa
function showSearchResults() {
    const resultsContainer = document.getElementById("search-results");
  
    // Limpar os resultados anteriores
    resultsContainer.innerHTML = "";
  
    // Dividir os resultados em grupos de dois
    const groupedResults = splitArrayIntoGroups(results, 3);
  
    // Iterar pelos grupos de resultados
    groupedResults.forEach(group => {
      const resultGroupElement = document.createElement("div");
      resultGroupElement.classList.add("result-group");
  
      // Iterar pelos resultados dentro do grupo
      group.forEach(result => {
        const resultElement = document.createElement("div");
        resultElement.classList.add("search-result");
  
        const imageElement = document.createElement("img");
        imageElement.src = result.image;
        imageElement.alt = result.title;
        imageElement.classList.add("result-image");
  
        const contentElement = document.createElement("div");
        contentElement.classList.add("result-content");
  
        const titleElement = document.createElement("h3");
        titleElement.textContent = result.title;
  
        const descriptionElement = document.createElement("p");
        descriptionElement.textContent = result.description;
  
        contentElement.appendChild(titleElement);
        contentElement.appendChild(descriptionElement);
  
        resultElement.appendChild(imageElement);
        resultElement.appendChild(contentElement);
  
        resultGroupElement.appendChild(resultElement);
      });
  
      resultsContainer.appendChild(resultGroupElement);
    });
  }
  
  // Função auxiliar para dividir um array em grupos
  function splitArrayIntoGroups(arr, size) {
    const groups = [];
    for (let i = 0; i < arr.length; i += size) {
      groups.push(arr.slice(i, i + size));
    }
    return groups;
  }
  
  // Chamada da função para exibir os resultados da pesquisa
  showSearchResults();
  