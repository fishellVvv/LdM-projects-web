(:1. Mostrar el nombre del instituto :)
(:
doc("ies.xml")//nombre/text()
:)

(:2. Mostrar la web del instituto :)
(:
doc("ies.xml")//web/text()
:)

(:3. Mostrar los nombres de todos los ciclos formativos :)
(:
for $ciclo in doc("ies.xml")//ciclo
return $ciclo/nombre
:)

(:4. Mostrar los identificadores (id) de todos los ciclos :)
(:
for $ciclo in doc("ies.xml")//ciclo
return data($ciclo/@id)
:)

(:5. Mostrar los nombres de los ciclos de grado superior :)
(:
for $ciclo in doc("ies.xml")//ciclo
where $ciclo/grado = "Superior"
return $ciclo/nombre
:)

(:6. Mostrar el nombre y el año del decreto de cada ciclo :)
(:
for $ciclo in doc("ies.xml")//ciclo
return concat($ciclo/nombre, " - Año decreto: ", $ciclo/decretoTitulo/@año)
:)

(:7. Crea una estructura xml nueva con nombre, grado y año :)
(:
<ciclosFormativos>
{
  for $ciclo in doc("ies.xml")//ciclo
  return
    <ciclo>
      <nombre>{data($ciclo/nombre)}</nombre>
      <grado>{data($ciclo/grado)}</grado>
      <año>{data($ciclo/decretoTitulo/@año)}</año>
    </ciclo>
}
</ciclosFormativos>
:)

(:8. Mostrar los nombres de los ciclos cuyo decreto sea anterior a 2010 :)
(:
for $ciclo in doc("ies.xml")//ciclo
where $ciclo/decretoTitulo/@año < 2010
return $ciclo/nombre
:)

(:9. Mostrar los nombres de los ciclos ordenados por el año del decreto :)
(:
for $ciclo in doc("ies.xml")//ciclo
order by $ciclo/decretoTitulo/@año
return $ciclo/nombre
:)

(:10. Mostrar un resumen con el total de ciclos y cuantos son de cada grado :)

count(doc("ies.xml")//ciclo)
