Contas de armazenamento (Storage Accounts) precisam de um nome exclusivo, ele pode armazenar diversos tipos de dados como arquivos, tabelas, filas, blobs, etc. Pode configurar a redundância de 

Inserir imagem dps


LRS (armazenamento com redundância local): Há 3 cópias em um mesmo datacenter, se cair o datacenter, perdeu tudo

ZRS (armazenamento com redundância de zona): Há cópias em 3 datacenters diferentes dentro de uma mesma região, se cair um datacenter, ainda tem os outros 2, mas se cair a região, perdeu tudo

GRS (armazenamento com redundância geográfica): No caso há 3 cópias em um datacenter de uma região e 1 cópia em uma outro datacenter em uma região par

GZRS (armazenamento com redundância de zona geográfica): há 3 cópias em 3 datacenters diferentes dentro de uma mesma região e 1 cópia em um datacenter de uma região par 

## Camadas de acesso

### Frequente / hot

- Acesso frequente e rápido
- Cobra mais para armazenar do que fazer busca

### Esporádico / cool

- É mais barato para buscas de dados que estão armazenados há mais de 30 dias
- Acesso esporádico


### Esfriamento / cold

- É mais barato para armazenar do que fazer buscas, buscas de dados que estão armazenados pelo menos 90 dias ficam otimizados
- Acesso raro

### Arquivo morto / archive

- É mais barato para armazenar do que fazer buscas, buscas de dados que estão armazenados pelo menos 180 dias ficam otimizados
- Acesso extremamente raro
