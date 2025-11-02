(: Extraer los titulos de los cd con precio <10 :)
(:
for $cd in doc("coleccion.xml")/coleccion/cd
where $cd/precio < 10
return $cd/titulo
:)

(: Extraer el listado de titulos de los cd :)
(:
let $tit := doc("coleccion.xml")/coleccion/cd/titulo
return <titulos>{$tit}</titulos>
:)

(: Extraer los precios ordenados de menor a mayor :)

for $price in doc("coleccion.xml")//cd/precio
order by xs:decimal($price)
return $price
