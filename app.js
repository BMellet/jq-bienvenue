var obj = 
{
	nom:$('#first_name'), 
	prenom:$('#last_name'),
	ville:$('#city')
};

$('input').on('input',function() 
{
	$('#username').html(obj.nom.val()+' '+obj.prenom.val()+' '+obj.ville.val())	;
   
});

