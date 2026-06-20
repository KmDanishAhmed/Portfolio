app.post('/translate',(req,res)=>{

const { code, source, target } = req.body;

let translated = code;

if(source === 'javascript' && target === 'python'){
    translated = translated
      .replace(/console\.log\((.*?)\);?/g,'print($1)')
      .replace(/const\s+/g,'')
      .replace(/let\s+/g,'');
}

res.json({
    success:true,
    translated
});

});
