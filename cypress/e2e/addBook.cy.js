function tag_id(tag, id) {
    return cy.get(`${tag}[id="${id}"]`)
}

const array = [
    {name:"book_name", type:"Some new book"},
    {name:"iso", type:"45451-iso-5415"},
    {name:"author", type:"Pushkin"},
    {name:"author_org", type:"Пушкин"},
    {name:"name_genre", type:"poetry"},
    {name:"binding", type:"soft"},
    {name:"location", type:"Daugavpils"},
    {name:"description", type:"I want to sell my old book I found in the garage"},
    {name:"amount", type:"2"}
]

const user = [{name:"email", type:"margot67@example.com"}, {name:"password", type:"password"}]

describe('Add a new book', () => {
  it('Add any book', () => {
    // const array = [{}];
    // cy.visit('http://localhost:8000/')
    cy.visit('http://127.0.0.1:8000/login')
    user.forEach(element => {
        cy.get(`input[name="${element.name}"]`).type(element.type)
    });
    cy.get('button[type="submit"]').click()

    tag_id("button", "add-book").click()
    // tag_id('button', 'my_books')
    // cy.visit('http://localhost:8000/account/dashboard/book')
    array.forEach(element => {
        cy.get(`input[name="${element.name}"]`).type(element.type)
    });

    // cy.get('input[name="book_name"]').type("Some new book")
    cy.get('button[id="close-add-book"]').click()
    cy.get('button[id="add-book"]').click()
    cy.visit('http://127.0.0.1:8000/logout')
  })
})
