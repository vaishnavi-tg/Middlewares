const zod=require("zod")
function validateInput (arr){
    const schema=zod.array(zod.number())
    const response=schema.safeParse(arr)
    console.log(response)
}
validateInput([3,"4.99",56,7])
validateInput([3,4.99,56,7])

