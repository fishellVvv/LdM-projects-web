(:RETURN:)

for $cd in doc("coleccion.xml")//cd
return
  <cd>
    <titulo>{ data($cd/titulo) }</titulo>
    <artista>{ data($cd/artista) }</artista>
    <precio>{ data($cd/precio) }</precio>
  </cd>
