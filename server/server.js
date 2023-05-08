const express = require('express')
const mysql = require('mysql');
const cors = require('cors');
const { Connect } = require('vite');

const app = express();
app.use(cors());
app.use(express.json());

//mt sql connect
const connect = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'test_timestamp',
    port:'8889'
})



app.get('/price',(req,res) => {
    connect.query("SELECT SUM(pricet) as totalprice FROM price  ", (err,result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
            
        }
    });
});



// call api totalprice
app.get ('/api/price',function(req,res,next){



    const search = req.query.search;
    const page = parseInt(req.query.page)
    const per_page = parseInt(req.query.per_page);
    const start_idx = ( page -1 ) * per_page;
    
    console.log(page,per_page)
    var params =[];
    console.log(params);

    var sql = 'SELECT  SUM(pricet) as total   FROM price '
    
    if(search){
        sql += 'WHERE time_start LIKE ? '
        params.push('%'+search+'%');

    }

    sql += 'LIMIT  ?, ?'
    params.push(start_idx);
    params.push(per_page);

    console.log(sql,params);
    
    connect.query( sql , params
    ,function(err,result){
        connect.query(
            'SELECT COUNT(id) as total FROM price',
            function(err,count, fields){
            const total = count[0]['total'];
            const total_page = Math.ceil(total/per_page);
            console.log(page,per_page,total,total_page);
            res.send({
                page:page,
                per_page:per_page,
                total:total,
                total_page:total_page,
                data: result 
                
            })
            
        });
          
    })
})


app.get('/api/getdtall',function(req,res,next){
    var sql1 = 'SELECT * FROM price';
    connect.query(sql1, function(err,resultss){
        res.send(resultss);
    })
})


app.post('/create', (req,res)=> {
    const pricet = req.body.pricet;
    const time_start = req.body.time_start;

    connect.query("INSERT INTO price (pricet,time_start) VALUES(?,?)",[pricet,time_start],(err,result)=>{
        if(err){ 
            console.log(err);
        }else{
            res.send("value inserted");
        }

    });
});



// for routes looking like this `/products?page=1&pageSize=50`
app.get('/products', function(req, res) {
  const page = req.query.page;
  const pageSize = req.query.pageSize;
  res.send(`Filter with parameters ${page} and ${pageSize});`)
});







app.listen(3001, ()=>console.log('server is running in port3001'));