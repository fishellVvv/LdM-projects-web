(:WHERE:)

for $cd in doc("coleccion.xml")/coleccion/cd
where $cd/precio > 9.5
return $cd/precio/text()
