// Start your es6 scripts here

import express from 'express'

import resolvers from './resolvers'
import schema from './schema'

import {graphqlHTTP} from  'express-graphql'
const app = express();


app.get('/', (req,res)=>{
res.send("Up and running")
});

const root = resolvers
// {
//     play : ()=> {
//         console.log("playing with graphql ...");
//     }
// }

app.use('/graphql',graphqlHTTP({
    schema:schema,
    rootValue : root,
    graphiql : true,
    // plaground:true
}));


app.listen(8082,()=>console.log("running on 8082"));
