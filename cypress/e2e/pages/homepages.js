class HomePages{

    NavigateToHomePage1() {
      cy.visit('https://amphora.net/'); 
     }

    clickonSymphonyCTRMdropdown(){
        cy.get('div[class="nav__inner"]>ul>li:nth-child(1)>ul>li:nth-child(1)>a').click({force:true});
     }

     usershouldbeSymphonyCTRMpage(){
        cy.get('h1[class="heading--lg"]').should('contain.text', 'Symphony CTRM');
     }

     clickonAlchemyCTRMdropdown(){
      cy.get('div[class="nav__inner"]>ul>li:nth-child(1)>ul>li:nth-child(2)>a').click({force:true});
     }

     usershouldbeAlchemyCTRMpage(){
      cy.get('h1[class="heading--lg"]').should('contain.text', 'Alchemy CTRM');
     }

    userclickonVaRModuledropdown(){
      cy.get('div[class="nav__inner"]>ul>li:nth-child(1)>ul>li:nth-child(3)>a').click({force:true});
    }

    usershouldbeVaRModulepage(){
      cy.get('h1[class="heading--lg"]').should('contain.text', 'VaR Module');
    }

    userclickonTradeconfirmationsmanagerdropdown(){
      cy.get('div[class="nav__inner"]>ul>li:nth-child(1)>ul>li:nth-child(4)>a').click({force:true});
    }

    usershouldbeTradeconfirmationsmanagerpage(){
      cy.get('h1[class="heading--lg"]').should('contain.text', 'Trade confirmations manager');
    }

    userclickonFreightmanagerdropdown(){
      cy.get('div[class="nav__inner"]>ul>li:nth-child(1)>ul>li:nth-child(5)>a').click({force:true});
    }

    usershouldbeFreightmanagerpage(){
      cy.get('h1[class="heading--lg"]').should('contain.text', 'Freight manager');
    }

    userclickonClaimsmanagerdropdown(){
      cy.get('div[class="nav__inner"]>ul>li:nth-child(1)>ul>li:nth-child(6)>a').click({force:true});

    }
    usershouldbeClaimsmanagerpage(){
      cy.get('h1[class="heading--lg"]').should('contain.text', 'Claims manager');

    }

    userclickonSymphonyCreditdropdown(){
      cy.get('div[class="nav__inner"]>ul>li:nth-child(1)>ul>li:nth-child(7)>a').click({force:true});

    }
    usershouldbeSymphonyCreditpage(){
      cy.get('h1[class="heading--lg"]').should('contain.text', 'Symphony Credit');

    }

}

const homePages = new HomePages();
export default homePages;