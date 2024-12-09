const goalInputForm = document.getElementById('goal-input-form');
goalInputForm.addEventListener('submit', (e) => {
 e.preventDefault();
 const organism = document.getElementById('organism').value;
 const gene = document.getElementById('gene').value;
 const expressionLevel = document.getElementById('expression-level').value;
 fetch('/generate-roadmap', {
 method: 'POST',
 headers: {
 'Content-Type': 'application/json'
 },
 body: JSON.stringify({ organism, gene, expressionLevel })
 })
 .then(response => response.json())
 .then(data => {
 const roadmapContainer = document.getElementById('roadmap-container');
 roadmapContainer.innerHTML = data.roadmap;
 })
 .catch(error => console.error(error));
});
