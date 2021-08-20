describe('Pizza App', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/pizza')
	})

	const specialInstructions = () => cy.get('input[name=instructions]')
	const submitBtn = () => cy.get('button[id="submitBtn"]')
	const toppings = () => cy.get('[type="checkbox"]').check()
	const foobarInput = () => cy.get('input[name=foobar]')
	const sizeSelect = () => cy.get('select[name=size]')
	const sauceChoice = () => cy.get('[type="radio"]').first().check()
	const nameInput = () => cy.get('input[name=name]')

	it('Sanity check to make sure that tests work', () => {
		expect(1 + 2).to.equal(3)
		expect(2 + 2).not.to.equal(5)
		expect({}).not.to.equal({}) // equal ie ===
		expect({}).to.eql({}) // eql ie ==
	})

	it('The proper elements are showing', () => {
		sauceChoice().should('exist')
		specialInstructions().should('exist')
		sizeSelect().should('exist')
		toppings().should('exist')
		submitBtn().should('exist')
		nameInput().should('exist')
		foobarInput().should('not.exist')
	})

	it('The terms selector can be switched', () => {
		cy.get('select').select('Small').should('have.value', 'size')
	})

	describe('Submitting form', () => {
		it('Can submit the form', () => {
			cy.url().should('include', 'localhost')
		})

		it('Can type in the inputs', () => {
			specialInstructions()
				.should('have.value', '')
				.type('10 characters')
				.should('have.value', '10 characters')

			nameInput()
				.should('have.value', '')
				.type('Kevin')
				.should('have.value', 'Kevin')
		})

		it('The submit button enables when all inputs are filled out', () => {
			nameInput().type('Kevin')
			specialInstructions().type('10 characters')
			submitBtn().should('not.be.disabled')
		})
	})
})