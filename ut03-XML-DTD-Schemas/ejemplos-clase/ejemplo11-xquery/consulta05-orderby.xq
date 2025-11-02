(:ORDER BY:)

for $cd in doc("coleccion.xml")/coleccion/cd
order by lower-case($cd/titulo) descending
return $cd/titulo/text()
