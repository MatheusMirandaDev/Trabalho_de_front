<?php
include('ConexaoBancoDeDados.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    $nome = htmlspecialchars($_POST['nome']);
    $email = htmlspecialchars($_POST['email']);
    $telefone = htmlspecialchars($_POST['telefone']);
    $senha = htmlspecialchars($_POST['senha']);
    $confirmar_senha = htmlspecialchars($_POST['confirmar_senha']);

    // Verifica se as senhas coincidem
    if ($senha === $confirmar_senha) {
        
        // Verifica se o usuário já existe
        $stmt = $con->prepare("SELECT * FROM usuario WHERE nome = ?");
        $stmt->bind_param("s", $nome);
        $stmt->execute();
        $resultado = $stmt->get_result();

        if ($resultado->num_rows > 0) {
            // Mensagem de erro
            echo "<h4 class='msg-erro'>Esse Usuário já existe, tente outro!</h4>";
        } else {
            // Insere o novo usuário no banco
            $hashsenha = password_hash($senha, PASSWORD_DEFAULT);

            
            $stmt = $con->prepare("INSERT INTO usuario (nome, email, telefone, senha) VALUES (?, ?, ?, ?)");
            $stmt->bind_param("ssss", $nome, $email, $telefone, $hashsenha);
            
            if ($stmt->execute()) {
                // Mensagem de sucesso
                echo "<h4 class='msg-sucesso'>Cadastro realizado com sucesso!</h4>";

                // Redireciona para a página index.html após o cadastro
                header("Location: index.html");
                exit();  
            } else {
                echo "<h4 class='msg-erro'>Erro ao cadastrar: " . $stmt->error . "</h4>";
            }
        }
    } else {
        // Mensagem de erro de senha
        echo "<h4 class='msg-erro'>As senhas não coincidem.</h4>";
    }
}
?>
