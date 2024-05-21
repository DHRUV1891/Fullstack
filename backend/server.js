import express from 'express';
const app = express();

//app.get('/',(req, res) => {res.send("server is ready!");});

app.get('/api/jokes',(req, res) =>{
    const jokes =[
        {
            id:1,
            title: 'Funny jokes',
            content:'this is a funny joke lololololololololololol'
        },
        {
            id:2,
            title: 'Funny jokes 2',
            content:'this is a funny joke heeheheeh'
        },
        {
            id:3,
            title: 'Funny jokes 3',
            content:'this is a funny joke hahaaha'
        },
    ]
    res.send(jokes);
})


const port = process.env.PORT || 3000; // in production


app.listen(port,()=>{
    console.log("App listening on port :${port}");
}); 
