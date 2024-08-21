
let i4 = 0
let jogadorvida = 5
while(jogadorvida > 0 && i4 == 0){

function vitoria(){
    i4 ++
    alert("Você vence as olimpiedas ganhando o OURO!\nApós passar por tudo você realiza mais um sonho, o sonho de trazer sua familia para proximo de você,\nParabens você venceu o jogo!")
}


let dinheiro = 3000
let energia = 100
let faculdade
let inventario = []



    

    function parte1(){
       

 alert("Você chega na tunisia, e o seu plano é estudar para se tornar um advogado.\n Mas tambem treinar luta pois é o seu hobby.")    
 let i = 0
      while( i == 0)  {
        treinoacademy = Number(prompt("Então qual centro de treinamento você quer \n1. Academia de Lutas do Magreb que ira custar $100 mas ira ganhar 40 energia\n 2. Academia de lutas luxury batherb que ira custar $400 mas ira ganhar 70 de energia\n *Coloque somente o numero"))
     if (treinoacademy == 1){
        i++
        treinoacademy = "Academia de Lutas do Magreb"
        dinheiro = dinheiro - 100
        energia = 40+energia


    }else if(treinoacademy == 2){
        i++
        treinoacademy = "2. Academia de lutas luxury batherb"
        dinheiro = dinheiro - 400
        energia = 70+energia
        

    }else{
        alert("Você Não está colocando um dos 2 numeros .")
    }

    }  
     
    alert("OK! Você escolheu a "+treinoacademy+" para ser sua academia e para você evoluir ganhando\nenergia para ter mais chances de ir bem nas olimpiedas.\nAperte enter para avançar")
    alert("Muito bem!")
    }


    function parte2(){
    alert("-$1200")
    dinheiro = dinheiro-1200
    alert("você acabou de pagar sua contas você pagou 1200 dolares em contas")
    let escolh
     while(escolh != 0){
        escolh = Number(prompt("Agora você pode verificar suas contas e etc, ou continuar\nDigite\n1.dinheiro\n2.Qual se centro de academia\n3.quanto está a sua vida\n4.Quanto enta sua energia\n0.Continuar"))
       if(escolh == 1){
        alert("$"+dinheiro)
       }else if(escolh == 2){
        alert(treinoacademy)
       }
       if(escolh == 3){
        alert("sua vida está em "+jogadorvida)
       }
       else if(escolh == 4){
        alert("Sua energia está em "+energia)
       }
     }
    }
    function parte3(){
     let escolha2
     alert("Agora Você escolhera o seu emprego, a vantagens e desvantagens\n Preste muita atenção\n Aperte enter para continuar")
     let i2 = 0
     while(i2 === 0){
     escolha2 = Number(prompt("1.Trabalho em empresa de aço dinheiro: 700     energia: 60 P/MÊS \n 2.Trabalho em comercio  Dinheiro 300   Energia: 30 P/MÊS "))
      
     if(escolha2 == 1){
        dinheiro = dinheiro + 700
        energia = energia - 60
        i2++

        }else if( escolha2 == 2){
            dinheiro = dinheiro+300
            energia = energia+30
            i2++
        }else{
            alert("Você não está escolhendo os trabalhos(para avançar é obrigatotio)")
        }
     }

     }

     function parte4(){

      alert("Agora você tem um sustento!\nTrabalhando e fazendo academia você pode chegar muito bem nas olimpiedas!\nAperte enter para continuar")
      alert("Mas você tinha um sonho, se lembra?\nVocê queria virar uma advogado, entâo surgiu uma proposta para você escolher entre 2 faculdades.\nAperte enter para continuar")
      

      let ecolhas 
      while(ecolhas != 1 && ecolhas != 3){
        ecolhas = Number(prompt("Qual das faculdades você vai querer? Digite os numeros abaixo\n1.faculdade de Tunis\n2.informações sobre a faculdade de Tunis\n3.faculdade de tabhet\n4.informações sobre a faculdade de tabhet."))

        if(ecolhas == 1){
          faculdade = "Faculdade de Tunis"
          energia = energia - 40
          dinheiro =dinheiro-600
          
        }else if(ecolhas == 2){
            alert("Localidade:Tunis(capital da Turquia)\nPreço:$600/MÊS\nIra consumir 40 de enrgia\nCurso: Direito")

        }if(ecolhas == 3){
            faculdade = "faculdade de tabhet"
            energia = energia - 70
            dinheiro = dinheiro-800
        }
        else if(ecolhas == 4){
            alert("Localidade:Istambul\nPreço:$800/MÊS\nIra consumir 70 de energia\nCurso: Direito")
        }
      }
      }
      function parte5(){
       //
      //40 de energia //1300 dinheiro
      alert(dinheiro+" "+energia)
      alert("Muito Bem! Você escolheu sua faculdade! Você escolheu a "+faculdade)
      alert("Agora você vai escolher os itens que fara você evoluir e que você usara nas olimpiedas")
      alert("Mas tudo vai depender de suas escolhas anteriores, se forem boas você vai ter chance de ir bem, se não...")
      }
alert("Aqui você começa sua trajetoria\n APERTE ENTER PARA CONTINUAR")

alert("Você é um iraniano chamado Jamal, que tem o sonho de chegar nas olimpiedas, mas para você chegar até la você\nprecisa passar por uma grande caminhada com desafios e etc..!")

alert("A seu inicio de caminhada esta chegando!\nAPERTE ENTER PARA CONTINUAR")

alert("Você está viajando e saindo do seu pais natal o Irã ,que está em conflito, e voce vai ter que ir para a tunisia pois é aonde você poupará mais dinheiro.\n Aperte enter para continuar.")
parte1()
parte2()
parte3()
parte4()


       
while(dinheiro < 1000){

  
      dinheiro = 3000
    
      jogadorvida = jogadorvida - 1
   
        alert("Você ira voltar para as seus ultimos checkpoints, pois suas escolhas foram ruins, então iremos dar mais chances ,aproveite ela! \nMas você ira perder 1 vida")
        parte1()
        parte2()
        parte3()
        parte4()
    
        
}
    alert("Agora você vai escolher o que você quer levar em seu inventario para as olimpiedas\nAperte enter para continuar")
        
let escolhainven
i3 = 0
  
while(escolhainven != 0 && dinheiro >= 300){
         alert("seu dinheiro: "+dinheiro)
          escolhainven = Number(prompt("\n1.sabedoria: $400\n2.resistencia: $400   \n3.Calma $400\n4.força extra $400\n0.continuar"))
           
         if(escolhainven === 1){
            dinheiro = dinheiro -400
            inventario.push("sabedoria")
            i3++


         }else if(escolhainven === 2){
            dinheiro = dinheiro -400
            inventario.push("resistencia")
            i3++

         }if(escolhainven === 3){
            dinheiro = dinheiro -400
            inventario.push("calma")
            i3++

         }else if(escolhainven === 4){
            dinheiro = dinheiro -400
          inventario.push("força extra")   
          i3++
          }
}
         if(dinheiro <= 400){
            alert("com seu dinheiro disponivel, não é mais possivel adquirir mais palavras")
 }
       alert("Você adquriu ao total "+i3+" palavras, e irá usar elas nas olimpiedas\nVocê adquriu: "+inventario+"\nBoa Sorte!\nAperte enter para continuar.")
       

       




       alert("Você pegou uma avião direto para paris para participar das olimpiedas de PARIS 2024.")
       alert("Você chega no grande dia, e agora tera sua missão de chegar ao tao sonhado do ouro")
       alert("Você entra no ringue, e sua luta começa.")
       alert("Você luta e com muita garra vence o seu primeiro jogo!")
       alert("Você vai para a semi-final e lá você tem muita dificuldade")
       alert("Você tenta de todas as formas vence-lo mas é muito dificil")
       alert(" Mas após 9 minutos de luta você acerta um golpe muito bom, assim nocauteando ele e vencendo o jogo! assim avançando para a final!")
       alert("Você em sua primeira olimpieda chega na final!\nIsso mostra como você se dedicou para esse momento.\n Agora é embusca do ouro ou prata!")
       let resposta
       alert("A pós o jogo você esta cansado, mas tem que dar entrevistas")
       alert("Agora você fala o que vai falar na frente das cameras ")

       alert("A pergunta foi:\nComo você espera chegar na final?\nAperte enter para responder")
       resposta = prompt("coloque a resposta aqui:")
       alert("Bem, agora você tem que descansar para o grande dia!")


       let escolha3
       
       
       alert("Amanhece e é o grande dia!\nVocê acorda e vai direto comer e ir se aquecer!")
       alert("o grande momento chega, e você tem que entra no ringue!\nVocê entra, mas o nervosismo toma total conta")
       
       alert("seu adversario rapidamente da um golpe e você cai no chão, mas você tem achance de usar uma de suas palavras")
       let escoha = prompt("Qual das suas palavras você vai usar? "+inventario)




       if(escoha == "calma"){
        alert("Você escolheu a palavra perfeita!\nVocê se acalma e se recupera, e com rapidez acerta um soco cruzado! e atordoa o seu inimigo!")
        vitoria()

       }else if(escoha == "sabedoria"){
        alert("Você usa sua sabedoria e assim consegue achar uma sequencia de golpes maravilhosa, assim com sua boa escolha você vence o jogo")
        vitoria()

       }if(escoha == "força extra"){
        alert("Você usa sua força mas não foi o que a sitiação pedia")
        alert("Você estava muito nervoso, mas sua força foi admirável, levando você até a medalha de prata. Sua determinação e esforço não passaram despercebidos, mas seu objetivo principal não foi atingido")
         alert("APERTE ENTER PARA REINICIAR O JOGO")
       }else if(escoha == "resistencia"){
        alert("com essa escolha você resiste por muito tempo, sua resistência foi notável, mas a situação que você estava ela não se encaixava.")
        alert("você consegue a medalha de prata mas seu objetivo principal não foi atingido.")
        alert("APERTE ENTER PARA REINICIAR O JOGO")
        }
    }

