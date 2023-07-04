describe("test1",()=>{
    it("count the number of items and find the total sum for products ",()=>{
        cy.visit("https://magento.softwaretestingboard.com/");
        cy.get('#ui-id-25').click({force: true});
        cy.get(':nth-child(5) > .field > .control > #limiter').select("36",{force:true});

        // catch all items products : 
        cy.get(".products .list").as("Bags")
        cy.get("@Bags").find(".price").invoke("text").as("BagItems")
        cy.get("@BagItems").then((price)=>{
        let list = price.split("$")

        // find the total sum of the products :
        let total =0;
        for(let i =0;i<list.length;i++){
            cy.log(list[i]);
            total+= Number(list[i]);
            }
        cy.log(total)
            })
            })
    it("test that Men Tops Total number items and total sum prices",()=>{
        cy.visit("https://magento.softwaretestingboard.com/");
        cy.get('li[class="level1 nav-3-1 category-item first parent ui-menu-item').contains("Hoodies & Sweatshirts").click({force:true});
        cy.get(':nth-child(5) > .field > .control > #limiter').select("36",{force:true});

        // verify that the count of item is correct
        cy.get(".product-item-info").should("have.length",13);

        // to count Total :
        cy.get(".product-item-info").as("Containers");
        cy.get("@Containers").find("[data-price-type='finalPrice']").invoke("text").as("items");
        cy.get("@items").then((products)=>{
        let list = products.split("$");
        let total = 0;
        for(let i=0;i<list.length;i++){
            cy.log(list[i]);
            total+=Number(list[i]);
            }
            cy.log("total is :" +total)

    })
    });

})




