# Ajustes no Projeto MVC - Loja de Produtos

1. Criei um container "container para centralizar o conteúdo e adicionar espaçamento.

2. Dentro do container, criei uma "row g-4 align-items-stretch"para organizar os produtos em uma grade responsiva.

3. Cada produto foi colocado dentro de "col-6 col-md-4", para que em telas pequenas apareçam 2 por linha e em telas maiores 3 por linha.

4. Usei "card h-100" para que todos os cards tenham altura igual, e dentro do card o card-body com d-flex flex-column para alinhar o botão de compra no final (mt-auto).

5. Para manter todas as imagens do mesmo tamanho, utilizei "ratio ratio-4x3" e object-fit: cover, garantindo que a proporção 4:3 seja respeitada e a imagem preencha a caixa sem distorcer.

6. Adicionei os botões de compra com btn btn-primary ou btn btn-success e w-100 para ocupar toda a largura do card.

7. Com isso, a página ficou responsiva, os cards alinhados e as imagens com tamanho uniforme, usando apenas Bootstrap.
