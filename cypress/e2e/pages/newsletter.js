class NewsLetter{

    userinHomepage(){
        cy.visit('https://amphora.net/'); 
    }

    clickonNewslettersignup(){
        cy.get('div[class="nav__inner"]>ul>li:nth-child(5)>ul>li:nth-child(3)>a').click({force:true});
    }

    shouldinnewslwttersignuppage(){
        cy.get('h2[class="fserv-form-name"]').should('contain.text','Newsletter Sign Up');
    } 

    enteravalidemailforsignup(){
        cy.get('input[type="email"]').type("amphora@gmail.com")
    }

    shouldEntertheFirstName(){
        cy.get('input[name="contact[first_name]"]').type("Amphora")
    }

    shouldEntertheLastName(){
        cy.get('input[name="contact[last_name]"]').type("Technologies")
    }

    shouldabletoclickonsignupbutton(){
        cy.get('button[class="fserv-button-submit"]',{timeout: 10000}).click() 
    }

    clickonclosebutton(){
        cy.get('#newsletter-sign-up > .close',{timeout: 10000}).click({force: true})
    }

     waitForSpecificTime() {
        cy.wait(10000);  // waits for 'ms' milliseconds
    }
    usershouldseethesuccessmessage(){
        cy.get('div[class="fs-notifier success"]>span',{timeout: 10000}).should('contain.text','Thank you for signing up for our newsletter');
        

    }


}

const newsletter = new NewsLetter();
export default newsletter;