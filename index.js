
  const { LowdbCrud } = require('lowdb-crud')
  const my_obj = new LowdbCrud({'db_file':'db.json'})
  const param_obj = {'table_name': 'GRE',
  'value_filter_obj': { 'name': 'Alexa' }}

  const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.get('/',(req,res)=>{
    const param_obj = {'table_name': 'person'}
    const row_obj_list = my_obj.read(param_obj)
    res.send(row_obj_list);
})
app.post('/create', function (req, res) {
    console.log("Request body",req);
    const param_obj = {'table_name': 'person',
                     'row_obj_list': req.body}
    const uuid_list = my_obj.create(param_obj)
    res.send(uuid_list);
})

app.listen(3000)