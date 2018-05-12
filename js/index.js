$(document).ready(function(){

    //$("body").niceScroll();

    pisca_cursor = 0;
    aux_pisca_cursor = true;
    escrevendo = false;
    
    escreve_agencia_digital = true;
    estapa_escreve_agencia_digital = 0;

    setInterval(function(){

        if(pisca_cursor == 2){
            escrevendo = true;
            if(escreve_agencia_digital){
                function_escreve_agencia_digital();
            }

        }else{

            if(escrevendo){
                if(aux_pisca_cursor){
                    $(".cursor").css("opacity","0");
                    aux_pisca_cursor = false;
                }else{
                    $(".cursor").css("opacity","100");
                    aux_pisca_cursor = true;
                    pisca_cursor ++;
                }
            }else{

                if(aux_pisca_cursor){
                    $(".cursor").remove();
                    aux_pisca_cursor = false;
                }else{
                    $("#mensagem").append("<i class='cursor'>|</i>");
                    aux_pisca_cursor = true;
                    pisca_cursor ++;

                }
            }
        }

    },200);
    
    function function_escreve_agencia_digital(){

        $(".cursor").remove();

        switch (estapa_escreve_agencia_digital) {
            case 0:
                $("#mensagem").append("A");
                estapa_escreve_agencia_digital ++;
                break;

            case 1:
                $("#mensagem").append("g");
                estapa_escreve_agencia_digital ++;
                break;

            case 2:
            $("#mensagem").append("ê");
            $("#mensagem").append("n");
            estapa_escreve_agencia_digital ++;
                break;

            case 3:
                
                estapa_escreve_agencia_digital ++;
                break;

            case 4:
                $("#mensagem").append("c");
                $("#mensagem").append("i");
                estapa_escreve_agencia_digital ++;
            break;
            
            case 5:
                $("#mensagem").append("a");
                estapa_escreve_agencia_digital ++;
            break;

            case 6:
                $("#mensagem").append(" D");
                estapa_escreve_agencia_digital ++;
            break;
            
            case 7:
                $("#mensagem").append("i");
                $("#mensagem").append("g");
                estapa_escreve_agencia_digital ++;
            break;

            case 8:
                $("#mensagem").append("i");
                estapa_escreve_agencia_digital ++;
            break;

            case 9:
                $("#mensagem").append("t");
                estapa_escreve_agencia_digital ++;
            break;

            case 10:
                $("#mensagem").append("al");
                estapa_escreve_agencia_digital ++;
                pisca_cursor = 0;
            break;

            case 11:
                apaga_escrita();
            break;

        } 

        $("#mensagem").append("<i class='cursor'>|</i>");

    }

    $("#btn_down,#agencia").click(function(){
        var aTag = $("#sobre_nos");
        $('html,body').animate({scrollTop: aTag.offset().top},'slow');
    })

});