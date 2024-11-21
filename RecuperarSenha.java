package recuperar_senha;

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
    Gerente ex = new Gerente("João", "joaopedro@gmail.com", "1234J", "9988-7766", 9876); //Exemplo para rodar o código.
    String senhaN; //Variáveis auxiliares.
    String senhan;
    Scanner scan = new Scanner(System.in);
        System.out.println("Redefinir senha:");
        do{ //Loop com "do while" - A senha precisar ser diferente da anterior e os campos devem ter a mesma senha para que o loop termine.
            System.out.println("Nova senha:");
                senhaN = scan.nextLine();
            System.out.println("Confirmar senha:");
                senhan = scan.nextLine();
                    if(!senhaN.equals(senhan)){ //Confere se os campos são iguais.
                        System.out.println("As senhas não são iguais.");
                    }else if (senhaN.equals(ex.senha)){ // Confere se a senha é igual à anterior.
                            System.out.println("A senha não pode ser igual à anterior.");
                        }         
        }while(!senhaN.equals(senhan) || senhaN.equals(ex.senha));
                            ex.senha = senhaN; //Faz a troca de senha.
                            System.out.println("Senha redefinida.");   
}
    public static void main(String[]args){
       RecuperarSenha();
    }
}
