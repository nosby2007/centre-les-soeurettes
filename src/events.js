const express = require('express');
function createRouter(){
    const router = express.Router();
    const owner = '';

    // the routes are defined here
    router.post('/event',(req,res,next)=>{
        db.query(
            'INSERT INTO newProduct(owner,name,description,date) VALUE(?,?,?,?)',
            [owner, req.body.name, req.body.description, new Date(req.body.date)],
            (error)=>{
                if(error){
                    console.error(error);
                    res.status(500).json({status:'error'});
                }else{
                    res.status(200).json({status:'ok'});
                }
            }
        );
    });
    router.get('/event', function(req,res,next){
        db.query(
            'SELECT id,name,description,date FROM newProduct WHERE owner=? ORDER BY date LIMIT 10 OFFSET ?',
            [
                owner,10*(req.params.page || 0)
            ],
            (errors,results)=>{
                if(error){
                    console.log(error);
                    res.status(500).json({status:'error'});
                }else{
                    res.status(200).json(results);
                }
            }
        );
    });
    router.put('/event/:id', function(req, res, next){
        db.query(
            'UPDATE newProduct SET name=?, date=? WHERE id=? AND owner=?',
            [
                req.body.name, req.body.description, new Date(req.body.date), req.params.id, owner
            ],
            (error)=>{
                if(error){
                    console.error(error);
                    res.status(500).json({status:'error'});
                }else{
                    res.status(200).json({status:'ok'});
                }
            }
        );
    });
    router.delete('/event/:id', function(req,res,next){
        db.query(
            'DELETE FROM events WHERE id=? AND owner=?',
            [req.params.is, owner],
            (error)=>{
                if(error){
                    console.error(error);
                    res.status(500).json({status:'error'});
                }else{
                    res.status(200).json({status:'ok'});
                }
            }
        );
    });

    return router;
}
module.exports=createRouter;