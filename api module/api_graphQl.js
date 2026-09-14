const express=require("express");
const {graphqlHTTP}=require("express-graphql");
const {buildSchema}=require("graphql");

const app=express();

const schema=buildSchema(`
  type Query {
  message:String
  }
  `);

  const root={
    message:()=>{
      return "hello student welcome to graphQl api";
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