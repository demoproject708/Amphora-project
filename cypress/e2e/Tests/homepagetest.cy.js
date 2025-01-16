import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

import HomePages from "../pages/homepages.js"; 
import NewsLetter from "../pages/newsletter.js";


Given('user navigate to the homepage', () => {
    HomePages.NavigateToHomePage1();

  });

  When('user click on Symphony CTRM dropdown', () => {
    HomePages.clickonSymphonyCTRMdropdown();
  });


  Then('user should be Symphony CTRM page', () => {
    HomePages.usershouldbeSymphonyCTRMpage();
  });


  When('user click on Alchemy CTRM dropdown', () => {
    HomePages.clickonAlchemyCTRMdropdown();
  });


  Then('user should be Alchemy CTRM page', () => {
    HomePages.usershouldbeAlchemyCTRMpage();
  });

  When('user click on VaR Module dropdown', () => {
    HomePages.userclickonVaRModuledropdown();
  });


  Then('user should be VaR Module page', () => {
    HomePages.usershouldbeVaRModulepage();
  });

  When('user click on Trade confirmations manager dropdown', () => {
    HomePages.userclickonTradeconfirmationsmanagerdropdown();
  });


  Then('user should be Trade confirmations manager page', () => {
    HomePages.usershouldbeTradeconfirmationsmanagerpage();
  });


  When('user click on Freight manager dropdown', () => {
    HomePages.userclickonFreightmanagerdropdown();
  });


  Then('user should be Freight manager page', () => {
    HomePages.usershouldbeFreightmanagerpage();
  });

  When('user click on Claims manager dropdown', () => {
    HomePages.userclickonClaimsmanagerdropdown();
  });


  Then('user should be Claims manager page', () => {
    HomePages.usershouldbeClaimsmanagerpage();
  });

  When('user click on Symphony Credit dropdown', () => {
    HomePages.userclickonSymphonyCreditdropdown();
  });


  Then('user should be Symphony Credit page', () => {
    HomePages.usershouldbeSymphonyCreditpage();
  });


  And('user in Homepage',()=>{
    NewsLetter.userinHomepage();

  })

    When('user able to click on Newsletter signup',()=>{
      NewsLetter.clickonNewslettersignup();
    })

    Then ('user should in newslwttersignup page',()=>{
      NewsLetter.shouldinnewslwttersignuppage();
    }) 

    When ('user enter a valid email for signup',()=>{
      NewsLetter.enteravalidemailforsignup();
    })

    Then ('user should Enter the FirstName',()=>{
      NewsLetter.shouldEntertheFirstName();
    }) 

    And  ('user should Enter the LastName',()=>{
      NewsLetter.shouldEntertheLastName();
    })

    And  ('user should able to click on signup button',()=>{
      NewsLetter.shouldabletoclickonsignupbutton();
    })

    And  ('user click on close button',()=>{
      NewsLetter.clickonclosebutton();
    })

    And ('wait For SpecificTime',()=>{
      NewsLetter.waitForSpecificTime();
    })

    Then  ('user should see the success message',()=>{
      NewsLetter.usershouldseethesuccessmessage();

    })