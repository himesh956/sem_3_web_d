const express=require("express");
const {graphqlHTTP}=require("express-graphql");
const {buildSchema}=require("graphql");

const app=express();

const schema=buildSchema(`
  type Query {
  message:String
  student:Student
  }
  type Student{
  name:String
  branch:String
  age:Int
  }
  `);

  const root={
   student:()=>{
    return {
      name:"himesh",
      branch:"cse",
      age:19
    };
   }
  };

  app.use(
     "/graphql",
    graphqlHTTP({
      schema:schema,
      rootValue:root,
      graphiql:true
    })
  );

  app.listen(3000,()=>{
    console.log("server is listening at http://localhost:3000/graphql");
  });