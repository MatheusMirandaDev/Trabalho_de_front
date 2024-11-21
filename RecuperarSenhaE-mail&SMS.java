package RecuperarSenha;

import java.util.ArrayList;
import java.util.Scanner;

class Gerente{
    String nome;
    String email;
    String senha;
    String telefone;
    int id;
    public Gerente(String nome, String email, String senha, String telefone,int id){
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.telefone = telefone;
        this.id = id;
    }

}

public class Teste {
    private static ArrayList<Gerente> g = new ArrayList<>();

public static void RecuperarSenha(){
    g.add(new Gerente("João","joaopedro@gmail.com","1234J","9988-7766",9876)); //Exemplo para rodar o código.
    String emailP; //Variáveis auxiliares.
    String telefoneP;
    int codigo = 1234;
    int codigoP;
    int m = 0;
    String senhaN;
    String senhan;
    Scanner scan = new Scanner(System.in);
        while (m != 3) { // O while faz com que o usuário saia do código ao escolher "Cancelar"(3).
            System.out.println("Deseja recuperar sua senha por meio de");
            System.out.println("(1) E-mail");
            System.out.println("(2) SMS");
            System.out.println("(3) Cancelar");
                m = scan.nextInt();
                scan.nextLine();
            switch (m) {
                case 1: //Código por e-mail.
                    System.out.println("Digite seu e-mail:");
                    emailP = scan.nextLine();
                    boolean buscarEmail = false; //Variável do tipo boolean é utilizada na hora de verificar se o e-mail está no sistema.
                    for (Gerente gerente : g) {
                        if (gerente.email.equals(emailP)){ //Verifica se o e-mail já está no sistema.
                            buscarEmail = true;
                            System.out.println("Um código foi enviado ao seu e-mail");
                            do{
                            System.out.println("Código:");
                            codigoP = scan.nextInt();
                            scan.nextLine();
                                if (codigoP == codigo){ //Verifica se o código está certo.
                                    do{ //Faz com que a pessoa fique trocando a senha até que os campos fiquem iguais e a nova senha seja diferente da anterior.
                                    System.out.println("Nova senha:");
                                        senhaN = scan.nextLine();
                                    System.out.println("Confirmar senha:");
                                        senhan = scan.nextLine();
                                            if(!senhaN.equals(senhan)){ //Verifca se os campos são iguais.
                                                System.out.println("As senhas não são iguais.");
                                            }else if(senhaN.equals(gerente.senha)){ //Verifica se a nova senha é igual à anterior.
                                                System.out.println("A senha não pode ser igual à anterior.");
                                            }                                    
                                    }while(!senhaN.equals(senhan) || senhaN.equals(gerente.senha));
                                                gerente.senha = senhaN; //Faz a troca de senha.
                                                System.out.println("Senha redefinida.");
                                }else{ //Caso o código seja inválido, o usuário terá duas opções: Tente novamente(1) e Cancelar(2).
                                    System.out.println("Código inválido.");
                                    System.out.println("(1) Tente novamente");
                                    System.out.println("(2) Cancelar");
                                        m = scan.nextInt();
                                        scan.nextLine();
                                    switch(m){
                                        case 1:
                                            break;
                                        case 2:
                                        codigoP = codigo; //Termina o código por meio do m = 3.
                                            break;
                                    }
                                }
                            }while(codigoP != codigo); //Se o código estiver certo ou o usuário tenha decidido cancelar o loop terminará.
                        }if(!buscarEmail){ 
                            System.out.println("E-mail não registrado.");
                        }
                    }
                    m = 3; //Finaliza do código.
                    break;
                case 2: //Código por SMS.
                    System.out.println("Digite o número do seu telefone:");
                    telefoneP = scan.nextLine();
                    boolean buscarTelefone = false; //Variável do tipo boolean utilizada na hora de verificar se o telefone está no sistema.
                    for (Gerente gerente : g){
                        if (gerente.telefone.equals(telefoneP)){ //Verifica se o telefone está no sistema.
                            buscarTelefone = true;
                            System.out.println("Um código foi enviado via SMS");
                            do{ //"do while" 
                            System.out.println("Código:");
                            codigoP = scan.nextInt();
                            scan.nextLine();
                                if (codigoP == codigo){ //Verifica se os códigos são iguais.
                                    do{ //Faz com que a pessoa fique trocando a senha até que os campos fiquem iguais e a nova senha seja diferente da anterior.
                                    System.out.println("Nova senha:");
                                        senhaN = scan.nextLine();
                                    System.out.println("Confirmar senha:");
                                        senhan = scan.nextLine();
                                            if(!senhaN.equals(senhan)){ //Verifica se os campos são iguais.
                                                System.out.println("As senhas não são iguais.");
                                            }else if(senhaN.equals(gerente.senha)){ //Verifica se a nova senha é igual à anterior.
                                                System.out.println("A senha não pode ser igual à anterior.");
                                            }                                    
                                    }while(!senhaN.equals(senhan) || senhaN.equals(gerente.senha));
                                                gerente.senha = senhaN; //Faz a troca de senha.
                                                System.out.println("Senha redefinida.");
                                }else{
                                    System.out.println("Código inválido");
                                    System.out.println("(1) Tente novamente");
                                    System.out.println("(2) Cancelar");
                                        m = scan.nextInt();
                                        scan.nextLine();
                                    switch(m){
                                        case 1:
                                            break;
                                        case 2:
                                        codigoP = codigo; //Finaliza o código por meio do m = 3.
                                            break;
                                    }
                                }
                            }while(codigoP != codigo); //Se o código estiver certo ou o usuário tenha decidido cancelar o loop terminará.
                        }if(!buscarTelefone){
                            System.out.println("Número de telefone não registrado.");
                        }
                    }
                    m = 3; //Finaliza o código.
                    break;
                case 3:
                    m = 3; //Finaliza o código.
                    break;
            
                default:
                    System.out.println("Opção inválida.");
                    break;
            }
        }
    }
    public static void main(String[]args){
        RecuperarSenha();
    }
}
