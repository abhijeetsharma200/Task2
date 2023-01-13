describe('Banner test', () => {
  it('Check banner elements', () => {
      // Visit the website
      cy.visit('https://butopea.com');
      
      // Check if element with class "banner-square" exists in the DOM
      cy.get('.banner-square').should('exist');

      // Select the second element with class "banner-square-column"
      cy.get('.banner-square-column:nth-child(2)')
          // Check if element with class "banner-square-overlay" exists in the DOM
          .find('.banner-square-overlay')
          .should('exist')
          .then(($el) => {
              // Check if the element with class "banner-square-overlay-heading p" exists in the DOM
              cy.get('.banner-square-overlay-heading p').should('exist');
              // Get text from the element with class "banner-square-overlay-heading p"
              const text = $el.find('.banner-square-overlay-heading p').text();
              // Check if the button element exists in the DOM
              cy.get('.banner-square-overlay-cta button').should('exist');
              // Get text from the button element
              const buttonText = $el.find('.banner-square-overlay-cta button').text();
              // Log the overlay text and button text in the browser's console
              cy.log('Banner overlay text:', text);
              cy.log('Button text:', buttonText);
          });

      // Select the third element with class "banner-square-column"
      cy.get('.banner-square-column:nth-child(3)')
          // Check if img element exists in the DOM
          .find('img')
          .should('exist')
          .then(($img) => {
              // Get the image src
              const imgSrc = $img.attr('src');
              // Log the image src in the browser's console
              cy.log('Image url:', imgSrc);
          });
  });
});
