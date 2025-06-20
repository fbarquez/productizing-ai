
function showSection(id) {
  document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

const ctx1 = document.getElementById('chart1').getContext('2d');
new Chart(ctx1, {
  type: 'bar',
  data: {
    labels: ['Grammarly', 'ChatGPT', 'Spotify', 'Notion AI'],
    datasets: [{
      label: 'User Adoption (millions)',
      data: [30, 180, 500, 20],
      backgroundColor: ['#2aa198', '#268bd2', '#859900', '#cb4b16']
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true } }
  }
});

const ctx2 = document.getElementById('chart2').getContext('2d');
new Chart(ctx2, {
  type: 'pie',
  data: {
    labels: ['Trust & Transparency', 'Ease of Use', 'Performance', 'Personalization'],
    datasets: [{
      data: [35, 25, 20, 20],
      backgroundColor: ['#b58900', '#2aa198', '#268bd2', '#dc322f']
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { position: 'bottom' } }
  }
});
