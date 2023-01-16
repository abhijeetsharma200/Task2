describe('Product test', () => {
  it('Check products', () => {
      // Visit the website
      cy.visit('https://butopea.com');
      // Click on the third tab and wait for 3 seconds
      cy.get('.tab:nth-child(3) button').click().wait(3000);
      // Check if the element with the id "new-arrivals" exists in the DOM
      cy.get('#new-arrivals').should('exist');
      // Select all elements with the attribute data-testid equals to "productLink"
      cy.get('[data-testid="productLink"]')
        .each(($product, index) => {
          // Log the product link in the browser's console
          cy.log("Product link:", $product.attr('href'));
          // limit the number of products to 11
          let maxIndex = 10;
          // Get the price of the product
          cy.get('.lh30.cl-dark.weight-300.fs-medium-small', { $product }).eq(index < maxIndex ? index : maxIndex)
            .then(($price) => cy.log("Price:", $price.text()));
          // Get the title of the product
          cy.get('.product-name').eq(index < maxIndex ? index : maxIndex)
            .then(($title) => cy.log("Title:", $title.text()));
          // Get the image URL of the product
          cy.get('.product-image__thumb').eq(index < maxIndex ? index : maxIndex)
            .then(($img) => cy.log("Image URL:", $img.attr('src')));
        });
    });
});
