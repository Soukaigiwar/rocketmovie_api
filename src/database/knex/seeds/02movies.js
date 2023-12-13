exports.seed = function(knex, Promise) {
  return knex.raw('PRAGMA foreign_keys = OFF;')
  .then(() => knex('movie_notes').del())
  .then(function () {
    return knex('movie_notes').insert([
      {
        id: 1,
        title: 'Deixar o Mundo Para Trás',
        description: 'As férias de uma família numa casa de luxo ganham contornos sinistros quando um ciberataque acaba com as comunicações eletrónicas e aparecem dois estranhos à sua porta.',
        rating: '3',
        user_id: '1'
      },
      {
        id: 2,
        title: 'Assassinos da Lua das Flores',
        description: 'Durante os anos de 1920, nas terras ricas em petróleo da Nação Osage, no estado norte-americano do Oklahoma, uma sucessão de assassinatos brutais, que ficou conhecida como o Reino do Terror, desencadeia uma investigação em grande escala por parte do recém-formado FBI.',
        rating: '3',
        user_id: '1'
      },
      {
        id: 3,
        title: 'Wonka',
        description: 'Um jovem Willy Wonka embarca numa missão para espalhar a alegria através do chocolate e rapidamente se torna um fenómeno.',
        rating: '4',
        user_id: '1'
      },
      {
        id: 4,
        title: 'Elemental',
        description: 'Na Cidade Elemento, os moradores de fogo, água, terra e ar vivem em conjunto. A história apresenta Chispa, uma jovem perspicaz e impetuosa, cuja amizade com Nilo, um rapaz divertido, sentimental e descontraído, desafia as suas crenças sobre o mundo em que vivem.',
        rating: '4',
        user_id: '1'
      },
      {
        id: 5,
        title: 'Ilha do medo',
        description: '1954, o pico da Guerra Fria, os agentes Teddy Daniels e Chuck Aule são convocados a "Shutter Island" para investigar o improvável desaparecimento de uma criminosa do impenetrável Ashecliffe Hospital. Rodeados por circunspectos psiquiatras e perigosos pacientes psicopatas, eles vêem-se envolvidos numa atmosfera misteriosa e volátil que sugere que nada é o que parece…',
        rating: '5',
        user_id: '1'
      },
      {
        id: 6,
        title: 'O Cavaleiro das Trevas',
        description: 'Com o Tenente Jim Gordon e o Procurador-geral Harvey Dent, Batman decide destruir o crime organizado. Mas surge um criminoso em ascensão, Joker, que leva Gotham à anarquia e força o Dark Knight a ficar perto de passar de herói a vigilante.',
        rating: '4',
        user_id: '1'
      },
      {
        id: 7,
        title: 'Clube de Combate',
        description: 'O Clube de combate é uma invenção de Tyler Durden, um génio anarquista, e são apenas o início dos seus planos de vingança contra um mundo onde jovens saudáveis vão a reuniões de grupos de apoio ao cancro porque apenas aí conseguem encontrar calor humano e compaixão.',
        rating: '5',
        user_id: '1'
      },
      {
        id: 8,
        title: 'A Viagem de Chihiro',
        description: 'Chihiro é uma menina de 10 anos e está em mudanças com a família, para uma nova casa nos subúrbios, quando o seu pai decide ir por um atalho, uma estrada escura e isolada. Depois de saírem do carro e entrar a pé numa pequena vereda, descobrem um restaurante ao ar livre, com muita comida, mas sem empregador ou clientes. Os pais não hesitam e sentam-se, mas Chihiro pressente o perigo e recusa. À medida que a noite avança, Chihiro está aterrorizada por ver em todo a lado caras medonhas de espíritos e formas que se animam.',
        rating: '5',
        user_id: '1'
      },
    ]);
  })
  .finally(() => knex.raw('PRAGMA foreign_keys = ON;'));
};