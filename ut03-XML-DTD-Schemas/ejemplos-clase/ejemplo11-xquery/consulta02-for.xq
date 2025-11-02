(:BUCLE FOR:)

(:
for $num in (1 to 5)
return <numero>{$num}</numero>
:)

for $cd at $i in doc("coleccion.xml")//cd
return <cd pos="{$i}">{ $cd/titulo, $cd/artista }</cd>
