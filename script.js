document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('business-form');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const name = document.getElementById('business-name').value;
      const category = document.getElementById('business-category').value;
      const city = document.getElementById('business-city').value;
  
      if (name && category && city) {
        // Create a new business card element
        const newBusiness = document.createElement('div');
        newBusiness.classList.add('business-card', 'new-business');
        newBusiness.textContent = `${name} (${city})`;
  
        // Determine the category list element
        const categoryId = category.toLowerCase().replace(/ /g, '-') + '-list';
        const categoryList = document.getElementById(categoryId);
  
        if (categoryList) {
          categoryList.appendChild(newBusiness);
        } else {
          console.error(`Category list with ID ${categoryId} not found.`);
        }
  
        // Clear the form fields
        form.reset();
      } else {
        alert('Please fill out all fields.');
      }
    });
  });
  