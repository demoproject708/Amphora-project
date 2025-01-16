class Crud{

    createapetbyinitiatepostrequestandverify(){
        cy.request({
            method: 'POST',
            url: 'https://petstore.swagger.io/v2/pet', 
            headers:{
                'Content-Type':'application/json'
            },
            body:{
                
                    "id": 0,
                    "category": {
                      "id": 0,
                      "name": "ok"
                    },
                    "name": "doggie",
                    "photoUrls": [
                      "string"
                    ],
                    "tags": [
                      {
                        "id": 0,
                        "name": "string"
                      }
                    ],
                    "status": "available"
                  }

          }).then((response) => {

            if (response.status === 200) {
                // Additional verifications, e.g., checking returned pet details
                console.log('Pet created successfully');
                return response.body;
            } else {
                throw new Error('Failed to create pet');
            }
           // expect(response.status).to.eq(200);

          })
        
        }
    updatetheexistingpetandverify(){
        
        cy.request({
            method: 'PUT',
            url: 'https://petstore.swagger.io/v2/pet',
            body: {
            "id": 0,
            "category": {
              "id": 0,
              "name": "ok"
            },
            "name": "doggie",
            "photoUrls": [
              "string"
            ],
            "tags": [
              {
                "id": 0,
                "name": "string"
              }
            ],
            "status": "available"
          }
          }).then((response) => {

            if (response.status === 200) {
                // Additional verifications, e.g., checking returned pet details
                console.log('Pet created successfully');
                return response.body;
            } else {
                throw new Error('Failed to create pet');
            }
            //expect(response.status).to.eq(200);
          });

        }

        Getthepetdetailsandverify(){

            cy.request("GET", "https://petstore.swagger.io/v2/pet/9223372036854775796").then((response)=>{
    
                if (response.status === 200) {
                    // Additional verifications, e.g., checking returned pet details
                    console.log('Pet created successfully');
                    return response.body;
                } else {
                    throw new Error('Failed to create pet');
                }
                //expect(response.status).to.equal(200)
                //cy.log(JSON.stringify(response.body));
            })

        }

        Deletethepetandverify(){
            
            cy.request({
                method: 'DELETE',
                url: 'https://petstore.swagger.io/v2/pet/9223372036854775807'
            }).then((response)=>{
                if (response.status === 200) {
                    // Additional verifications, e.g., checking returned pet details
                    console.log('Pet created successfully');
                    return response.body;
                } else {
                    throw new Error('Failed to create pet');
                }
              
            })

            



            // cy.request({
            //     method: 'DELETE',
            //     url: 'https://petstore.swagger.io/v2/pet/'+userId
            // }).then((response)=>{
            //     if (response.status === 200) {
            //         // Additional verifications, e.g., checking returned pet details
            //         console.log('Pet created successfully');
            //         return response.body;
            //     } else {
            //         throw new Error('Failed to create pet');
            //     }
              
            // })
            

        }
    }

const crud = new  Crud();
export default crud;


 