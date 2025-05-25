document.addEventListener('DOMContentLoaded', async function() {
  let designers = [];
  let showShortlistedOnly = false;
  
  // DOM elements
  const designersList = document.getElementById('designers-list');
  const shortlistFilter = document.getElementById('shortlist-filter');
  
  // Fetch designers data
  async function fetchDesigners() {
    try {
      const response = await fetch('http://localhost:5000/api/designers');
      designers = await response.json();
      
      // Add shortlisted property to each designer
      designers.forEach(designer => {
        designer.shortlisted = false;
      });
      
      renderDesigners();
    } catch (error) {
      console.error('Error fetching designers:', error);
    }
  }
  
  // Render designers list
  function renderDesigners() {
    designersList.innerHTML = '';
    
    const designersToShow = showShortlistedOnly 
      ? designers.filter(designer => designer.shortlisted)
      : designers;
    
    if (designersToShow.length === 0) {
      designersList.innerHTML = '<p class="no-results">No designers found</p>';
      return;
    }
    
    designersToShow.forEach(designer => {
      const designerCard = document.createElement('div');
      designerCard.className = 'designer-card';
      
      designerCard.innerHTML = `
        <img src="${designer.avatar}" alt="${designer.name}" class="designer-avatar">
        <div class="designer-info">
          <h3 class="designer-name">${designer.name}</h3>
          <p class="designer-specialty">${designer.specialty}</p>
          <p class="designer-location">
            <img src="assets/location-icon.svg" alt="Location">
            ${designer.location}
          </p>
          <div class="designer-actions">
            <button class="action-btn details-btn">
              <img src="assets/details-icon.svg" alt="Details">
            </button>
            <button class="action-btn hide-btn">
              <img src="assets/hide-icon.svg" alt="Hide">
            </button>
            <button class="action-btn shortlist-btn ${designer.shortlisted ? 'active' : ''}">
              <img src="${designer.shortlisted ? 'assets/shortlist-fill.svg' : 'assets/shortlist-outline.svg'}" alt="Shortlist">
            </button>
            <button class="action-btn report-btn">
              <img src="assets/report-icon.svg" alt="Report">
            </button>
          </div>
        </div>
      `;
      
      designersList.appendChild(designerCard);
      
      // Add event listener to the shortlist button
      const shortlistBtn = designerCard.querySelector('.shortlist-btn');
      shortlistBtn.addEventListener('click', () => toggleShortlist(designer.id));
    });
  }
  
  // Toggle shortlist status
  function toggleShortlist(designerId) {
    const designer = designers.find(d => d.id === designerId);
    if (designer) {
      designer.shortlisted = !designer.shortlisted;
      renderDesigners();
    }
  }
  
  // Toggle shortlist filter
  shortlistFilter.addEventListener('click', () => {
    showShortlistedOnly = !showShortlistedOnly;
    shortlistFilter.classList.toggle('active', showShortlistedOnly);
    renderDesigners();
  });
  
  // Initial load
  fetchDesigners();
});
