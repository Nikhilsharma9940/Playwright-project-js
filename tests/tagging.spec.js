const{test,expect}= require('@playwright/test')


test.describe("Group1", async()=>{

test("Test 1@sanity", async ({page})=>{

console.log("Test 1")

})

test("Test 2@reg", async ({page})=>{

console.log("Test 2")

})


})


test.describe("Group 2", async()=>{

test("Test 3 @sanity", async ({page})=>{

console.log("Test 3")

})

test("Test 4@reg", async ({page})=>{

console.log("Test 4")

})

})




