(:FLOWR:)

for $cd at $i in doc("coleccion.xml")//cd

let $title := $cd/titulo
let $artist := $cd/artista
let $price := xs:decimal($cd/precio)

where $price >= 9

order by lower-case($artist) descending

return
  <album pos="{$i}">
    <title>{ data($title) }</title>
    <artist>{ data($artist) }</artist>
  </album>
