# Rentx

## Cadastro de Carros

### (RF) Requisitos funcionais

[V] - Deve ser possivel cadastrar um novo carro.
[V] - Deve ser possivel listar todas as categorias.

### (RNF) Requisitos não funcionais

### (RN) Regras de negócios 

[V] - O Usuário responsavel pelo cadastro deve ser um usuário administrador.
[V] - O Carro deve ser cadastrado com a disponibilidade padrão igual a "true"
[V] - Não deve ser possivel cadastrar dois ou mais carros com uma placa já existente.

## Listagem de Carros

### (RF) Requisitos funcionais
[V] - Deve ser possivel listar todos os carros disponiveis.
[V] - Deve ser possivel listar todos os carros disponiveis pela categoria.
[V] - Deve ser possivel listar todos os carros disponiveis pelo nome da marca do carro.
[V] - Deve ser possivel listar todos os carros disponiveis pelo nome do modelo do carro.

### (RNF) Requisitos não funcionais

### (RN) Regras de negócios 

[_] - Não é necessário estar logado no sistema para vizualizar a listagem dos carros disponiveis.

## Cadastro de Especificação no Carro

### (RF) Requisitos funcionais

[_] - Deve ser possivel cadastrar uma especificação para um carro. 

### (RNF) Requisitos não funcionais

### (RN) Regras de negócios 

[_] - Não deve ser possivel cadastrar uma especificação para um carro não cadastrado.
[_] - Não deve ser possivel cadastrar uma especificação já existente para um carro.  

## Cadastro de imagens do carro

### (RF) Requisitos funcionais
[_] - Deve ser possivel cadastrar a imagem do carro. 
[_] - Deve ser possivel listar todos os carro. 

### (RNF) Requisitos não funcionais
[_] - Utilizar o multer para upload dos arquivos.

### (RN) Regras de negócios 
[_] - O usuario responsavel pelo cadastro dever ser administrador.
[_] - O usuario deve poder cadastrar mais de uma imagem para mesmo carro.



## Agendamento do aluguel de carro 

### (RF) Requisitos funcionais
[_] - Deve ser cadastrar um agendamento de aluguel.

### (RNF) Requisitos não funcionais

### (RN) Regras de negócios 
[_] - Somente um usuario logado deve ser permitido o agendamento de aluguel.
[_] - O agendamento de aluguel deve ter duração minima de 24 hora. 
[_] - Não deve ser possivel cadastrar um novo aluguel casso exista um agendamento aberto para o mesmo usuario.
[_] - Não deve ser possivel cadastrar um novo aluguel casso exista um agendamento aberto para o um carro não disponivel.