//exercice 1
$getcheck = prompt('montant de l\'addition ?');
$Check = parseInt($getcheck);
$tip = 0
$test = $Check < 50 ? $tip = (($Check*20)/100) :  $tip = (($Check*15)/100) ;
console.log('le montant total de l\'addition est de :'+ ($Check + $tip));

//exercice 2
console.log('la note était de ' + $Check + '€, le pourboire de ' + $tip + '€ et la valeur totale était de ' + ($Check + $tip) + '€.')