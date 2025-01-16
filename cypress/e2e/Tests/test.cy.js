import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import Crud from "../pages/crud.js";


Given("create a pet by initiate post request and verify",()=> {
    Crud.createapetbyinitiatepostrequestandverify();
})
  
When("update the  existing pet and verify",()=>{
    Crud.updatetheexistingpetandverify();
   })

Then("Get the pet details and verify",()=>{
    Crud.Getthepetdetailsandverify();
   })

And("Delete the pet and verify",()=>{
    Crud.Deletethepetandverify();
   })