const{test,expect}= require('@playwright/test')


test.beforeAll(async()=>{

console.log("This block will execute before all")

})

test.afterAll(async()=>{

    console.log("This block will execute after all")

})

test.beforeEach(async()=>{

    console.log("This block will execute before each")

})

test.afterEach(async()=>{

    console.log("This block will execute after each")

})

test.describe("Group1", async()=>{

test("Test 1", async ({page})=>{

console.log("Test 1")

})

test("Test 2", async ({page})=>{

console.log("Test 2")

})


})


test.describe("Group 2", async()=>{

test("Test 3", async ({page})=>{

console.log("Test 3")

})

test("Test 4", async ({page})=>{

console.log("Test 4")

})

})




