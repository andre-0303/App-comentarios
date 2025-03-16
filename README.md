# Aplicação de Comentários 📢  

Este é um pequeno aplicativo de comentários desenvolvido com **React Vite** e **Bootstrap**. Ele permite que os usuários adicionem comentários em uma lista dinâmica.

## 🚀 Tecnologias Utilizadas  

- **React** (useState para gerenciar o estado)  
- **Bootstrap** (para estilização responsiva)  

## 📸 Captura de Tela  

![Captura de tela 2025-03-15 174957](https://github.com/user-attachments/assets/1be15008-69f6-4c03-9c40-0caefb77c873)


## 🛠️ Como Executar  

1. Clone o repositório:  
   ```bash
   git clone https://github.com/seu-usuario/App-comentarios.git
   ```

2. Instale as dependências:  
   ```bash
   cd nome-do-repo
   npm install
   ```

3. Execute o projeto:  
   ```bash
   npm run dev
   ```

4. Acesse no navegador:  
   ```
   http://localhost:5173
   ```

## 📌 Funcionalidades  

✅ Adicionar comentários  
✅ Renderizar os comentários na tela  
✅ Limpar o campo de texto após comentar  

## 📝 Código Principal  

O componente `Application` possui:  
- **Uma imagem** representando o tema do aplicativo  
- **Uma área de texto** para adicionar comentários  
- **Um botão "Comentar"** para adicionar o comentário à lista  
- **Uma lista dinâmica** que exibe os comentários adicionados  

```jsx
const [comentario, setComentario] = useState("");
const [comentarios, setComentarios] = useState([]);

function writeInTextArea(event) {
  setComentario(event.target.value);
}

function Clique() {
  if (comentario.trim() !== "") {
    setComentarios([...comentarios, comentario]);
    setComentario("");
  }
}
```

## 🎨 Estilização  

Utilizamos classes do **Bootstrap** para estilizar o layout de forma responsiva:  
- `container` para centralizar o conteúdo  
- `form-control` para estilizar o campo de entrada  
- `btn btn-primary` para estilizar o botão  
- `list-group` para estilizar a lista de comentários  

---  
Desenvolvido por Bandeira Dev
