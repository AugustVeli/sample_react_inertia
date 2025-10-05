function tag_id(tag, id) {
    return cy.get(`${tag}[id="${id}"]`)
}

const array = [
    {name:"book_name",
    type:"Some new book"},
    {name:"iso", type:"45451-iso-5415"},
    {name:"author", type:"Pushkin"},
    {name:"author_org", type:"Пушкин"},
    {name:"name_genre", type:"poetry"},
    {name:"binding", type:"soft"},
    {name:"location", type:"Daugavpils"},
    {name:"amount", type:"2"}
]

describe('Add a new book', () => {
  it('Add any book', () => {
    // const array = [{}];
    cy.visit('http://localhost:8000/account/dashboard/book')
    // cy.get('button[id="add-book"]').click()
    tag_id("button", "add-book").click()
    array.forEach(element => {
        cy.get(`input[name="${element.name}"]`).type(element.type)
    });
    // cy.get('input[name="book_name"]').type("Some new book")
    cy.get('button[id="close-add-book"]').click()
    cy.get('button[id="add-book"]').click()
  })
})
