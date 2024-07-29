Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add('selectProduct', (productName) => {  // The first is your custom command name, the second is the function that you want to execute
              cy.get('h4.card-title').each(($el, index, $list) => {      //<-- We type a function in the command file, so that we can iterate through every product
            if ($el.text().includes(productName)) {  // <-- We want to check if the product name is the same as the one we are looking for
                cy.get('button.btn.btn-info').eq(index).click()
            }
         })
        })

        //-
        Cypress.Commands.add("LoginAPI", () => {

          cy.request("POST", "https://rahulshettyacademy.com/api/ecom/auth/login", {"userEmail":"rahulshetty@gmail.com", "userPassword":"Iamking@00"})
          .then(function(response)
          {
              expect(response.body).to.eq(200)
              Cypress.env('token', response.body.token)
          })
        })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })